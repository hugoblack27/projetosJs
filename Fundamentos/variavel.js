//  a variavel de escopo de script ela se baseia em  vc definir
// uma const vc sempre precisa declarar um valor novo caso use dentro de uma função


// escopo de script
let num1 = 10

const num2 = 30
// escopo de função
function testaVariavel(){
    let num1 = 20;
    const num2 = 40
    console.log(num1)
    console.log(num2)
}

console.log(num1)
testaVariavel()
console.log(num2)
