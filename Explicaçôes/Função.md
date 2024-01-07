# Função

<p> Uma função é um bloco de código nomeado e parametrizado ,  que voce define uma vez e , então , pode chamar repetidamente. </p>

## Função com parâmetro vázio 


```javascript

function soma () {          // Define a função chamada "soma" , com parãmetro vázio sem retorno .

    var x = 39;
    var y = 25;
    var soma = x + y;
    console.log(soma); 

}

```

## Função com parâmetro 



```javascript

var n = parseInt(prompt("Digite um número para fazer o cálculo multiplicado por 10 : "))

function mult(n){           // Define a função chamada "n" , com parãmetro "n" .

    var mult = n * 10 ;

return console.log(mult);   // Retorna o valor mult que foi cálculado .

var p = 30;

mult(p);                    // A chamada da função vai retorna o valor cálculado da variável p .

}

// Outro exemplo de retorno :

var nDois = parseInt(prompt("Digite um número para fazer o cálculo dividido por 10 : "))

function divisao(nDois){
 
 var div = nDois / 10 ;

return div;

}

console.log(divisao(nDois));

```

## Atribuindo a função na variável 


```javascript 

var function plus(x){

    var result = x * 2;

    return result ;
}

var potencia = function(x) {      // As funçôes são valores podem ser atribuidas a variáveis .
  
    return x * x ;               // Calcula o valor da função .
};

var y = 30;

potencia(plus(y));              // Chamadas das funçôes em uma única expresssão .

```

> [!NOTE]
> <strong> Rêferencia : </strong>
> * Livro : O guia definitivo do javascript


