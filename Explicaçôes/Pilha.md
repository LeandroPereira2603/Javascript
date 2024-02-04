


# Pilha 

A estrutura de dados de pilha , serve para tirar o último elemento do índice do array , sendo que o último que e colocado e o primeiro a ser retirado .

### Exemplo 1 :


```javascript

var array = [];

function push (indice){
  array.push(indice);
}

function pop(){
  array.pop();
}

function peek(){
  return  array[array.lenght-1];
}

function clear(){
  array = [];
}

function listar(){
  console.log(array);
}

function criarPilha (n){
  
for (var i=0;i<n;i++){
  
  var x = Math.random(0,10)*10;
  push(x.toFixed(0));
  x = 0;
  
}

 if (n > 2 && n < 3){
    clear();
  }

}

criarPilha(Math.random(0,6)*6);

console.log("Criando pilha :");

console.log(array);

console.log("\n");

console.log("Estrutura de dados : Pilha ")

pop(peek);

listar();

```



### Exemplo 2 : com POO ( programação orientado a objeto) criando classe e objeto .


```javascript 

'use strict';

class Pilha {

    constructor(){

        this.items = [];

    }

    // Incluir elementos .

    push(elemento){

     this.items.push(elemento);

    }

    // Retirar elementos .

    pop(){

        return this.items.pop();
    }

    // Verificar o elementos que está no topo da pilha .

    peek(){

        return this.items[this.items.lenght - 1];

    }

    // Verificar se a pilha está vazia 

    isEmpty(){
       let condicao = this.items.length === 0;

       console.log(condicao);
    }

    // Limpar a pilha 

    clear(){
        this.items = [];
    }

    // Mostrar todos os elementos da pilha 

    listar(){

        return console.log(this.items);

    }
    
}

let nomes = new Pilha();

nomes.push('Maurilio');
nomes.push('Veronica');
nomes.push('Sadahiro');
nomes.push('Jose Rogério');

nomes.pop();
nomes.isEmpty();


nomes.listar();

//export {Pilha}


``` 

> [!NOTE]
> **Refêrencias :** <br>
> **Canal :** CODE MEO <br>
> **(LLP) :** Leandro Luiz Pereira 













    
