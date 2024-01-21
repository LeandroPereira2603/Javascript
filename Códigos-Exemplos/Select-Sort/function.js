

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

}

selectionSort(arr);

console.log(arr);