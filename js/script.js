console.log("Sistema Ride to Class cargado");

// ==========================================
// 1. FUNCIONES COMPARTIDAS Y VISTAS
// ==========================================

function ver(vista) {
    const login = document.getElementById('v-login');
    const reg = document.getElementById('v-reg');
    const tabL = document.getElementById('t-login');
    const tabR = document.getElementById('t-reg');

    if (!login || !reg) return; // Evita errores si no estamos en index.html

    if (vista === 'L') {
        login.classList.remove('hidden');
        reg.classList.add('hidden');
        tabL.classList.add('active');
        tabR.classList.remove('active');
    } else {
        reg.classList.remove('hidden');
        login.classList.add('hidden');
        tabR.classList.add('active');
        tabL.classList.remove('active');
    }
}

function rol(tipo) {
    const extra = document.getElementById('e-con');
    const bPas = document.getElementById('b-pas');
    const bCon = document.getElementById('b-con');

    if (!extra) return;

    if (tipo === 'c') {
        extra.classList.remove('hidden');
        bCon.classList.add('active');
        bPas.classList.remove('active');
    } else {
        extra.classList.add('hidden');
        bPas.classList.add('active');
        bCon.classList.remove('active');
    }
}

// ==========================================
// 2. LÓGICA DE USUARIOS (REGISTRO Y LOGIN)
// ==========================================

function registrarUsuario(event) {
    event.preventDefault();
    const nombre = document.querySelector('#v-reg input[placeholder="Nombre completo"]').value;
    const email = document.querySelector('#v-reg input[placeholder="Email"]').value;
    const pass = document.querySelector('#v-reg input[placeholder="Crea tu contraseña"]').value;
    const esConductor = !document.getElementById('e-con').classList.contains('hidden');

    const nuevoUsuario = {
        nombre: nombre,
        email: email,
        password: pass,
        rol: esConductor ? "conductor" : "pasajero"
    };

    let baseDatos = JSON.parse(localStorage.getItem('usuarios')) || [];
    baseDatos.push(nuevoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(baseDatos));

    alert("¡Registro exitoso! Ya puedes entrar.");
    ver('L');
}

function iniciarSesion(event) {
    event.preventDefault();
    const emailInput = document.querySelector('#v-login input[type="email"]').value;
    const passInput = document.querySelector('#v-login input[type="password"]').value;

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const encontrado = usuarios.find(u => u.email === emailInput && u.password === passInput);

    if (encontrado) {
        localStorage.setItem('usuarioActivo', JSON.stringify(encontrado));
        window.location.href = "home.html"; // Salto al Dashboard
    } else {
        alert("Usuario o clave incorrectos.");
    }
}

// ==========================================
// 3. LÓGICA DEL DASHBOARD (HOME.HTML)
// ==========================================

function toggleConexion() {
    const btnText = document.querySelector('.bg-green strong');
    const btnSub = document.querySelector('.bg-green small');
    
    if (btnText.innerText === "Conectarse") {
        btnText.innerText = "Buscando Viajes...";
        btnSub.innerText = "Buscando pasajeros cerca de ti";
        console.log("Conductor en línea");
    } else {
        btnText.innerText = "Conectarse";
        btnSub.innerText = "Disponible para recibir viajes";
        console.log("Conductor desconectado");
    }
}

// ==========================================
// 4. DETECTOR DE PÁGINA Y VINCULACIÓN
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // Detectamos si estamos en LOGIN o en HOME
    const pantallaLogin = document.getElementById('v-login');
    const pantallaHome = document.querySelector('.dashboard-body');

    if (pantallaLogin) {
        // Estamos en index.html
        const formReg = document.querySelector('#v-reg form');
        const formLog = document.querySelector('#v-login form');
        if(formReg) formReg.onsubmit = registrarUsuario;
        if(formLog) formLog.onsubmit = iniciarSesion;
    }

    if (pantallaHome) {
        // Estamos en home.html
        const user = JSON.parse(localStorage.getItem('usuarioActivo'));
        if (user) {
            document.getElementById('display-name').innerText = user.nombre.toUpperCase();
        }
        
        // Vincular el botón de conectarse
        const btnConectar = document.querySelector('.bg-green');
        if(btnConectar) btnConectar.onclick = toggleConexion;
    }
});