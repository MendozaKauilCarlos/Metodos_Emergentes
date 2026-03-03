const express = require('express');
const cors = require('cors');
const usuariosRouter = require('./routes/usuarios');
const viajesRouter = require('./routes/viajes');
const authRouter = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    nombre: 'Ride to Class API',
    version: '1.0.0',
    endpoints: {
      auth: '/api/auth',
      usuarios: '/api/usuarios',
      viajes: '/api/viajes',
    },
  });
});

app.use('/api/auth', authRouter);
app.use('/api/usuarios', usuariosRouter);
app.use('/api/viajes', viajesRouter);

app.listen(PORT, () => {
  console.log(`Servidor Ride to Class en http://localhost:${PORT}`);
});
