const express = require('express');
const { usuarios } = require('../data/store');
const { esCorreoInstitucional } = require('../utils/validarEmail');

const router = express.Router();

// GET /api/usuarios - Listar todos los usuarios
router.get('/', (req, res) => {
  res.json(usuarios);
});

// GET /api/usuarios/rol/:rol - Filtrar por rol (conductor | pasajero) - antes de /:id
router.get('/rol/:rol', (req, res) => {
  const rol = req.params.rol.toLowerCase();
  const filtrados = usuarios.filter((u) => u.rol === rol);
  res.json(filtrados);
});

// GET /api/usuarios/:id - Obtener un usuario por ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const usuario = usuarios.find((u) => u.id === id);
  if (!usuario) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }
  res.json(usuario);
});

// POST /api/usuarios - Crear usuario (conductor o pasajero)
router.post('/', (req, res) => {
  const { nombre, email, rol, telefono } = req.body;
  if (!nombre || !email || !rol) {
    return res.status(400).json({ error: 'Faltan nombre, email o rol' });
  }
  if (!esCorreoInstitucional(email)) {
    return res.status(400).json({
      error: 'El correo debe ser institucional (@itcancun.edu.mx)',
    });
  }
  if (!['conductor', 'pasajero'].includes(rol.toLowerCase())) {
    return res.status(400).json({ error: 'Rol debe ser conductor o pasajero' });
  }
  const id = usuarios.length ? Math.max(...usuarios.map((u) => u.id)) + 1 : 1;
  const nuevo = { id, nombre, email: email.trim().toLowerCase(), rol: rol.toLowerCase(), telefono: telefono || '' };
  usuarios.push(nuevo);
  res.status(201).json(nuevo);
});

module.exports = router;
