

// Função sem paramêtro 

function soma () {

var x = 39;
var y = 25;

var soma = x + y;

console.log(soma);


} 

// Função com parâmetro 

var n = parseInt(prompt("Digite um número para fazer o cálculo multiplicado por 10 : "))

function mult(n){
 
    var mult = n * 10 ;

    return console.log(mult);
}

mult(n);


// ou outro exemplo de retorno


var nDois = parseInt(prompt("Digite um número para fazer o cálculo dividido por 10 : "))

function divisao(nDois){
 
    var div = nDois / 10 ;

    return div;
}

console.log(divisao(nDois));

