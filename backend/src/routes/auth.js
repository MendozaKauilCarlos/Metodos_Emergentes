const express = require('express');
const { usuarios } = require('../data/store');
const { esCorreoInstitucional } = require('../utils/validarEmail');

const router = express.Router();

/**
 * POST /api/auth/login
 * Login con correo institucional. Devuelve usuario y token para que el cliente
 * guarde en localStorage y mantenga la sesión (persistencia inicial).
 */
router.post('/login', (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Falta el correo' });
  }
  if (!esCorreoInstitucional(email)) {
    return res.status(400).json({
      error: 'El correo debe ser institucional (@itcancun.edu.mx)',
    });
  }
  const usuario = usuarios.find((u) => u.email === email.trim().toLowerCase());
  if (!usuario) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }
  const token = `sesion-${usuario.id}-${Date.now()}`;
  res.json({
    user: usuario,
    token,
    message: 'Guardar token y user en localStorage para persistir la sesión',
  });
});

/**
 * GET /api/auth/me
 * Devuelve el usuario actual usando el token (ej. restaurado desde localStorage).
 * Header: Authorization: Bearer <token>
 */
router.get('/me', (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Token no enviado' });
  }
  const token = authHeader.slice(7);
  const match = token.match(/^sesion-(\d+)-/);
  if (!match) {
    return res.status(401).json({ error: 'Token inválido' });
  }
  const userId = parseInt(match[1], 10);
  const usuario = usuarios.find((u) => u.id === userId);
  if (!usuario) {
    return res.status(401).json({ error: 'Usuario no encontrado' });
  }
  res.json(usuario);
});

module.exports = router;
