const numeros = [10, 50, 30, 90, 20];

// Use .reduce para encontrar o maior número.

const retornar = numeros.reduce((numeromaior,numero) => { return numero > numeromaior ? numero : numeromaior})
console.log(retornar)