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

var input = require('fs').readFileSync('/dev/stdin', 'utf8');


var [a,b,c] = input.split(' ').map((item) => parseInt(item));

var abMaior =  ( a + b + Math.abs(a - b))/2 ;

var abcMaior = ( abMaior + c + Math.abs(abMaior- c))/2;

console.log(abcMaior+" eh o maior");




```


## Code in VsCode


```javascript


var input = '7 14 106';

var [a,b,c] = input.split(' ').map((item) => parseInt(item));

var abMaior =  ( a + b + Math.abs(a - b))/2 ;

var abcMaior = ( abMaior + c + Math.abs(abMaior- c))/2;

console.log(abcMaior+" eh o maior");




```