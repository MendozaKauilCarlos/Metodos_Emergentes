# QUIBI PROYECT

### ANÁLISIS
Plataforma de contenido en streaming, exclusiva para smartphones, que consiste en la reproducción rápida e instantánea de videos de no más de 10 minutos. No era una aplicación gratuita, sino que requería una suscripción para acceder a sus funciones. Fue lanzada al inicio de la pandemia de COVID-19, lo que debió convertirla en una aplicación interesante para ese momento.

### PROBLEMÁTICAS
* **PAGO DE SUSCRIPCIÓN**: Al ser una aplicación de pago, no ofrecía algo innovador o diferente frente a otras aplicaciones de uso gratuito.
* **CONTENIDO ENFOCADO A CELEBRIDADES**: El contenido no era variado ni ofrecía libertad a los usuarios para ver algo más de lo que el encargado quería mostrar.
* **LIMITACIÓN DE LA APLICACIÓN**: No permitía compartir contenido ni sacar capturas de pantalla, lo que impidió su promoción orgánica.
* **MAL ANÁLISIS DEL MERCADO**: No se tuvieron en cuenta las tendencias ni lo que era importante para los usuarios en ese momento.
* **FALTA DE COMUNICACIÓN**: Posiblemente hubo una mala coordinación entre la empresa y los trabajadores para innovar en la aplicación.

### ESTRATEGIAS
Principalmente se contempló el uso de **Kanban**, una metodología ágil que sirve para organizar, visualizar y mejorar el flujo de trabajo de un proyecto. Mediante un tablero con columnas como "Por hacer", "En proceso", "En revisión" y "Terminado", se logra una mayor transparencia entre los integrantes del equipo.

* **Límites WIP**: Se asignarán límites de trabajo en progreso para evitar la sobrecarga de los desarrolladores.
* **Priorización del Backlog**: Enfoque en funcionalidades esenciales y validación temprana con usuarios reales.
* **Comunicación Continua**: Fomento de una toma de decisiones rápida y constante entre las áreas técnica y de negocio.

## ROLES

| Encargado | ROL |
| :--- | :--- |
| MENDOZA KAUIL CARLOS EDUARDO | Coordinador Kanban |
| REYES DOLORES ALEJANDRO | Product Owner |
| ALEJANDRO SÁNCHEZ | Diseñador UX/UI |
| COHEN ALAIN | Desarrollador Backend |
| MENDOZA KAUIL | Desarrollador Frontend |
| REYES DOLORES ALEJANDRO | Tester / Control de calidad (QA) |
| ROSADO SANTANA ANGEL GAEL | FULL STACK |


## REQUISITOS DE ROL Y RESPONSABILIDADES

### 1. COORDINADOR KANBAN
* **Actividades**: Supervisar el tablero, asegurar el flujo continuo y coordinar la comunicación entre áreas.
* **Responsabilidades**: Liderazgo, organización y conocimientos en metodologías ágiles.

### 2. PRODUCT OWNER
* **Actividades**: Definir prioridades del backlog y asegurar que el producto entregue valor al usuario.
* **Responsabilidades**: Análisis de mercado, enfoque en UX y comunicación constante con el equipo técnico.

### 3. DESARROLLADOR FRONTEND
* **Actividades**: Diseñar e implementar la interfaz de usuario y optimizar la experiencia móvil.
* **Responsabilidades**: Conocimientos en HTML, CSS y JavaScript; atención al detalle y diseño responsivo.

### 4. DESARROLLADOR BACKEND
* **Actividades**: Implementar la lógica del sistema, gestionar bases de datos e integrar APIs.
* **Responsabilidades**: Resolución de problemas técnicos, manejo de servidores y seguridad.

### 5. DISEÑADOR UX/UI
* **Actividades**: Diseñar flujos de navegación sencillos y realizar pruebas de usabilidad.
* **Responsabilidades**: Creatividad, análisis y capacidad para interpretar la retroalimentación del usuario.

### 6. TESTER / CONTROL DE CALIDAD (QA)
* **Actividades**: Detectar errores, reportarlos en el tablero Kanban y verificar nuevas funcionalidades.
* **Responsabilidades**: Atención al detalle, capacidad de análisis y comunicación clara de errores.

Requerimientos para Ejecutar el Proyecto:
* Node.js (v18 o superior)
* npm (Node Package Manager): Viene incluido cuando se instala Node.js.
* Configuración de Firebase: Se necesita el archivo de configuración (firebase-applet-config.json) con las llaves del proyecto de Firebase.

Cómo se ejecuta
* npm install: Lee el archivo package.json y descarga automáticamente todas las carpetas pesadas (node_modules).
* Configurar Firebase: copia `.env.example` a `.env` y completa las variables `VITE_FIREBASE_*` (Consola Firebase → Configuración del proyecto → SDK).
* Habilitar en Firebase: **Authentication** (correo/contraseña) y **Firestore Database** (modo de prueba o reglas desplegadas).
* npm run dev: Levanta el servidor local (normalmente http://localhost:3000).

### Base de datos (backend en Firestore)
* Colección `users`: perfil por `uid` (ya se crea en el registro).
* Colección `trips`: documentos con al menos `driverId`, `passengerName`, `status` (`SOLICITADO` | `EN_PROGRESO` | `COMPLETADO` | `CANCELADO`), `coordinates`, `address`, `price`, `createdAt` (timestamp). Opcional: `passengerId`, `time`.
* La pantalla **Mis viajes** (conductores) escucha en tiempo real los viajes donde `driverId` coincide con el usuario autenticado.

### Despliegue en Firebase Hosting
1. Instala la CLI: `npm install -g firebase-tools` y ejecuta `firebase login`.
2. En `.firebaserc`, sustituye `TU_PROJECT_ID_FIREBASE` por el ID real del proyecto.
3. `npm run deploy` — construye (`vite build`) y despliega **hosting** + **reglas e índices de Firestore**.
