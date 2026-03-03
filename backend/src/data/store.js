// Almacenamiento en memoria (se puede reemplazar por base de datos después)
const usuarios = [
  {
    id: 1,
    nombre: 'Carlos',
    email: 'carlos@itcancun.edu.mx',
    rol: 'conductor',
    telefono: '+52 555 000 0001',
  },
  {
    id: 2,
    nombre: 'Alejandro',
    email: 'alejandro@itcancun.edu.mx',
    rol: 'pasajero',
    telefono: '+52 555 000 0002',
  },
];

const viajes = [
  {
    id: 1,
    conductorId: 1,
    origen: 'Estación Central',
    destino: 'Campus Norte',
    fecha: '2026-03-04',
    hora: '08:00',
    asientos: 3,
    estado: 'disponible',
  },
];

module.exports = { usuarios, viajes };
