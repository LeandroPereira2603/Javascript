 
 # Operadores relacionais 

 <p> São operadores que faz a ligação para testar os valores para ver se são , desiguais , iguais , maiores etc ... são avaliados como verdadeiros ou falsos . : ( > , < , >= , <= , == , === , != , !== )  </p>

## Exemplo :

```javascript

x == y             // Falso : igualdade 
x < y              // Verdadeiro : desigualdade 
x <= y             // Verdadeiro: menor que 
x > y              // Verdadeiro : monor ou igual a 
x >= y             // Falso: maior que 
"two" == "true"    // Falso: maior ou igual a
"two" > "three"    // Verdadeiro : "tw" é a alfabeticamente maior do que "th"
false == (x > y)   // Verdadeiro: falso é igual a falso 

var igualdade = x == y;             
var menor = var x < y;             
var maiorIgual = x <= y;           
var maior = x > y;             
var maiorIgual = x >= y;             
var igualdadeSting = "two" == "true";    
var maiorString = "two" > "three";  
var booleanIgual = false == (x > y);  

console.log(igualdade);
console.log(menor);
console.log(maiorIgual);
console.log(maior);
console.log(maiorIgual);
console.log(igualdadeString);
console.log(maiorString);
console.log(booleanIgual);


```

<p> Fazendo uma relação dos valores da variável , butterfly e mariposa .</p>

```javascript

var butterfly = 0.08;
var mariposa = 0.07;

var logica = butterfly > mariposa ; // Verificando os valores 

console.log(logica);

``` 
<!--
<p> Como funciona de baixo dos panos , a leitura dos códigos no navegador , na tela de depuração do console , que e uma API básica integrada ao navegador ,vai fazer a interpretação do código retornar true "verdadeiro" imprimindo no console do navegador onde fica na aba ferramentas do programador </p> 

<p>
navegadores :  google chrome , safari , opera, etc.</p>

-->

> [!NOTE]
> <strong> Rêferencia : </strong>
> * Livro : O guia definitivo do javascript
