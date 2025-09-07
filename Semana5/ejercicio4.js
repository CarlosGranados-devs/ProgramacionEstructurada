// Solicitar mensaje
let mensaje = prompt("Ingrese un mensaje:");

// Buscar la palabra "error" (sin importar mayúsculas/minúsculas)
let indice = mensaje.toLowerCase().indexOf("error");

if (indice !== -1) {
    alert(`La palabra "error" aparece en la posición: ${indice}`);
} else {
    alert("No se encontró la palabra 'error' en el mensaje.");
}
