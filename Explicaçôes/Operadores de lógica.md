<p> <strong>Operadores de lógica </strong> : Serve para comparar os valores e retornar se é verdadeiro "true" ou falso "false" exemplos de operadores de lógica ( AND "&&" , OR "||" , NOT "!=" ) podendo combinar ou inverter valores boolenos . </p> 


```javascript

// O código a seguir mostra exemplos do operador && (E lógico).

var a1 = true && true; // t && t retorna true
var a2 = true && false; // t && f retorna false
var a3 = false && true; // f && t retorna false
var a4 = false && 3 == 4; // f && f retorna false
var a5 = "Gato" && "Cão"; // t && t retorna Cão
var a6 = false && "Gato"; // f && t retorna false
var a7 = "Gato" && false; // t && f retorna false

// impressão de informação 

console.log(" verdadeiro  && verdadeiro retorna : "+a1);
console.log(" verdadeiro && falso retorna :  "+a2);
console.log(" falso  && verdadeiro retorna : "+a3 );
console.log(" falso  && 3 == 4 retorna : "+a4 );
console.log(" Gato && cão retorna :"+a5 );
console.log(" falso &&  gato retorna :" +a6);
console.log(" gato && false retorna :"+a7);

// O código a seguir mostra exemplos do operador || (OU lógico).

var o1 = true || true; // t || t retorna true
var o2 = false || true; // f || t retorna true
var o3 = true || false; // t || f retorna true
var o4 = false || 3 == 4; // f || f retorna false
var o5 = "Gato" || "Cão"; // t || t retorna Gato
var o6 = false || "Gato"; // f || t retorna Gato
var o7 = "Gato" || false; // t || f retorna Gato


console.log(" verdadeiro  ||  verdadeiro retorna :"+o1);
console.log(" falso  ||  verdadeiro retorna :"+o2);
console.log(" verdadeiro ||  falso  retorna :"+o3);
console.log(" falso ||  3 == 4 retorna :"+o4);
console.log(" gato ||  cão  retorna :"+o5);
console.log(" falso  ||  gato  retorna :"+o6);
console.log(" gato  ||  falso  retorna :"+o7);

//O código a seguir mostra exemplos do operador ! (negação lógica).

console.log(" !verdadeiro  retorna :"+n1);
console.log(" !falso  retorna :"+n2);
console.log(" !gato retorna :"+n3;
var n1 = !true; // !t retorna false
var n2 = !false; // !f retorna true
var n3 = !"Gato"; // !t retorna false

```
<p> Usando exemplo para verificar a lógica com a estrutura ds desvio condicional "if" </p>

```javascript 

var x = 40 ;
var y = 50 ;
var c = 70 ;

if ( x == y  &&  y == c ) {

 console.log(" Verdadeiro ");

}

else {

console.log("Falso") ;

}

```
Lógica AND = As duas expressões tem que ser verdadeiro para retornar verdadeiro . 

Lógica OR = Uma das expressões tem que ser verdadeiro para retornar verdadeiro <br> 

Lógica NOT = inverte o valor booleano , ou seja vai contraria a logica se a expressão for verdadeiro vai se transforma em falso .

> [!NOTE]
> <strong> Rêferencia : </strong>
> * Livro : O guia definitivo do javascript





























