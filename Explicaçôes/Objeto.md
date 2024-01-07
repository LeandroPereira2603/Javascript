# Objeto 

<p> O tipo de dados mais importante de JavaScript é o objeto. </p>

<p> Um objeto é uma coleção de pares nome/valor ou uma string para mapa de valores : 

```javascript 

var book = {                 // Objetos são colocados entre chaves.
   topic: "JavaScript",     // A propriedade "topic" tem o valor "JavaScript",
   fat: true               // A chave marca o fim do objeto .   
};

// Acesse as propriedades de um objeto com . ou [] : 

book.topic                   // => "JavaScript"
booc["fat"]                 // => true: outro modo de acessar valores de propriedade.
book.author ="Flanagan";   // Crie novas propriedades por meio de atribuição.
book.contents = {};      // {} é um objeto vazio sem qualquer propriedade.

var data = {        // Um objeto com 2 propriedades 
  
   trial1: [[1,2], [3,4]],    // Um objeto com 2 propriedades 
   trial2: [[2,3], [[2,5]]],   // O valor de cada propriedade é um array.

};



```

> [!note] <strong> Refêrencia : </strong> <br>
> Livro - O guia definitivo de JavaSccript 

<!--Função para retornar a chave do objeto

**Exemplo** : Objeto butterfly

```javascript 

function butterfly (caracteristicas) {

// Criando objeto , que não pode ser alterado , pois esta dentro da variável const, que significa uma "constante".

const butterly = {

 'nome' : 'Butterfly',
 'peso' : 0.1,
 'altura' : 0.8,
 'cor' : 'azul'

}

  return butterfly[caracteristicas] || 'caracteristica não encontrada !' ;

}

// Acessar a chave do objeto butterfly 

  console.log(butterfly('nome'));

// Vai retornar : 'Butterfly'


``` 

**Exemplo** : Objeto  siglaPais

```javascript 

function siglaPais (sigla) {

const pais = {

'Korean' : 'CO',
'Russian': 'RUS',
'Brazil' : 'BR',
'Stated United' : 'EUA',
'Japan' : 'JP',
'China' : 'CH'

}

return siglaPais[sigla] || 'País não encontrado';

}

// Ativando a função siglapais , pesquisando no parâmetro da função 'Russian', retornando o atributo da chave do objeto pais : 'RUS' .

console.log(siglaPais('Russian'));

\\ Vai retornar : 'RUS'

```

-->





