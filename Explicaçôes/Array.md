# Array

```javascript

// JavaScript também aceita arrays (listas indexadas numericamente) de valores.

var primes =[2, 3, 5, 7];  // Um array de 4 valores, delimitados com [ e ].
primes[0];                // => 4: quantidade de elementos no array.
primes[4] = 9;           // Adiciona um novo elemento por meio de atribuição.
primes[4] = 11;         // Ou altera um elemnto existente por meio de atribuição.
var empty = [];        // [] é um array vazio, sem qualquer elemento.
empty.lenght.;        // => o

// Os arrays e objetos podem conter outros arrays e objetos:
var points = [       // Um array com 2 elementos.
     
     {x:0, y:0},     // Um array com 2 elementos. 
     {x:1, y:1}      // Cada elemento é um objeto

];


```

# Matriz 

```javascript 

var insect = []; // array 

// Pode ser declarada, assim também .

var insect = new Array [] ; // Istânciando o objeto da classe array na variável insect .


// Inserindo valores nos arrays .

var indiceOne   =  ["Butterfly",0.8];
var indiceDois  =  ["Mariposa",0.7];
var indiceTres  =  ["Formiga",0.3];

// Inserindo os três arrays dentro do array Insect com o método push(), assim se torna uma matriz .

insect.push[indiceOne];
insect.push[indiceDois];
insect.push[indiceTres];

// Para imprimir as informaçõs da matriz , com dois exemplos : 

document.write(" O elemento do índice 0 e 0 , 0 e 1: "+insect[0][0]+" , "+insect[0][1]+" <br> ");
document.write(" O elemento do índice 1 e 0 , 1 e 1: "+insect[1][0]+" , "+insect[1][1]+" <br> ");
document.write(" O elemento do índice 2 e 0 , 2 e 1: "+insect[2][0]+" , "+insect[2][1]+" <br> ");

console.log("O elemento do indice 0 e 0 , 0 e 1: "+insect[0][0]+","+insect[0][1]+"\n");
console.log("O elemento do índice 1 e 1 , 1 e 2 : "+insect[1][1]+","+insect[1][2]+"\n");
console.log("O elemento do índice 2 e 1 , 2 e 2 : "+insect[2][1]+","+insect[2][2]+"\n");

```


> [!NOTE]
> <strong> Referêrencias : </strong> <br>
> * Livro : O guia definito de javascript 
> * Youtube : canal CFBcursos