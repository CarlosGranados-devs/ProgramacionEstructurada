const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularSalarioTotal(salarioBase, horasExtras, valorHoraNormal) {
  const pagoHorasExtras = horasExtras * (valorHoraNormal * 1.5);
  return salarioBase + pagoHorasExtras;
}

rl.question('Ingrese su salario base: ', (base) => {
  rl.question('Ingrese el número de horas extras trabajadas: ', (extras) => {
    rl.question('Ingrese el valor de una hora normal: ', (valor) => {
      const total = calcularSalarioTotal(
        parseFloat(base),
        parseFloat(extras),
        parseFloat(valor)
      );
      console.log('Su salario total es: $' + total.toFixed(2));
      rl.close();
    });
  });
});
