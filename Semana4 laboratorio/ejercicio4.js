const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el ancho del rectángulo: ", (ancho) => {
    rl.question("Ingrese el alto del rectángulo: ", (alto) => {
        const a = parseFloat(ancho);
        const h = parseFloat(alto);
        const perimetro = 2 * (a + h);

        console.log(`📐 El perímetro del rectángulo es: ${perimetro}`);
        rl.close();
    });
});
