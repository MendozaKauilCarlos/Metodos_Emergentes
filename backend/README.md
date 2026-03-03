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
| POST | `/api/auth/login` | Login (body: email). Devuelve `user` y `token` para guardar en **localStorage**. |
| GET | `/api/auth/me` | Usuario actual (header: `Authorization: Bearer <token>`). Para restaurar sesión desde localStorage. |
| GET | `/api/usuarios` | Listar usuarios |
| GET | `/api/usuarios/:id` | Obtener usuario |
| GET | `/api/usuarios/rol/:rol` | Usuarios por rol (`conductor` \| `pasajero`) |
| POST | `/api/usuarios` | Crear usuario (body: nombre, email **@itcancun.edu.mx**, rol, telefono) |
| GET | `/api/viajes` | Listar viajes (query: `estado`, `conductorId`) |
| GET | `/api/viajes/:id` | Obtener viaje con datos del conductor |
| POST | `/api/viajes` | Crear viaje (body: conductorId, origen, destino, fecha, hora, asientos) |
| PATCH | `/api/viajes/:id` | Actualizar estado (`disponible`, `en_curso`, `completado`, `cancelado`) |

## Persistencia inicial (localStorage)

El cliente debe guardar las credenciales devueltas por `POST /api/auth/login` en **localStorage** para mantener la sesión:

- `token`: enviarlo en `Authorization: Bearer <token>` en las peticiones que requieran autenticación.
- `user`: opcional, para mostrar datos sin llamar a `/api/auth/me` al cargar la app.

Para restaurar la sesión al recargar: leer el token de localStorage y llamar a `GET /api/auth/me` con ese token.

## Ejemplo de uso

```bash
# Listar viajes disponibles
curl http://localhost:3000/api/viajes?estado=disponible

# Crear pasajero (correo institucional obligatorio)
curl -X POST http://localhost:3000/api/usuarios -H "Content-Type: application/json" -d "{\"nombre\":\"Maria\",\"email\":\"maria@itcancun.edu.mx\",\"rol\":\"pasajero\"}"

# Login (guardar user y token en localStorage en el frontend)
curl -X POST http://localhost:3000/api/auth/login -H "Content-Type: application/json" -d "{\"email\":\"carlos@itcancun.edu.mx\"}"

# Obtener usuario actual con token
curl http://localhost:3000/api/auth/me -H "Authorization: Bearer sesion-1-1234567890"
```
