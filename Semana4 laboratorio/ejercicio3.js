const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el precio del producto: ", (precio) => {
    const p = parseFloat(precio);
    const descuento = p * 0.15;
    const total = p - descuento;

    console.log(`Precio del producto: $${p.toFixed(2)}`);
    console.log(`Descuento aplicado (15%): $${descuento.toFixed(2)}`);
    console.log(`Precio a pagar: $${total.toFixed(2)}`);
    rl.close();
});
