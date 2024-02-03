


# Pilha 

A estrutura de dados pilha , serve para tirar o último elemento da pilha , primeiro que entra e o primeiro a sair .



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

        return document.querySelector('#resultado').innerHTML= this.items;

    }

}

export {Pilha}





```




```javascript 

'use strict';


import {Pilha} from './classe.js';


let nomes = new Pilha();

nomes.push('Maurilio');
nomes.push('Veronica');
nomes.push('Sadahiro');
nomes.push('Jose Rogério');

nomes.pop();
nomes.isEmpty();


nomes.listar();



```





> [!NOTE]
> Refêrencia : <br>
> Canal : CODE MEO 


