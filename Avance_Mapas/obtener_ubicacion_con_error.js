// ===============================
// 🌍 INICIALIZACIÓN DEL MAPA
// ===============================

// Se crea el mapa centrado en una ubicación por defecto (Cancún)
// Esto sirve como fallback si el usuario niega permisos de GPS
const map = L.map('map').setView([21.1619, -86.8515], 13);

// Se cargan los tiles (mapa visual) desde OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);


// ===============================
// 📍 VARIABLES GLOBALES
// ===============================

let userMarker = null;      // Marcador de la ubicación del usuario
let originMarker = null;    // Marcador de origen
let destinationMarker = null; // Marcador de destino


// ===============================
// 📡 FUNCIÓN PARA OBTENER UBICACIÓN
// ===============================

function getUserLocation() {

    // Verifica si el navegador soporta geolocalización
    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(

            // ✅ CASO: Usuario permite acceso a ubicación
            function(position) {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;

                // Centra el mapa en la ubicación real del usuario
                map.setView([lat, lng], 15);

                // Si ya existe un marcador previo, se elimina
                if (userMarker) {
                    map.removeLayer(userMarker);
                }

                // Se crea un marcador en la ubicación del usuario
                userMarker = L.marker([lat, lng])
                    .addTo(map)
                    .bindPopup("📍 Tu ubicación actual")
                    .openPopup();
            },

            // ❌ CASO: Error o permisos denegados
            function(error) {
                handleLocationError(error);
            }

        );

    } else {
        // ❌ Caso: El navegador no soporta geolocalización
        alert("Tu navegador no soporta geolocalización");
    }
}


// ===============================
// ⚠️ MANEJO DE ERRORES DE GPS
// ===============================

function handleLocationError(error) {

    let message = "";

    // Se evalúa el tipo de error recibido
    switch(error.code) {

        case error.PERMISSION_DENIED:
            message = "❌ Permiso de ubicación denegado por el usuario.";
            break;

        case error.POSITION_UNAVAILABLE:
            message = "⚠️ La ubicación no está disponible.";
            break;

        case error.TIMEOUT:
            message = "⏳ La solicitud de ubicación ha expirado.";
            break;

        default:
            message = "❌ Error desconocido al obtener ubicación.";
    }

    // Se muestra el mensaje al usuario
    alert(message);

    // 🧠 Fallback:
    // Si ocurre un error, se mantiene el mapa en la ubicación por defecto (Cancún)
    map.setView([21.1619, -86.8515], 13);
}


// ===============================
// 📌 FUNCIONES PARA MARCADORES
// ===============================

// Función para establecer marcador de origen
function setOrigin(lat, lng) {

    // Si ya existe un marcador previo, se elimina
    if (originMarker) {
        map.removeLayer(originMarker);
    }

    // Se crea el nuevo marcador
    originMarker = L.marker([lat, lng], { color: 'green' })
        .addTo(map)
        .bindPopup("🟢 Origen")
        .openPopup();
}


// Función para establecer marcador de destino
function setDestination(lat, lng) {

    if (destinationMarker) {
        map.removeLayer(destinationMarker);
    }

    destinationMarker = L.marker([lat, lng], { color: 'red' })
        .addTo(map)
        .bindPopup("🔴 Destino")
        .openPopup();
}


// ===============================
// 🔎 BÚSQUEDA DE DIRECCIONES (Nominatim)
// ===============================

// Función para buscar una dirección usando Nominatim
function searchLocation(query, callback) {

    // URL del servicio de geocodificación
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${query}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {

            if (data.length > 0) {
                const lat = data[0].lat;
                const lon = data[0].lon;

                // Ejecuta la función callback con las coordenadas
                callback(lat, lon);
            } else {
                alert("No se encontró la ubicación");
            }

        })
        .catch(error => {
            console.error("Error en la búsqueda:", error);
        });
}


// ===============================
// 🚀 INICIO AUTOMÁTICO
// ===============================

// Se intenta obtener la ubicación del usuario al cargar la página
getUserLocation();