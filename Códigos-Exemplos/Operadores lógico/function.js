// O código a seguir mostra exemplos do operador && (E lógico).

var a1 = true && true; // t && t retorna true
console.log(" verdadeiro  && verdadeiro retorna : "+a1);


var a2 = true && false; // t && f retorna false
console.log(" verdadeiro && falso retorna :  "+a2);


var a3 = false && true; // f && t retorna false
console.log(" falso  && verdadeiro retorna : "+a3 );


var a4 = false && 3 == 4; // f && f retorna false
console.log(" falso  && 3 == 4 retorna : "+a4 );


var a5 = "Gato" && "Cão"; // t && t retorna Cão
console.log(" Gato && cão retorna :"+a5 );


var a6 = false && "Gato"; // f && t retorna false
console.log(" falso &&  gato retorna :" +a6);


var a7 = "Gato" && false; // t && f retorna false
console.log(" gato && false retorna :"+a7);

//O código a seguir mostra exemplos do operador || (OU lógico).

var o1 = true || true; // t || t retorna true
console.log(" verdadeiro  ||  verdadeiro retorna :"+o1);

var o2 = false || true; // f || t retorna true
console.log(" falso  ||  verdadeiro retorna :"+o2);

var o3 = true || false; // t || f retorna true
console.log(" verdadeiro ||  falso  retorna :"+o3);

var o4 = false || 3 == 4; // f || f retorna false
console.log(" falso ||  3 == 4 retorna :"+o4);

var o5 = "Gato" || "Cão"; // t || t retorna Gato
console.log(" gato ||  cão  retorna :"+o5);

var o6 = false || "Gato"; // f || t retorna Gato
console.log(" falso  ||  gato  retorna :"+o6);


var o7 = "Gato" || false; // t || f retorna Gato
console.log(" gato  ||  falso  retorna :"+o7);

//O código a seguir mostra exemplos do operador ! (negação lógica).

var n1 = !true; // !t retorna false
console.log(" !verdadeiro  retorna :"+n1);

var n2 = !false; // !f retorna true
console.log(" !falso  retorna :"+n2);

var n3 = !"Gato"; // !t retorna false
console.log(" !gato retorna :"+n3);