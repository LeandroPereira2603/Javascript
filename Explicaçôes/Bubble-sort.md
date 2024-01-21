# Bubble Sort

Vai organizar um conjunto de índices de array , podendo colocar de forma crescente ou decrescente 

## Sobre o código

### Estruturas utilizadas : 

* for i = vai repetir 6 vezes que e a quantidade total do array 
* if = vai comparar dois em dois e trocar os indices .
* for j = vai repetir o processo do (for i) 6 vezes que e a quantidade total do array .

### Métodos utilizados :

* length = retorna a quantidade total do array.

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
console.log("\nNúmeros crescente (Bubble Sort) :\n ")
console.log(vet)
bubbleSortDecrecente(vet);
console.log("\nNúmeros decrescente (Bubble Sort) :\n ");
console.log(vet);
console.log("\nNúmeros totais de indices : "+vet.length);

```

> [!note]
> **Refêrencia** <br>
> (LLP) Leandro Luiz Pereira
