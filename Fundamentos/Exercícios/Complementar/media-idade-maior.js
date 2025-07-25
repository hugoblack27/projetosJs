const pessoas = [
    { nome: "Ana", idade: 17 },
    { nome: "João", idade: 21 },
    { nome: "Carlos", idade: 16 },
    { nome: "Mariana", idade: 25 }
  ];
  
  // 1. Use filter para pegar quem tem 18 ou mais
  // 2. Use map para extrair as idades
  // 3. Use reduce para somar e calcular a média

const resultadofilter = pessoas.filter((pessoa) => pessoa.idade >= 18)
console.log(resultadofilter)

const resultadomap = pessoas.map((pessoa) => pessoa.idade)
console.log(resultadomap)

const somareduce = resultadomap.reduce((soma, pessoa) => soma + pessoa)
const mediareduce = somareduce / resultadomap.length
console.log(mediareduce)