# Distance between two points 

**Level:** :star:

**Solved:** ✓

Read the four values corresponding to the x and y axes of two points in the plane, p1 (x1, y1) and p2 (x2, y2) and calculate the distance between them, showing four decimal places after the comma, according to the formula:

Distance = here is a img

**Input** 

The input file contains two lines of data. The first one contains two double values: x1 y1 and the second one also contains two double values with one digit after the decimal point: x2 y2.

**Output** 

Calculate and print the distance value using the provided formula, with 4 digits after the decimal point.

| Input Sample	| Output Sample|
|:--:|:--|
|1.0 7.0 <br> 5.0 9.0 | 4.4721 |
|-2.5 0.4 <br> 12.1 7.3|16.1484 |
| 2.5 -0.4 <br> -12.2 7.0 | 16.4575 |

### For beecrowd

```javascript 

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var [x1,y1] = lines[0].split(' ').map((item) => parseFloat(item));
var [x2,y2] = lines[1].split(' ').map((item) => parseFloat(item));

var distance = Math.sqrt((Math.pow(x2-x1,2))+(Math.pow(y2-y1,2)));

console.log(distance.toFixed(4));

```

### In VsCode 

```javascript 

input = '-2.5 0.4\n12.1 7.3';
lines = input.split('\n');

var [x1,y1] = lines[0].split(' ').map((item) => parseFloat(item));
var [x2,y2] = lines[1].split(' ').map((item) => parseFloat(item));

var distance = Math.sqrt((Math.pow(x2-x1,2))+(Math.pow(y2-y1,2)));

console.log(distance.toFixed(4));

```