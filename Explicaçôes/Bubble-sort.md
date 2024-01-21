# Bubble Sort

Vai organizar um conjunto de números dos índices do array , podendo colocar de forma crescente ou decrescente .

## Sobre o código :

### Estruturas utilizadas : 

* **for( i )** = Vai repetir 6 vezes.
* **if** = vai comparar dois em dois e trocar os indices .
* **for( j )** = Vai repetir o processo do (for i) 6 vezes .

### Métodos utilizados :

* **length** = Retorna a quantidade total do array.

```javascript

vet = [];
vet.push(378,67,2377,10,8,7);
console.log("\nNúmeros colocado nos indices :\n ")
console.log(vet);

function bubbleSort(vet){
 for (var j = 0 ; j < vet.length;j++){
  for (var i = 0 ; i < vet.length;i++){
   if (vet[i] > vet[i+1]){
    [vet[i] , vet[i+1]] = [vet[i+1],vet[i]];
   }
  }
 }
 return vet;
}

function bubbleSortDecrecente(vet){
 for (var j = 0 ; j < vet.length;j++){
  for (var i = 0 ; i < vet.length;i++){
   if (vet[i] < vet[i+1]){
    [vet[i+1] , vet[i]] = [vet[i],vet[i+1]];
   }
  }
}

return vet;

}

bubbleSort(vet);

console.log("\nNúmeros de forma crescente (Bubble Sort) :\n ")
console.log(vet)

bubbleSortDecrecente(vet);
console.log("\nNúmeros de forma decrescente (Bubble Sort) :\n ");
console.log(vet);

console.log("\nNúmeros totais de indices : "+vet.length);

```
### Saída 

 Números do array : 

| índice | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| Número | 378 | 67 | 2377 | 10 | 8 | 7 |

Números de forma crescente (Bubble Sort) : 

| índice | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| Número | 7 | 8 | 10 | 67 | 387 | 2377 |


Números de forma decrescente (Bubble Sort) : 

| índice | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| Número | 2377 | 387 | 67 | 10 | 8 | 7 |


**Obs** : A melhor forma de aprender , e cópia um código e distrinchar linha por linha , e entender e criar do zero  , foi um método que deu certo para aprender Bubble Sort .


> [!note]
> **Refêrencia :** <br>
> (LLP) Leandro Luiz Pereira


