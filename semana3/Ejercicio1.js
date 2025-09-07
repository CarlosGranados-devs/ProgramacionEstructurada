const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la primera nota: ", (nota1) => {
    rl.question("Ingrese la segunda nota: ", (nota2) => {
        rl.question("Ingrese la tercera nota: ", (nota3) => {
            const n1 = parseFloat(nota1);
            const n2 = parseFloat(nota2);
            const n3 = parseFloat(nota3);

            const promedio = (n1 + n2 + n3) / 3;
            console.log(`📊 El promedio de las tres notas es: ${promedio.toFixed(2)}`);

            rl.close();
        });
    });
});
