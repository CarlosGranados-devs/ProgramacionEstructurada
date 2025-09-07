const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el precio del producto: ", (precio) => {
    const p = parseFloat(precio);
    const iva = p * 0.13;
    const total = p + iva;

    console.log(`Precio del producto: $${p.toFixed(2)}`);
    console.log(`IVA (13%): $${iva.toFixed(2)}`);
    console.log(`Precio total a pagar: $${total.toFixed(2)}`);
    rl.close();
});
