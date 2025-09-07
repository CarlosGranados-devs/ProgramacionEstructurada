// Solicitar nombre completo
let nombre = prompt("Ingrese su nombre completo:");

// Eliminar espacios al inicio y final
let nombreLimpio = nombre.trim();

// Contar caracteres sin contar espacios internos
let caracteres = nombreLimpio.replace(/\s/g, '').length;

alert(`Nombre limpio: "${nombreLimpio}"\nCantidad de caracteres sin espacios: ${caracteres}`);
