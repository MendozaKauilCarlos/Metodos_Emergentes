QUIBI PROYECT
ANÁLISIS
Plataforma de contenido en streaming, exclusiva para smartphones, que consiste en la reproducción rápida e instantánea de videos de no más de 10 minutos. No era una aplicación gratuita, sino que requería una suscripción para acceder a sus funciones. Fue lanzada al inicio de la pandemia de COVID-19, lo que debió convertirla en una aplicación interesante para ese momento.

PROBLEMÁTICAS
PAGO DE SUSCRIPCIÓN: Al ser una aplicación de pago, no ofrecía algo innovador o diferente frente a otras aplicaciones de uso gratuito.
CONTENIDO ENFOCADO A CELEBRIDADES: El contenido no era variado ni ofrecía libertad a los usuarios para ver algo más de lo que el encargado quería mostrar.
LIMITACIÓN DE LA APLICACIÓN: No permitía compartir contenido ni sacar capturas de pantalla, lo que impidió su promoción orgánica.
MAL ANÁLISIS DEL MERCADO: No se tuvieron en cuenta las tendencias ni lo que era importante para los usuarios en ese momento.
FALTA DE COMUNICACIÓN: Posiblemente hubo una mala coordinación entre la empresa y los trabajadores para innovar en la aplicación.
ESTRATEGIAS
Principalmente se contempló el uso de Kanban, una metodología ágil que sirve para organizar, visualizar y mejorar el flujo de trabajo de un proyecto. Mediante un tablero con columnas como "Por hacer", "En proceso", "En revisión" y "Terminado", se logra una mayor transparencia entre los integrantes del equipo.

Límites WIP: Se asignarán límites de trabajo en progreso para evitar la sobrecarga de los desarrolladores.
Priorización del Backlog: Enfoque en funcionalidades esenciales y validación temprana con usuarios reales.
Comunicación Continua: Fomento de una toma de decisiones rápida y constante entre las áreas técnica y de negocio.
ROLES
Encargado	ROL
MENDOZA KAUIL CARLOS EDUARDO	Coordinador Kanban
REYES DOLORES ALEJANDRO	Product Owner
ALEJANDRO SÁNCHEZ	Diseñador UX/UI
COHEN ALAIN	Desarrollador Backend
MENDOZA KAUIL	Desarrollador Frontend
VEGA GUZMAN CARLA VALERIA	Tester / Control de calidad (QA)
ROSADO SANTANA ANGEL GAEL	FULL STACK
REQUISITOS DE ROL Y RESPONSABILIDADES
1. COORDINADOR KANBAN
Actividades: Supervisar el tablero, asegurar el flujo continuo y coordinar la comunicación entre áreas.
Responsabilidades: Liderazgo, organización y conocimientos en metodologías ágiles.
2. PRODUCT OWNER
Actividades: Definir prioridades del backlog y asegurar que el producto entregue valor al usuario.
Responsabilidades: Análisis de mercado, enfoque en UX y comunicación constante con el equipo técnico.
3. DESARROLLADOR FRONTEND
Actividades: Diseñar e implementar la interfaz de usuario y optimizar la experiencia móvil.
Responsabilidades: Conocimientos en HTML, CSS y JavaScript; atención al detalle y diseño responsivo.
4. DESARROLLADOR BACKEND
Actividades: Implementar la lógica del sistema, gestionar bases de datos e integrar APIs.
Responsabilidades: Resolución de problemas técnicos, manejo de servidores y seguridad.
5. DISEÑADOR UX/UI
Actividades: Diseñar flujos de navegación sencillos y realizar pruebas de usabilidad.
Responsabilidades: Creatividad, análisis y capacidad para interpretar la retroalimentación del usuario.
6. TESTER / CONTROL DE CALIDAD (QA)
Actividades: Detectar errores, reportarlos en el tablero Kanban y verificar nuevas funcionalidades.
Responsabilidades: Atención al detalle, capacidad de análisis y comunicación clara de errores.
7. FULL STACK
Actividades: Desarrollo, integración y mantenimiento de soluciones de software de extremo a extremo..
Responsabilidades: Garantizar la coherencia, escalabilidad y funcionalidad técnica de las aplicaciones mediante una visión integral del producto.
📋 Especificación de Requerimientos
Para asegurar el correcto funcionamiento y desarrollo del proyecto, se han definido los siguientes requerimientos técnicos y del sistema. Esto garantiza que cualquier desarrollador o evaluador pueda ejecutar el código sin problemas.

1. Requerimientos de Hardware (Entorno de Desarrollo)
Procesador: Intel Core i3 / AMD Ryzen 3 o superior (Recomendado i5/Ryzen 5 para tiempos de compilación óptimos).
Memoria RAM: Mínimo 4 GB (Se recomiendan 8 GB o más para ejecutar el servidor de desarrollo y el navegador simultáneamente).
Almacenamiento: Al menos 2 GB de espacio libre en disco (para dependencias de node_modules y caché).
Conexión a Internet: Requerida para la descarga de paquetes (npm), renderizado de mapas (OpenStreetMap) y conexión con la base de datos (Firebase).
2. Requerimientos de Software
Sistema Operativo: Multiplataforma (Windows 10/11, macOS 10.15+, o distribuciones Linux basadas en Debian/Ubuntu).
Entorno de Ejecución: Node.js versión 18.x LTS o superior.
Gestor de Paquetes: npm (incluido con Node.js) o yarn.
Control de Versiones: Git instalado y configurado.
Editor de Código (IDE): Se recomienda encarecidamente Visual Studio Code con las siguientes extensiones instaladas:
ESLint (para análisis de código).
Prettier (para formateo automático).
Tailwind CSS IntelliSense (para autocompletado de clases).
3. Requerimientos de Servicios Externos (BaaS)
La aplicación depende de servicios en la nube para funcionar correctamente:

Firebase Authentication: Configurado para permitir inicio de sesión con Google.
Cloud Firestore: Base de datos NoSQL para almacenar usuarios, rutas y solicitudes en tiempo real.
Leaflet / OpenStreetMap: Proveedor de mapas de código abierto para la geolocalización y visualización de rutas.
4. Requerimientos Funcionales Principales
RF01: El sistema debe permitir el registro e inicio de sesión de usuarios mediante correo institucional.
RF02: El sistema debe permitir al usuario elegir entre el rol de "Conductor" o "Pasajero".
RF03: Un conductor debe poder crear, editar y eliminar rutas especificando origen, destino, horario, asientos y precio.
RF04: Un pasajero debe poder visualizar las rutas disponibles en un mapa interactivo y enviar solicitudes de viaje.
RF05: El sistema debe mostrar el historial de viajes (Completados, Cancelados, En Progreso).
5. Requerimientos No Funcionales
RNF01 (Usabilidad): La interfaz debe ser intuitiva, responsiva (Mobile-First) y contar con soporte para Modo Oscuro/Claro.
RNF02 (Rendimiento): El tiempo de carga inicial de la aplicación (TTV) no debe superar los 3 segundos en conexiones 4G.
RNF03 (Seguridad): Las contraseñas y tokens de sesión deben ser gestionados de forma segura por Firebase, sin exponerse en el código fuente.
🚀 Pasos para la Instalación y Ejecución
Clonar el repositorio:

git clone <url-del-repositorio>
cd <nombre-de-la-carpeta>
Instalar las dependencias:

npm install
Configurar Variables de Entorno: Crear un archivo llamado firebase-applet-config.json en la raíz del proyecto con las credenciales de Firebase:

{
  "apiKey": "TU_API_KEY",
  "authDomain": "TU_AUTH_DOMAIN",
  "projectId": "TU_PROJECT_ID",
  "storageBucket": "TU_STORAGE_BUCKET",
  "messagingSenderId": "TU_SENDER_ID",
  "appId": "TU_APP_ID"
}
Ejecutar en modo desarrollo:

npm run dev
La aplicación estará disponible en http://localhost:3000.

🛠️ Tecnologías Utilizadas (Stack MERN/Serverless)
React 18 + Vite (Frontend ultrarrápido)
TypeScript (Tipado estático para evitar errores en tiempo de ejecución)
Tailwind CSS (Sistema de diseño basado en utilidades)
Firebase (Backend as a Service)
React Router DOM (Navegación SPA)
Leaflet & React-Leaflet (Mapas interactivos)
Lucide React (Iconografía moderna)
Historias de Usuario (User Stories) — Proyecto Ride to Class
Ámbito del Ecosistema: Aplicación Móvil de Transporte Compartido Estudiantil (Cancún)
Metodología: Scrum / Agile Framework
Estructura Base: Como [Rol] | Quiero [Acción] | Para [Beneficio/Valor]

📑 Módulo 1: Autenticación, Roles y Modo Demo
HU-01: Autenticación con Proveedor Institucional (Google)
Declaración: Como Estudiante universitario, quiero iniciar sesión en la aplicación utilizando mi cuenta de Google institucional, para acceder de manera rápida y segura sin necesidad de recordar una contraseña adicional[cite: 12].
Prioridad / Esfuerzo: Alta / Medio[cite: 12]
Criterios de Aceptación:
Dado que el usuario no ha iniciado sesión, al presionar "Iniciar con Google" se debe desplegar el pop-up de autenticación de Firebase (signInWithPopup)[cite: 12].
Cuando la autenticación es exitosa, el AuthContext debe actualizar el estado global user con el objeto real provisto por Firebase[cite: 12].
Entonces la aplicación debe consultar Firestore para extraer el rol del estudiante y redirigirlo al Home (/), manteniendo el estado loading en false[cite: 12].
HU-02: Acceso Rápido mediante Modo Demo (Simulado)
Declaración: Como Desarrollador o Evaluador del proyecto, quiero activar un "Modo Demo" con un rol predefinido desde el login, para interactuar con las interfaces y flujos visuales de inmediato sin depender de internet ni credenciales reales de Firebase[cite: 12].
Prioridad / Esfuerzo: Alta / Bajo[cite: 12]
Criterios de Aceptación:
Dado que el usuario se encuentra en la pantalla de login, al presionar "Demo Pasajero" o "Demo Conductor" se debe invocar a la función loginAsDemo(role)[cite: 12].
Cuando se ejecuta dicha función, se debe inyectar un usuario simulado (uid: 'demo-user-123'), marcar el flag isDemo como true y forzar loading a false[cite: 12].
Entonces el sistema debe permitir pasar el guardia de ruta (ProtectedRoute) y renderizar los componentes visuales consumiendo constantes locales (mockData)[cite: 12].
🚗 Módulo 2: Flujo del Conductor (Socio Estudiantil)
HU-03: Control de Disponibilidad mediante Switch
Declaración: Como Conductor, quiero activar o desactivar mi estado de conexión con un interruptor visible, para decidir cuándo estoy disponible en tiempo real para recibir solicitudes de estudiantes[cite: 12].
Prioridad / Esfuerzo: Alta / Media[cite: 12]
Criterios de Aceptación:
Dado que el conductor interactúa con el componente Switch de la interfaz, el sistema debe validar previamente que sus datos vehiculares (placas, marca, modelo) estén completos en el perfil[cite: 12].
Cuando el interruptor cambia a "Conectado", se actualiza el campo active: true en su documento de ruta en Firestore[cite: 12].
Entonces si falta algún dato vehicular obligatorio, el switch debe regresar automáticamente a su estado apagado y desplegar un mensaje de advertencia[cite: 12].
HU-04: Gestión y Aceptación de Solicitudes Pendientes
Declaración: Como Conductor, quiero visualizar una lista de solicitudes entrantes de pasajeros, para aceptar aquellas cuyos puntos de origen coincidan óptimamente con mi trayecto ordinario[cite: 12].
Prioridad / Esfuerzo: Alta / Alta[cite: 12]
Criterios de Aceptación:
Dado que hay solicitudes con estado "pending" en el sistema, el conductor conectado debe verlas listadas cronológicamente gracias al índice compuesto definido en firestore.indexes.json[cite: 12].
Cuando el conductor presiona "Aceptar", el sistema cambia el estatus a "accepted" y crea en paralelo un registro unificado en la colección /trips/[cite: 12].
Entonces el viaje se asocia automáticamente con el driverId del conductor actual, restringiendo el acceso de edición posterior únicamente a las tres partes interesadas (creador, conductor, pasajero)[cite: 12].
🎒 Módulo 3: Flujo del Pasajero (Estudiante)
HU-07: Cancelación de Viaje Solicitado
Declaración: Como Pasajero, quiero tener la opción de cancelar un viaje activo, para notificar al conductor de inmediato si mis planes cambiaron y liberar el espacio en el vehículo[cite: 12].
Prioridad / Esfuerzo: Media / Baja[cite: 12]
Criterios de Aceptación:
Dado que el viaje se encuentra listado en la pantalla "Mis Viajes" (/trips), el botón "Cancelar" solo debe estar habilitado si el estado del viaje es diferente de "in_progress" o "completed"[cite: 12].
Cuando el pasajero confirma la acción, se actualiza el estado del documento a "canceled"[cite: 12].
Entonces las reglas de Firestore deben verificar que el request.auth.uid coincida estrictamente con el passengerId del documento para autorizar la operación de escritura[cite: 12].
🛠️ Módulo 4: Administrador del Sistema (Backend & Moderación)
HU-08: Panel Global de Auditoría de Cuentas
Declaración: Como Administrador, quiero acceder a un panel consolidado de administración de usuarios, para visualizar la totalidad de cuentas registradas (pasajeros y conductores) junto con sus roles correspondientes y estado actual de perfil[cite: 13].
Prioridad / Esfuerzo: Alta / Media[cite: 13]
Criterios de Aceptación:
Dado que el usuario ha iniciado sesión con credenciales administrativas verificadas en el backend, se le debe permitir la lectura general de la colección /users/[cite: 13].
Cuando el panel se renderiza, la interfaz debe listar en una estructura organizada los campos clave: Nombre, Correo Institucional, Teléfono Celular, Rol Asignado y Estatus (active, pending_review, suspended)[cite: 13].
Entonces el sistema debe filtrar o paginar los resultados para evitar sobrecargas de peticiones de lectura simultáneas en Firestore[cite: 13].
HU-09: Monitoreo e Historial de Operaciones
Declaración: Como Administrador, quiero revisar el historial completo de viajes del sistema, para evaluar las métricas de uso de la comunidad estudiantil y auditar trayectos realizados, activos o cancelados de forma imprevista[cite: 13].
Prioridad / Esfuerzo: Media / Media[cite: 13]
Criterios de Aceptación:
Dado que el administrador accede a la sección de bitácoras del sistema, la aplicación debe consultar de forma segura las colecciones /trips/ y /rideRequests/[cite: 13].
Cuando se selecciona un viaje o solicitud del historial, el panel debe desplgar la trazabilidad del trayecto: ID del conductor, IDs de los pasajeros a bordo, marcas de tiempo de inicio/conclusión y coordenadas geográficas de origen/destino[cite: 13].
Entonces la interfaz debe permitir filtrar las búsquedas por rango de fecha, ruta o por el identificador único (uid) de un alumno en específico[cite: 13].
HU-10: Control Comunitario y Bloqueo de Usuarios
Declaración: Como Administrador, quiero contar con la facultad de suspender o bloquear temporal o definitivamente cuentas específicas de la plataforma, para sancionar comportamientos indebidos que infrinjan los términos de servicio o el reglamento de convivencia escolar[cite: 13].
Prioridad / Esfuerzo: Alta / Media[cite: 13]
Criterios de Aceptación:
Dado que un usuario ha acumulado reportes negativos o infringido las normativas de seguridad, el administrador debe tener visible un botón de acción imperativa ("Suspender Cuenta")[cite: 13].
Cuando la acción es confirmada, el sistema debe actualizar el campo de estado de ese alumno a status: 'suspended' directamente en Firestore[cite: 13].
Entonces de manera inmediata, las reglas de seguridad perimetral (firestore.rules) y los guardias de ruta en el cliente deben rechazar cualquier intento futuro de este usuario suspendido para publicar trayectos, reservar asientos o conectarse a la red[cite: 13].



# RIDE TO CLASS - Proyecto de Carpooling Universitario

Este proyecto es una aplicación de transporte compartido diseñada para estudiantes universitarios, permitiendo conectar a conductores y pasajeros de la misma institución de manera segura y eficiente.

---

## 📋 Especificación de Requerimientos

Para asegurar el correcto funcionamiento y desarrollo del proyecto, se han definido los siguientes requerimientos técnicos y del sistema. Esto garantiza que cualquier desarrollador o evaluador pueda ejecutar el código sin problemas.

### 1. Requerimientos de Hardware (Entorno de Desarrollo)
*   **Procesador:** Intel Core i3 / AMD Ryzen 3 o superior (Recomendado i5/Ryzen 5 para tiempos de compilación óptimos).
*   **Memoria RAM:** Mínimo 4 GB (Se recomiendan 8 GB o más para ejecutar el servidor de desarrollo y el navegador simultáneamente).
*   **Almacenamiento:** Al menos 2 GB de espacio libre en disco (para dependencias de `node_modules` y caché).
*   **Conexión a Internet:** Requerida para la descarga de paquetes (npm), renderizado de mapas (OpenStreetMap) y conexión con la base de datos (Firebase).

### 2. Requerimientos de Software
*   **Sistema Operativo:** Multiplataforma (Windows 10/11, macOS 10.15+, o distribuciones Linux basadas en Debian/Ubuntu).
*   **Entorno de Ejecución:** [Node.js](https://nodejs.org/) versión 18.x LTS o superior.
*   **Gestor de Paquetes:** `npm` (incluido con Node.js) o `yarn`.
*   **Control de Versiones:** [Git](https://git-scm.com/) instalado y configurado.
*   **Editor de Código (IDE):** Se recomienda encarecidamente **Visual Studio Code** con las siguientes extensiones instaladas:
    *   *ESLint* (para análisis de código).
    *   *Prettier* (para formateo automático).
    *   *Tailwind CSS IntelliSense* (para autocompletado de clases).

### 3. Requerimientos de Servicios Externos (BaaS)
La aplicación depende de servicios en la nube para funcionar correctamente:
*   **Firebase Authentication:** Configurado para permitir inicio de sesión con Google.
*   **Cloud Firestore:** Base de datos NoSQL para almacenar usuarios, rutas y solicitudes en tiempo real.
*   **Leaflet / OpenStreetMap:** Proveedor de mapas de código abierto para la geolocalización y visualización de rutas.

### 4. Requerimientos Funcionales Principales
*   **RF01:** El sistema debe permitir el registro e inicio de sesión de usuarios mediante correo institucional.
*   **RF02:** El sistema debe permitir al usuario elegir entre el rol de "Conductor" o "Pasajero".
*   **RF03:** Un conductor debe poder crear, editar y eliminar rutas especificando origen, destino, horario, asientos y precio.
*   **RF04:** Un pasajero debe poder visualizar las rutas disponibles en un mapa interactivo y enviar solicitudes de viaje.
*   **RF05:** El sistema debe mostrar el historial de viajes (Completados, Cancelados, En Progreso).

### 5. Requerimientos No Funcionales
*   **RNF01 (Usabilidad):** La interfaz debe ser intuitiva, responsiva (Mobile-First) y contar con soporte para Modo Oscuro/Claro.
*   **RNF02 (Rendimiento):** El tiempo de carga inicial de la aplicación (TTV) no debe superar los 3 segundos en conexiones 4G.
*   **RNF03 (Seguridad):** Las contraseñas y tokens de sesión deben ser gestionados de forma segura por Firebase, sin exponerse en el código fuente.

---

## 🚀 Pasos para la Instalación y Ejecución

1.  **Clonar el repositorio:**
    ```bash
    git clone <url-del-repositorio>
    cd <nombre-de-la-carpeta>
    ```

2.  **Instalar las dependencias:**
    ```bash
    npm install
    ```

3.  **Configurar Variables de Entorno:**
    Crear un archivo llamado `firebase-applet-config.json` en la raíz del proyecto con las credenciales de Firebase:
    ```json
    {
      "apiKey": "TU_API_KEY",
      "authDomain": "TU_AUTH_DOMAIN",
      "projectId": "TU_PROJECT_ID",
      "storageBucket": "TU_STORAGE_BUCKET",
      "messagingSenderId": "TU_SENDER_ID",
      "appId": "TU_APP_ID"
    }
    ```

4.  **Ejecutar en modo desarrollo:**
    ```bash
    npm run dev
    ```
    La aplicación estará disponible en `http://localhost:3000`.

---

## 🛠️ Tecnologías Utilizadas (Stack MERN/Serverless)
*   **React 18** + **Vite** (Frontend ultrarrápido)
*   **TypeScript** (Tipado estático para evitar errores en tiempo de ejecución)
*   **Tailwind CSS** (Sistema de diseño basado en utilidades)
*   **Firebase** (Backend as a Service)
*   **React Router DOM** (Navegación SPA)
*   **Leaflet & React-Leaflet** (Mapas interactivos)
*   **Lucide React** (Iconografía moderna)

---

## 👥 Asignación de Roles (Equipo de Desarrollo)

*   **Líder de Proyecto / Frontend:** [Tu Nombre Aquí]
*   **Backend / Base de Datos:** [Nombre del Compañero]
*   **UX/UI Design:** [Nombre del Compañero]
*   **QA / Testing:** [Nombre del Compañero]

---

> [!NOTE]
> Este proyecto fue migrado desde una base de HTML/JS puro a una arquitectura moderna de React para mejorar la escalabilidad, mantenibilidad y la experiencia de usuario.
