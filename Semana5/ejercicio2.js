// Solicitar correo electrónico
let correo = prompt("Ingrese su correo electrónico:");

// Convertir a minúsculas
let correoLower = correo.toLowerCase();

// Verificar si es del dominio @gmail.com
let esGmail = correoLower.endsWith("@gmail.com");

alert(`Correo normalizado: ${correoLower}\n¿Dominio válido (@gmail.com)? ${esGmail ? "Sí" : "No"}`);
