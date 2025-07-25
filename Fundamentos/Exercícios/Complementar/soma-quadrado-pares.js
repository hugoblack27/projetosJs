const numeros = [1, 2, 3, 4, 5, 6];

// 1. Use filter para pegar os pares
// 2. Use map para elevar cada um ao quadrado
// 3. Use reduce para somar tudo

const pares = numeros.filter((par) => par % 2 == 0)
console.log(pares)

const quadrado = numeros.map((quadrados) => quadrados * 2)
console.log(quadrado)

const soma = quadrado.reduce((somar, numero) => somar + numero)
console.log(soma)