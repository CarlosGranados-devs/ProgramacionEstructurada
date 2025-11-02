const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ordenarCadena(cadena) {
  // Eliminar espacios y ordenar las letras
  return cadena.replace(/\s+/g, '').split('').sort().join('');
}

rl.question('Ingrese una palabra o frase: ', (texto) => {
  console.log('Cadena ordenada alfabéticamente:', ordenarCadena(texto));
  rl.close();
});
