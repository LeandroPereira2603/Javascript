
## Operadores de comparação

 Os operadores de comparaçôes ( == , === , != , !== )

<P> Exemplo de lógica de comparação : </P>

| Lógica | Retorno |
| :--:|:--:|
| se (true == “true”) | true|
| se (10 == “10”) | true|
| se (true == true)|  true|
| se (10 == 10) |  true|
| se (true != “true”) | false|
| se (4 != “4”) |  false|
| se (true !== “true”) | true|
| se (4 !== “4”) |  true|
| se (true !== true)  false|
| se (4 !== 4)  false|



<p> (===) compara os tipos primitivos .</p>

```javascript 

var n = 30;

var nome = "Leandro";

if (n === nome) {

 console.log("Verdadeiro");

}

else{

 console.log("false");

}

```
