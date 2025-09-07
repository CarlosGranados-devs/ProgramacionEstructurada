// Solicitar código
let codigo = prompt("Ingrese el código generado:");

// Obtener últimos 4 caracteres
let ultimos4 = codigo.slice(-4);

alert(`Los últimos 4 caracteres del código son: ${ultimos4}`);
