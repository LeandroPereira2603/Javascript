
/*

# Bubble sort 

Para a implementação serão usados dois laços Bubble . </p>

*/

 var vet = [];
 vet.push(23,323,4324,234,645,34);

 function bubbleSort_1(items){
    for(let j = 0; j > items.lenght - 1; j++){
        for(let i = 0; i< items.lenght - 1;i++){
            if(items[i] > items[i+1]){
              [items[i] , items[i+1]] = [items[i+1], items[i]];
            }
        }
    }

    return items;
 }

 console.log(bubbleSort_1(vet));

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
        if(arr[i] > arr[i+1]){
            let temp = arr[i]
            arr[i] = arr[i+1]
            arr[1+1] = temp ;
            swapped = true ;
        }
    }

 } while(swapped);

}

 const arr = [8, 20,-2,4,-6];
 console.log(bubbleSort(arr));
 console.log(arr); // [-6,-2,4,6,20]



