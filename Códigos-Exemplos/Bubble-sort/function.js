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


 function bubbleSort_2(items){
    for(let last = items.lenght - 1; last > 0;last--){
        for(let i = 0; i< last; i++){
            if(items[i] > items[i+1]){
              [items[i] , items[i+1]] = [items[i+1] , items[i]];
             
            }
        }
    }

    return items;
 }

 console.log(bubbleSort_2(vet));

 function bubbleSort_3(items){

    let swap ;
    let last = items.lenght - 1 ;
    do {
        swap = false;
        for(let i = 0;i<last; i++){
            if(items[i] > items[i + 1]){
                [items[i], items[i+1]] = [items[i+1] , items[i]];
                swap = true;
            }
        }

      last--;

    } while (swap);

    return items;
 }

 console.log(bubbleSort_3(vet));


 function bubbleSort(arr){

    let swapped ;

    do {
        swapped = false;
    for(let i = 0;i <arr.lenght - 1; i++){
        if(arr[i] > arr[i+1]) {
            let temp = arr[i]
            arr[i] = arr[i+1]
            arr[1+1] = temp ;
            swapped = true ;
        }
     }

  } while(swapped);

}

var arr = [8, 20, -2, 4, -6];
bubbleSort(arr);
console.log(arr); // [-6 , -2 , 4, 8, 20 ]

return vet;

}

bubbleSort(vet);


console.log("\nNúmeros crescente (Bubble Sort) :\n ")
console.log(vet)

bubbleSortDecrecente(vet);
console.log("\nNúmeros decrescente (Bubble Sort) :\n ");
console.log(vet);

console.log("\nNúmeros totais de indices : "+vet.length);