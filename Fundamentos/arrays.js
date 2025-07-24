const frutas = ["Maça","Pêra","Uva","Abacaxi", "Manga"]
const cores = ["vermelho", "Branco", "Preto", "Azul"]
const numeros = new Array(10, 20, 30, 40, 50)

let primeroItem = frutas[0]
let segundoItem = numeros[3]

let i = 0

console.log(frutas[0])
console.log(numeros[3])
console.log(frutas)
console.log(numeros)

while (i < numeros.length) {
    console.log(numeros[i])
    i++
}

cores.forEach(function(cor){
    console.log(cor)
})

for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
}