


# Select sort 

Vai selecionar um indice e comparar com os demais indices e trocar .

## Sobre o código :

### Estruturas utilizadas : 

* for ( i ) = Vai fazer 5 interaçôes do for j .
* for ( j ) = vai comparar  os indices , com if (simples) e guardar o número na variável  .
* if ( simples ) = Vai verificar se  o indice menor e diferente do i da contagem do for .
  
```javascript 

var arr =  [];
arr.push(2433,34,45,34,54,98);

console.log(arr);

function selectionSort(vetor){

 let menor;

for (let i = 0; i < vetor.length - 1; i++){
    menor = i;
    for (let j = i + 1;j < vetor.length ; j++){
        if(vetor[j] < vetor[menor]){
            menor = j ;
        }
    }

if ( i != menor){

    [vetor[i], vetor[menor]] = [vetor[menor], vetor[i]];
}

}
return vetor ;

}

selectionSort(arr);

console.log(arr);

```

### Saída 

Números do array : 

| índice | 0 | 1 | 2 | 3 | 4 | 5 |
|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| Número |2433|34|45|34|54|98 |

Números de ordem crescente ( Select Sort )  : 

| índice | 0 | 1 | 2 | 3 | 4 | 5 |
|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| Número |34|34|45|54|98|2433 |

> [!Note]
> **Refêrencia** : <br>
> **Canal youtube** : Eduardo Mendes 
