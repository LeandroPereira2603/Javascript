# Array

<p> Array e um elemento unidimensional que possue vários índices .</p>

```javascript

// JavaScript também aceita arrays (listas indexadas numericamente) de valores.

var primes =[2, 3, 5, 7];  // Um array de 4 valores, delimitados com [ e ].
primes[0];                // => 4: quantidade de elementos no array.
primes[4] = 9;           // Adiciona um novo elemento por meio de atribuição.
primes[4] = 11;         // Ou altera um elemnto existente por meio de atribuição.
var empty = [];        // [] é um array vazio, sem qualquer elemento.
empty.lenght;        // => o

// Os arrays e objetos podem conter outros arrays e objetos:

var points = [       // Um array com 2 elementos.
     
     {x:0, y:0},     // Um array com 2 elementos. 
     {x:1, y:1}      // Cada elemento é um objeto

];


```

# Matriz 

## Floresta 

| Elemento | índice 0  | índice 1 |
|:--:|:--:|:--:|
|Vetor 0 - insetoUm   | Borboleta | 10 |
|Vetor 1 - insetoDois | Mariposa | 20 |
|Vetor 2 - insetoTres | Formiga | 5 |

### Sobre o código :

* Matriz Bidimensional 
* Metódo _push()_

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
### Sobre o código : 

* Matriz ( Tridimensional )
* for encadeado 

<img src="https://photos.app.goo.gl/uuM9pvjdpdJhV5rR9"></img>

```javascript 

unidimensional_lin= [];
item = [];
item_2 = []
item.push(1,4,5);
item_2.push(2,4,7);

unidimensional_lin.push(item,item_2);

console.log(unidimensional_lin[0][0]);

bidimensional_coluna = [];

ite = [];
ite_2 = []
ite.push("63","837","377");
ite_2.push(738,738,899);

bidimensional_coluna.push(ite,ite_2);

tridimensional_profu= [];

tridimensional_profu.push(unidimensional_lin,bidimensional_coluna);

console.log(tridimensional_profu);

for (var j = 0; 3<j;j++){
  for (var k = 0;3<k;k++){
    for (var i =0; 3<i;i++){
      console.log(tridimensional_profu[j][k][i]);
    }
  }
  
}


```


* Matriz ( Multidimensional )

> [!NOTE]
> <strong> Referêrencias : </strong> <br>
> * Livro : O guia definito de javascript 
> * Youtube : canal CFBcursos
> * (LLP) Leandro Luiz Pereira 