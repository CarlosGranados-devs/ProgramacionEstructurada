// Ejercicio 2: Descuento especial

let edadCliente = parseInt(prompt("¿Cuál es tu edad?"));
let discapacitado = confirm("¿Eres persona con discapacidad?"); // true = Sí, false = No

if (edadCliente > 60 || discapacitado) {
    alert("✅ Tienes un descuento especial");
} else {
    alert("❌ No tienes descuento");
}
