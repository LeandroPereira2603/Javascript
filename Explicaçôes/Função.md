## Função

<p> Uma função é um bloco de código Javascript nomeado e parametrizaddo que voce define uma vez e , então , pode chamar repetidamente. 

### Função com parâmetro vázio :

```javascript

function soma () { // Define a função chamada "soma" , com parãmetro vázio dem retorno .

 var x = 39;
 var y = 25;

 var soma = x + y;

 console.log(soma);

}

```

### Função com parâmetro :

```javascript

var n = parseInt(prompt("Digite um número para fazer o cálculo multiplicado por 10 : "))

function mult(n){ // Define a função chamada "n" , com parãmetro "n" .

 var mult = n * 10 ;

return console.log(mult); // retorna o valor mult que foi calculado .

}

mult(n);

```

```javascript

// outro exemplo de retorno :

var nDois = parseInt(prompt("Digite um número para fazer o cálculo dividido por 10 : "))

function divisao(nDois){
 
 var div = nDois / 10 ;

return div;

}

console.log(divisao(nDois));

```


> [!note] <strong> Refêrencia : </strong> <br>
> Livro - O guia definitivo de JavaSccript 