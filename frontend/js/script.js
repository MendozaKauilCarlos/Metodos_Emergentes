/* Base URL del backend: mismo origen si se abre desde el servidor; si no, localhost:3000 */
const API_BASE = (typeof window !== 'undefined' && window.location.origin && window.location.origin.startsWith('http'))
  ? window.location.origin
  : 'http://localhost:3000';

const DOMINIO_INSTITUCIONAL = '@itcancun.edu.mx';

function esCorreoInstitucional(email) {
  if (!email || typeof email !== 'string') return false;
  return email.trim().toLowerCase().endsWith(DOMINIO_INSTITUCIONAL);
}

// ==========================================
// 1. FUNCIONES COMPARTIDAS Y VISTAS
// ==========================================

function ver(vista) {
  const login = document.getElementById('v-login');
  const reg = document.getElementById('v-reg');
  const tabL = document.getElementById('t-login');
  const tabR = document.getElementById('t-reg');

  if (!login || !reg) return;

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
  ocultarErrores();
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

function ocultarErrores() {
  const loginErr = document.getElementById('login-error');
  const regErr = document.getElementById('reg-error');
  if (loginErr) { loginErr.classList.add('hidden'); loginErr.textContent = ''; }
  if (regErr) { regErr.classList.add('hidden'); regErr.textContent = ''; }
}

function mostrarError(id, mensaje) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = mensaje;
  el.classList.remove('hidden');
}

// ==========================================
// 2. REGISTRO Y LOGIN CON API
// ==========================================

async function registrarUsuario(event) {
  event.preventDefault();
  const nombre = document.getElementById('reg-nombre').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const esConductor = !document.getElementById('e-con').classList.contains('hidden');
  const rolUsuario = esConductor ? 'conductor' : 'pasajero';

  ocultarErrores();
  if (!esCorreoInstitucional(email)) {
    mostrarError('reg-error', 'El correo debe ser institucional (@itcancun.edu.mx).');
    return;
  }

  const btn = document.getElementById('btn-reg');
  if (btn) { btn.disabled = true; btn.textContent = 'Registrando...'; }

  try {
    const res = await fetch(`${API_BASE}/api/usuarios`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre, email, rol: rolUsuario, telefono: '' }),
    });
    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      mostrarError('reg-error', data.error || 'Error al registrarse.');
      return;
    }
    alert('¡Registro exitoso! Ya puedes iniciar sesión.');
    ver('L');
    document.getElementById('login-email').value = email;
  } catch (err) {
    mostrarError('reg-error', 'No se pudo conectar con el servidor. ¿Está el backend en marcha?');
  } finally {
    if (btn) { btn.disabled = false; btn.textContent = 'REGISTRARSE'; }
  }
}

async function iniciarSesion(event) {
  event.preventDefault();
  const emailInput = document.getElementById('login-email').value.trim();

  ocultarErrores();
  if (!esCorreoInstitucional(emailInput)) {
    mostrarError('login-error', 'Usa tu correo institucional (@itcancun.edu.mx).');
    return;
  }

  const btn = document.getElementById('btn-login');
  if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Entrando...'; }

  try {
    const res = await fetch(`${API_BASE}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: emailInput }),
    });
    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      mostrarError('login-error', data.error || 'Error al iniciar sesión.');
      return;
    }

    // Persistencia en localStorage (token y usuario)
    localStorage.setItem('token', data.token);
    localStorage.setItem('usuarioActivo', JSON.stringify(data.user));
    window.location.href = 'home.html';
  } catch (err) {
    mostrarError('login-error', 'No se pudo conectar con el servidor. ¿Está el backend en marcha?');
  } finally {
    if (btn) { btn.disabled = false; btn.innerHTML = '<i class="fas fa-sign-in-alt"></i> INICIAR SESIÓN'; }
  }
}

// ==========================================
// 3. DASHBOARD (HOME)
// ==========================================

function toggleConexion() {
  const btnText = document.querySelector('.bg-green strong');
  const btnSub = document.querySelector('.bg-green small');

  if (btnText && btnText.innerText === 'Conectarse') {
    btnText.innerText = 'Buscando Viajes...';
    if (btnSub) btnSub.innerText = 'Buscando pasajeros cerca de ti';
  } else if (btnText) {
    btnText.innerText = 'Conectarse';
    if (btnSub) btnSub.innerText = 'Disponible para recibir viajes';
  }
}

// ==========================================
// 4. INICIALIZACIÓN
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  const pantallaLogin = document.getElementById('v-login');
  const formReg = document.getElementById('form-reg');
  const formLog = document.getElementById('form-login');

  if (pantallaLogin) {
    if (formReg) formReg.onsubmit = registrarUsuario;
    if (formLog) formLog.onsubmit = iniciarSesion;
  }
});
