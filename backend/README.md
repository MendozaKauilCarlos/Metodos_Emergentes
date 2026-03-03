# Ride to Class - Backend API

API REST para la aplicación **Ride to Class**: transporte compartido entre estudiantes (conductores y pasajeros).

## Requisitos

- Node.js 18+

## Instalación

```bash
cd backend
npm install
```

## Ejecutar

```bash
npm start
```

Modo desarrollo (reinicio automático):

```bash
npm run dev
```

El servidor queda en **http://localhost:3000**.

## Endpoints

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/` | Info de la API |
| GET | `/api/usuarios` | Listar usuarios |
| GET | `/api/usuarios/:id` | Obtener usuario |
| GET | `/api/usuarios/rol/:rol` | Usuarios por rol (`conductor` \| `pasajero`) |
| POST | `/api/usuarios` | Crear usuario (body: nombre, email, rol, telefono) |
| GET | `/api/viajes` | Listar viajes (query: `estado`, `conductorId`) |
| GET | `/api/viajes/:id` | Obtener viaje con datos del conductor |
| POST | `/api/viajes` | Crear viaje (body: conductorId, origen, destino, fecha, hora, asientos) |
| PATCH | `/api/viajes/:id` | Actualizar estado (`disponible`, `en_curso`, `completado`, `cancelado`) |

## Ejemplo de uso

```bash
# Listar viajes disponibles
curl http://localhost:3000/api/viajes?estado=disponible

# Crear pasajero
curl -X POST http://localhost:3000/api/usuarios -H "Content-Type: application/json" -d "{\"nombre\":\"Maria\",\"email\":\"maria@edu.mx\",\"rol\":\"pasajero\"}"
```
