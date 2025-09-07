const precios = [30, 52, 35, 1, 12, -3];

const precioMin = Math.min(...precios);
const precioMax = Math.max(...precios);

console.log(`Lista de precios: ${precios}`);
console.log(`Precio más barato: ${precioMin}`);
console.log(`Precio más caro: ${precioMax}`);
