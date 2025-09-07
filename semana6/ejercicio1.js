const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese un número: ", (num) => {
    const n = parseFloat(num);
    const cuadrado = n ** 2;
    const raiz = Math.sqrt(n);

    console.log(`Número ingresado: ${n}`);
    console.log(`Cuadrado: ${cuadrado}`);
    console.log(`Raíz cuadrada: ${raiz.toFixed(2)}`);

    rl.close();
});
