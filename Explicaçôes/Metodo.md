
# Metodos gerais 

### 1 - toFixed( )

<p> Serve para defenir a quantidade de casas decimais .</p>

``` javascript

var x = 13.23232;

x.toFixed(2);

// Vai retorna com duas casas decimais : 13.23 .

```

### 2 - Math.random( )

<p> Serve para gerar número aleatório .</p>

```javascript

var y ;

y = Math.random(0,100).toFixed(2)*100;

// Retorna : vai gerar um número diferente toda vez que atualizar a página , com duas casas decimais .

```
### 3 - Math.pow( )

<p> Serve para elevar a potência do número .</p>

```javascript

var x = 5 ;

Math.pow(x,2) ; 

// é o mesmo que escrever na aritmética 5² .
// Irá retorna = 25 

```
### 4 - Math.floor()

<p> Transforma o número decimal em inteiro .</p>

```javascript 

var x = 10.47848;
Math.floor(x)

// Retorna : 10

```


## Exemplo de utilização de métodos 

<p> Quando combinamos funçôes com objetos , obtemos métodos : </p>

```javascript

// Quando funçôes recebem as propriedades de um objeto, as 
// chamamos de "métodos". Todos os objetos de Javascript tem métodos:

var a = [] ;             // Cria um array vazio .
a.push(1,2,3);           // O método push() adiciona elementos de um array .
a.reverse();             // Outro método: inverte a ordem dos elementos .

// Também podemos definir nossos próprios métodos . A palavra-chave "this" se refere ao
// objeto no qual o método é definido: neste caso, o array de pontos anterior . 

point.dist = function(){              // Defone um método para calcular a distância .

    var p1 = this[0];                 // Primeiro elemento do array que . chamamos .  
    var p2 = this[1];                 // Segundo elemento do objeto "this" .
    var a = p2.x-p1.x;                // Diferença em coordenadas X .
    var b = p2.y-p1.y;                // Diferença em coordenadas Y .
    return Math.sqrt(a*a + b*b);     // Math.sqrt() calcula a raiz quadrada, oteorema de pítagoras .
};

points.dist();         // 1,414: distância entre nossos 2 pontos .



```


> [!NOTE]
> <strong> Rêferencias: </strong>
> * Livro : O guia definitivo do javascript
> * Site : [W3Schools](https://www.w3schools.com/)
> * (LLP) : Leandro Luiz Pereira 