const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function sumaProductos(p1, p2, p3) {
  return p1 + p2 + p3;
}

rl.question('Ingrese el precio del primer producto: ', (a) => {
  rl.question('Ingrese el precio del segundo producto: ', (b) => {
    rl.question('Ingrese el precio del tercer producto: ', (c) => {
      const total = sumaProductos(parseFloat(a), parseFloat(b), parseFloat(c));
      console.log('La suma total de los productos es: $' + total.toFixed(2));
      rl.close();
    });
  });
});
