// a função anonima não tem paremetros dentro dela
setTimeout(function() {
    console.log("função anonima executada após 1 segundo")
},2000);

const minhafuncao = function(parametro){
    return parametro * 2
}

setTimeout(()=>console.log("BANANA"),1000
)