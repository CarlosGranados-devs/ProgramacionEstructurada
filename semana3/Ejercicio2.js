const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la distancia en kilómetros: ", (km) => {
    const kmDecimal = parseFloat(km);
    const millas = kmDecimal * 0.621371;

    console.log(`📏 ${kmDecimal} km equivalen a ${millas.toFixed(2)} millas`);

    rl.close();
});
