const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularDescuento(precio, porcentaje) {
  const descuento = (precio * porcentaje) / 100;
  return precio - descuento;
}

rl.question('Ingrese el precio del producto: ', (precio) => {
  rl.question('Ingrese el porcentaje de descuento: ', (porcentaje) => {
    const final = calcularDescuento(parseFloat(precio), parseFloat(porcentaje));
    console.log('El precio final con descuento es: $' + final.toFixed(2));
    rl.close();
  });
});
