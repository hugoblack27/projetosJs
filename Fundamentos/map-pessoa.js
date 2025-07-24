const pessoas = [ 
    {nome:"João", idade: 19},
    {nome:"Mario", idade: 29},
    {nome:"Pedro", idade: 39}
] 

const adicionar = pessoas.map((pessoa) => {
    const categoria = pessoa.idade < 30 ? 'jovem':'adulto'
    return{
        ...pessoa,
        categoria
    }
})