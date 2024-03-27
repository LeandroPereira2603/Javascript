# Lista 

#### Lista - encadeado :

arranjo da memória 

Ponteiro para o primeiro elemento -> Dado 1 -> Dado 2 (nó da lista) -> Dado 3 -> Ponteiro o proximo elemento.




```javascript 

// Liked-list 

function LinkedList() {

let head = null ;
let length = 0;

const Node = (value) => {
    return {
        value,
        next: null      
    }
}

// 0(n)
const add = (value) => {
    if (!head){
     head = Node(value) ;
     length++;
     return head ;
    }

    let node = head ;
    
    while(node.next){
        node = node.next ;
    }

    node.next = Node(value);
    length++;
    return node.next;

}

node.next = Node(value);
lenght++;

return {

 length: () => length,
 add: (value) => add(value),
 print: () => console.log(head)


}

}

const list = LinkedList();

console.log(list.length());
list.add(1);
list.add(2);
list.add(3);
list.add(4);
console.log(list.length);
list.print();

```

#### Lista - Duplamente encadeada :

arranjo de memória 

Ponteiro para o primeiro elemento -> <- Dado 1 -> <- Dado 2 ( nó da lista) -> <- Dado 3 -> <- ponteiro para o proximo elemento .

#### Operaçôes em listas 

Diversas operações podem ser realizadas em listas , tais como: 

* get(): Retornar um elemento da lista, e uma posição especifica .
* insert(): Inserir um elemento em uma posição qualquer na lista .
* remove(): Remover o elemento qualquer em uma posição especifica em uma lista (não-vazia):
* removeAt(): Remover o elemento qualquer em uma posiçâo especficada na lista (não-vazia).
* replace(): Substituir um elemento em qualquer posição por outro elemento.
* size(): Retornar o tamanho da lista (número de elementos).
* isEmpty(): Retorna um booleano informado se a estrutura está vazia .
* isFull(): Retorna um booleano informando se a estrutura está cheia .





> [!NOTE]
> **Refêrencias** : <br>
> canal : Bóson treinamenoos (explicação) <br>
> canal : DevPleno  (code)
