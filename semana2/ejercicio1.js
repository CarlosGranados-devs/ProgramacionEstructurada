// Ejercicio 1: Entrada al cine

let entrada = confirm("¿Tienes entrada para el cine?"); // true = Sí, false = No
let edad = parseInt(prompt("¿Cuántos años tienes?"));

if (entrada && edad > 13) {
    alert("✅ Puedes entrar al cine");
} else {
    alert("❌ No puedes entrar al cine");
}