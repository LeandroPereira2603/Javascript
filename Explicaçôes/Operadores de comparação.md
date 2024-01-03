
## Operadores de comparação

 Os operadores de comparaçôes ( == , === , != , !== )

```javascript

if (true == “true”) //retorna true
if (10 == “10”) //retorna true
if (true == true) //retorna true
if (10 == 10) //retorna true

if (true != “true”) //retorna false
if (4 != “4”) //retorna false
if (true !== “true”) //retorna true
if (4 !== “4”) //retorna true
if (true !== true) //retorna false
if (4 !== 4) //retorna false

```

<p> (===) compara os tipos .</p>

```javascript 

var n = 30 ;
var nome = "Leandro";

if (n === nome ) {
 console.log("Verdadeiro");

}

else{

 console.log("false");

}

```
