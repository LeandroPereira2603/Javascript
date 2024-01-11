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

## Matriz - Floresta

| Elemento | índice 0 | índice 1 |
|:--:|:--:|:--:|
|Vetor 0 - insetoUm   | Borboleta | 10 |
|Vetor 1 - insetoDois | Mariposa | 20 |
|Vetor 2 - insetoTres | Formiga | 5 |

### Colocando em prática :

```javascript 

var floresta = []; // array 

// Pode ser declarada, assim também .

var floresta = new Array; // Istânciando o objeto da classe array na variável floresta .

// Inserindo valores nos arrays , o índice 0 para nome e o índice 1 para quantidade .

var insetoUm    =  ["Borboleta",10];
var insetoDois  =  ["Mariposa",20];
var insetoTres  =  ["Formiga",5];

// Inserindo os três elementos arrays dentro do array floresta , com o método push(), assim se tornando uma matriz .

floresta.push(insetoUm);
floresta.push(insetoDois);
floresta.push(insetoTres);

// Para imprimir as informaçõs da matriz , com dois exemplos : 

document.write(" O elemento 0 do índice 0 e 1 : "+floresta[0],[0]+" , "+floresta[0],[1]+" <br> ");
document.write(" O elemento 1 do índice 0 e 1 : "+floresta[1],[0]+" , "+floresta[1],[1]+" <br> ");
document.write(" O elemento 2 do índice 0 e 1 : "+floresta[2],[0]+" , "+floresta[2],[1]+" <br> ");

console.log("O elemento 0 do indice 0 e 1 : "+floresta[0],[0]+","+floresta[0],[1]+"\n");
console.log("O elemento 1 do índice 0 e 1 : "+floresta[1],[0]+","+floresta[1],[1]+"\n");
console.log("O elemento 2 do índice 0 e 1 : "+floresta[2],[0]+","+floresta[2],[1]+"\n");

```

> [!NOTE]
> <strong> Referêrencias : </strong> <br>
> * Livro : O guia definito de javascript 
> * Youtube : canal CFBcursos