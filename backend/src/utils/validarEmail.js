const DOMINIO_INSTITUCIONAL = '@itcancun.edu.mx';

/**
 * Valida que el correo sea del dominio institucional @itcancun.edu.mx
 * @param {string} email
 * @returns {boolean}
 */
function esCorreoInstitucional(email) {
  if (!email || typeof email !== 'string') return false;
  const e = email.trim().toLowerCase();
  return e.endsWith(DOMINIO_INSTITUCIONAL) && e.length > DOMINIO_INSTITUCIONAL.length;
}

module.exports = { esCorreoInstitucional, DOMINIO_INSTITUCIONAL };
