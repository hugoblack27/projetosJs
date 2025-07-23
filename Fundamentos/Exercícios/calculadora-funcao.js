let op = 1, resp = 0, num1 = 30, num2 = 30, nomeoperador = " "

const Soma = (num1,num2) => num1 + num2

const Subtracao = (num1,num2) => num1 - num2

const Multiplicacao = (num1,num2) => num1 * num2

const Divisao = (num1,num2) => num1 / num2

switch (op) {
    case 1:
        nomeoperador = "Soma"
        resp = Soma(num1,num2)
        break;
    case 2:
        nomeoperador = "Subtração"
        resp = Subtracao(num1,num2)
        break;
    case 3:
        nomeoperador = "Multiplicação"
        resp = Multiplicacao(num1,num2)
        break;
    case 4:
        nomeoperador = "Divisão"
        resp = Divisao(num1,num2)
        break;

    default:
        nomeoperador = "operação invalida"
        resp = "resposta errada"
        break;
}

let texto = `A ${nomeoperador} de ${num1} e ${num2} resposta foi ${resp}`

console.log(texto)