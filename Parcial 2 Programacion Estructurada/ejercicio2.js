const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function contarCaracteres(texto) {
  return texto.length;
}

rl.question('Ingrese una palabra o frase: ', (texto) => {
  console.log('Cantidad de caracteres:', contarCaracteres(texto));
  rl.close();
});
