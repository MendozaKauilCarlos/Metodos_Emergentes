# Ride to Class - Frontend

Interfaz web de **Ride to Class**. Login y registro usan la API del backend y guardan credenciales en **localStorage** para mantener la sesión.

## Cómo usar

1. Inicia el backend (desde la raíz del repo):
   ```bash
   cd backend && npm start
   ```
2. Abre en el navegador: **http://localhost:3000**
3. Regístrate con un correo **@itcancun.edu.mx** o inicia sesión si ya estás registrado en la API.

La sesión (usuario y token) se guarda en `localStorage`; al recargar la página o volver más tarde seguirás logueado hasta que cierres sesión o borres datos del sitio.
