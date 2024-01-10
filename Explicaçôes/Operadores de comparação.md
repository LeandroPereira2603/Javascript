
# Operadores de comparação

 Os operadores de comparaçôes ( == , === , != , !== )

## Exemplo de lógica de comparação 

| Lógica | Retorno |
| :--|:--:|
| if (true == “true”) | true|
| if (10 == “10”) | true|
| if (true == true)|  true|
| if (10 == 10) |  true|
| if (true != “true”) | false|
| if (4 != “4”) |  false|
| if (true !== “true”) | true|
| if (4 !== “4”) |  true|
| if (true !== true) | false|
| if (4 !== 4)  |false|

## Na prática 

<p> O operador relacional ( === ) restritiva abstrata onde vai fazer a comparação dos tipos enão dos valores . </p>

```javascript 

var n = 30;
var nome = "Leandro";

if (n === nome) {               // Compara os tipos primitivos 

 console.log("Verdadeiro");

}

else{

 console.log("false");

}

```
