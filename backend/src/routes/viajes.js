const express = require('express');
const { viajes, usuarios } = require('../data/store');

const router = express.Router();

// GET /api/viajes - Listar todos los viajes
router.get('/', (req, res) => {
  const { estado, conductorId } = req.query;
  let resultado = [...viajes];
  if (estado) resultado = resultado.filter((v) => v.estado === estado);
  if (conductorId) resultado = resultado.filter((v) => v.conductorId === parseInt(conductorId, 10));
  res.json(resultado);
});

// GET /api/viajes/:id - Obtener un viaje por ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const viaje = viajes.find((v) => v.id === id);
  if (!viaje) {
    return res.status(404).json({ error: 'Viaje no encontrado' });
  }
  const conductor = usuarios.find((u) => u.id === viaje.conductorId);
  res.json({ ...viaje, conductor: conductor || null });
});

// POST /api/viajes - Crear viaje (conductor publica)
router.post('/', (req, res) => {
  const { conductorId, origen, destino, fecha, hora, asientos } = req.body;
  if (!conductorId || !origen || !destino || !fecha || !hora || asientos == null) {
    return res.status(400).json({
      error: 'Faltan campos: conductorId, origen, destino, fecha, hora, asientos',
    });
  }
  const conductor = usuarios.find((u) => u.id === parseInt(conductorId, 10));
  if (!conductor || conductor.rol !== 'conductor') {
    return res.status(400).json({ error: 'conductorId debe ser un usuario con rol conductor' });
  }
  const id = viajes.length ? Math.max(...viajes.map((v) => v.id)) + 1 : 1;
  const nuevo = {
    id,
    conductorId: parseInt(conductorId, 10),
    origen,
    destino,
    fecha,
    hora,
    asientos: parseInt(asientos, 10) || 1,
    estado: 'disponible',
  };
  viajes.push(nuevo);
  res.status(201).json(nuevo);
});

// PATCH /api/viajes/:id - Actualizar estado del viaje
router.patch('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const viaje = viajes.find((v) => v.id === id);
  if (!viaje) return res.status(404).json({ error: 'Viaje no encontrado' });
  const { estado } = req.body;
  if (estado) {
    if (!['disponible', 'en_curso', 'completado', 'cancelado'].includes(estado)) {
      return res.status(400).json({ error: 'Estado no válido' });
    }
    viaje.estado = estado;
  }
  res.json(viaje);
});

module.exports = router;
