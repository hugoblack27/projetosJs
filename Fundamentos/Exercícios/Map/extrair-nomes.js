const usuarios = [
    { nome: "Ana", idade: 20 },
    { nome: "João", idade: 25 },
    { nome: "Carlos", idade: 30 }
  ];
  
  // Use .map para criar um array apenas com os nomes.
const nomes = usuarios.map((usuario) => usuario.nome )


console.log(nomes)