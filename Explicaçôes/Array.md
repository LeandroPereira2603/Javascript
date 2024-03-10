# Array

<p> O array e unidimensional que pode ter vários índices .</p>

```javascript

// JavaScript também aceita arrays (listas indexadas numericamente) de valores.

var primes = [2, 3, 5, 7];  // Um array de 4 valores, delimitados com [ e ].
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

# Métodos

## _pop()_ 

 Tira o último elemento do índice do array .

```javascript 

var array = [18,57,88,26,86,54] ;

array.pop();

console.log(array);


```


| 0 | 1 | 2 | 3 | 4 | 
|:-:|:-:|:-:|:-:|:-:|
|18 | 57|88| 26| 86 |



## _splice()_ 

 Acrescenta e remove elementos do array.

* **1 parâmetro** : define o índice onde será acrescentada  
* **2 parametro** :  define onde vai se iniciar , o melhor para definir e o número 0 pois se colocar algum outro número ele vai deletar outros índices .
* ** 3 e 4 ,5 , 6 e por diante parametros** :   são 
os indices que serão acrescentados .

```javascript 

var array = [18,57,88,26,86,54] ;

array.splice(2,0, 25 , 27  );

console.log(array);


```

| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|18 | 57|25 | 27 | 88 | 26| 86 |




##  _unshift()_ 

 Adiciona mais elementos a partir do primeiro índice do array.

```javascript 

var array = [18,57,88,26,86,54] ;

array.unshift(25 , 27);

console.log(array);


```


| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|:-:|:-:|:-:|:-:|:-: | :-:| :-: |:-:|
| 25 |27 | 18 | 57|88| 26| 86 | 54|


## _push()_ 

Adiciona mais elementos  a partir do último índice  no array.

```javascript 

var array = [18,57,88,26,86,54] ;

array.push(25 ,29);

console.log(array);


```


| 0 | 1 | 2 | 3 | 4 |5|6 |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|18 | 57|88| 26| 86 |25|29|




# Matriz 

## Bidimensional 

### Tabela : Floresta 

| Elemento | índice 0  | índice 1 |
|:--:|:--:|:--:|
|Vetor 0 - insetoUm   | Borboleta | 10 |
|Vetor 1 - insetoDois | Mariposa | 20 |
|Vetor 2 - insetoTres | Formiga | 5 |

### Sobre o código :

* Metódo _push()_ : Para inserir um novo índice ao elemento .

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

<!--
## Tridimensional 

### Sobre o código : 

* Estrutura _for()_ encadeado  : Para leitura de cada índice dos elementos .

* Metódo _push()_ : Para inserir um novo índice ao elemento .


```javascript 

unidimensional_lin= [];
item = [];
item_2 = [];
item.push(1,4,5);
item_2.push(2,4,7);

unidimensional_lin.push(item,item_2);

bidimensional_coluna = [];

ite = [];
ite_2 = [];
ite.push("63","837","377");
ite_2.push(738,738,899);

bidimensional_coluna.push(ite,ite_2);

tridimensional_profu = [];

it = [];
it_2 = [];
it.push("633","8327","3772");
it_2.push(7388,7382,1839);

tridimensional_profu.push(it,it_2)

cubo = [];

cubo.push(unidimensional_lin, bidimensional_coluna,tridimensional_profu);

console.log(cubo[1][1][0]);

console.log(cubo);

/* resolvendo 
for (var s = 0; 2 < s ;s++){
  console.log(cubo[s]);
}

for (var j = 0;3<j;j++){
  for (var k = 0;2<k;k++){
    for (var i = 0;2<i;i++){
      console.log(cubo[j][k][i]);
     }
   } 
}
*/

```
-->

## Multidimensional 

```javascript 

//Matriz multidimensional 

var inseto = [];
var animal = [];
var peixe = [];

inseto.push("Formiga", "marrom", 90);
animal.push("Cavalo", "branco",80);
peixe.push("Golfinho","branco",52);

var floresta = [];

floresta.push(inseto,animal,peixe);

var floresta_dois = [];

var inseto_dois = [];
var animal_dois = [];
var peixe_dois = [];

inseto_dois.push("Largata", "marrom", 10);
animal_dois.push("Girafa", "branco",190);
peixe_dois.push("Peixe","branco",52);

var floresta_dois = [];

floresta_dois.push(inseto_dois,animal_dois,peixe_dois);

var florestas = [];

florestas.push(floresta,floresta_dois);

console.log(florestas);

 // vetor : 1 floresta , 2 categoria , 3 caracteristica.
 
console.log(florestas[1][2][2]);


```

> [!NOTE]
> <strong> Referêrencias : </strong> <br>
> * **Livro :** O guia definito de javascript 
> * **Youtube :** canal CFBcursos
> * **(LLP)** Leandro Luiz Pereira 
