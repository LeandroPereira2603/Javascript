# Objeto 

## Função com retorno da chave do objeto

### Objeto : butterfly

```javascript 

function butterfly (caracteristicas) {

\\ Criando objto que não pode ser alterado , pois esta dentro da variável const "constante"

const butterly = {

 'nome' : 'Butterfly,
 'peso' : 0.1,
 'altura' : 0.8,
 'cor' : azul 

}

  return butterfly[caracteristicas] || 'caracteristica não encontrada !' ;

}

\\ Acessar a chave do objeto butterfly 

  console.log(butterfly('nome'));

\\ Vai retornar : 'Butterfly'


``` 

### Objeto : siglaPais

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

\\ Ativando a função siglapais , pesquisando no parâmetro da função 'Russian', retornando o atributo da chave do objeto pais : 'RUS' .

console.log(siglaPais('Russian'));

\\ Vai retornar : 'RUS'

```







