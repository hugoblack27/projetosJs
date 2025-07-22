// criando uma função
function somaValor() {
    let num1 = 10, num2 = 20, resp = 0

    resp = num1 + num2

    console.log(resp)
}

// criando uma função com parametros
let resp2 = 0
function somaValorN(num3, num4) {

    resp2 = num3 + num4

    console.log(resp2)
}

// função com paremetros e com retorno 
function somaValorR(num3, num4) {
    return num3 + num4
}

// executando a função
somaValor();
somaValorN(50," macaco");
let resposta = somaValorR(80," macaco")
console.log(resposta);

// typeof() serve para vc ver qual o valor da variavel
