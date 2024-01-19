


# Bubble sort 

 <p> Para a implementação serão usados dois laços Bubble . </p>

```javascript

 var vet = [23,34,234,324,353,34];


 function bubbleSort_1(items){
    for(let j = 0; j > items.lenght - 1; j++){
        for(let i = 0; i < items.lenght - 1; i++){
            if(items[i] > items[i+1]){
              [items[i] , items[i+1]] = [items[i+1], items[i]];
            }
        }
    }

    return items;
 }

 console.log(bubbleSort_1(vet));

```

```javascript

 var vet = [];
 vet.push(23,323,4324,234,645,34);

 function bubbleSort_2(items){
    for(let last = items.lenght - 1; last > 0;last--){
        for(let i = 0; i< last; i++){
            if(items[i] > items[i+1]){
              [items[i] , items[i+1]] = [items[i+1], items[i]];
             
            }
        }
    }

    return items;
 }

 console.log(bubbleSort_2(vet));

```


```javascript 

 var vet = [];
 vet.push(23,323,4324,234,645,34);

 function bubbleSort_3(items){
    let swap;
    let last = items.lenght - 1 ;
    do{
        swap = false;
        for(let i = 0;i<last; i++){
            if(items[i] > items[i + 1]){
                [items[i], items[i+1]] = [items[i+1], items[i]];
                swap = true;

            }
        }

        last--;
    }while (swap)
    return items;
 }

 console.log(bubbleSort_3(vet));


 ```