// Ejercicio 3: Aprobación de estudiante

let nota = parseFloat(prompt("¿Cuál es tu nota?"));
let recuperacion = confirm("¿Pasaste la recuperación?"); // true = Sí, false = No

if (nota >= 7 || recuperacion) {
    alert("✅ El estudiante aprueba");
} else {
    alert("❌ El estudiante reprueba");
}

