const letras = ['a', 'b', 'a', 'c', 'b', 'a'];

// Use .reduce para retornar um objeto com a contagem de cada letra.
// Ex: { a: 3, b: 2, c: 1 }

const retornar = letras.reduce((acumulador, letra) => {
    acumulador[letra] = (acumulador[letra] || 0) + 1
    return acumulador
}, {})

console.log(retornar)