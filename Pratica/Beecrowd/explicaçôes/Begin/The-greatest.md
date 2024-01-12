# The greatest

**Level:** :star: :star: :star:

**Solved:** not

Make a program that reads 3 integer values and present the greatest one followed by the message "eh o maior". Use the following formula:


**Input**

The input file contains 3 integer values.

**Output**

Print the greatest of these three values followed by a space and the message “eh o maior”.

| Input Samples	| Output Samples |
|:--:|:--:|
|7 14 106 | 106 eh o maior |
| 217 14 6 | 217 eh o maior |

## Code for beecrowd

```javascript 

[a,b,c] = lines[0].split(' ');

abcMaior =  (a + b + c Math.abs(a - b - c ))/2 ;

console.log(" "+abcMaior+" eh maior ");


```


## Code in VsCode


```javascript


input = '7 14 106';
lines = input.split('\n');

[a,b,c] = lines[0].split(' ').map(Number);

ab =  (a + b + Math.abs(a - b ))/2 ;

bc = (b + c + Math.abs(b - c))/2;


if ( ab > bc){
  
  console.log(" "+ab+" eh maior ");
  
}

else{
  
   console.log(" "+bc+" eh maior ");
  
}




```