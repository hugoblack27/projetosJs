let op = 1, resp = 0

function Soma(num1,num2) {
    return num1 + num2
}

function Subtracao(num1,num2) {
    return num1 - num2
}

function Multiplicacao(num1,num2) {
    return num1 * num2
}

function Divisao(num1,num2) {
     return num1 / num2
}


switch (op) {
    case 1:
        resp = Soma(50, 50)
        break;
    case 2:
        resp = Subtracao(50, 50)
        break;
    case 3:
        resp = Multiplicacao(50, 50)
        break;
    case 4:
        resp = Divisao(50, 50)
        break;

    default:
        break;
}

let texto = `A sua resposta foi ${resp}`

console.log(texto)