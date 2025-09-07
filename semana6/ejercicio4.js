const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el número de habitación: ", (habitacion) => {
    const hab = parseInt(habitacion);
    const piso = Math.ceil(hab / 10);

    console.log(`La habitación ${hab} está en el piso ${piso}`);
    rl.close();
});
