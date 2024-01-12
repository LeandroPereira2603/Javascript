
# Area 

**Level:** :star: :star:

**Solved:** not

Make a program that reads three floating point values: A, B and C. Then, calculate and show:
a) the area of the rectangled triangle that has base A and height C.
b) the area of the radius's circle C. (pi = 3.14159)
c) the area of the trapezium which has A and B by base, and C by height.
d) the area of ​​the square that has side B.
e) the area of the rectangle that has sides A and B.

**Input**

The input file contains three double values with one digit after the decimal point.

**Output**

The output file must contain 5 lines of data. Each line corresponds to one of the areas described above, always with a corresponding message (in Portuguese) and one space between the two points and the value. The value calculated must be presented with 3 digits after the decimal point.

|Input Samples |	Output Samples|
|:--:|:--|
|3.0 4.0 5.2 | TRIANGULO: 7.800 <br> CIRCULO: 84.949 <br>  TRAPEZIO: 18.200  <br> QUADRADO: 16.000 <br> RETANGULO: 12.000 <br> |
| 12.7 10.4 15.2  |<br> TRIANGULO: 96.520 <br> CIRCULO: 725.833 <br> TRAPEZIO: 175.560 <br>  QUADRADO: 108.160 <br> RETANGULO: 132.080 |

## Code for beecrowd : 

```javascript 


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var a = parseFloat(lines.shift('\n'));
var b = parseFloat(lines.shift('\n'));
var c = parseFloat(lines.shift('\n'));

var triangle_result = a * c / 2;
var radius_result = 3.14159 * Math.pow(c,2);
var trapezium_result = (a + b) * c / 2;
var square_result = Math.pow(b,2);
var rectangle_result = a * b;

console.log("TRIANGULO: "+triangle_result.toFixed(3)+"\nCIRCULO: "+radius_result.toFixed(3)+"\nTRAPEZIO: "+trapezium_result.toFixed(3)+"\nQUADRADO: "+square_result.toFixed(3)+"\nRETANGULO: "+rectangle_result.toFixed(3));

console.log("TRIANGULO: "+triangle_result.toFixed(3));
console.log("CIRCULO: "+radius_result.toFixed(3));
console.log("TRAPEZIO: "+trapezium_result.toFixed(3));
console.log("QUADRADO: "+square_result.toFixed(3));
console.log("RETANGULO: "+rectangle_result.toFixed(3));

```

## Code for VsCode :


```javascript 

var input='3.0\n4.0\n5.2';
var lines = input.split('\n');

var a = parseFloat(lines.shift('\n'));
var b = parseFloat(lines.shift('\n'));
var c = parseFloat(lines.shift('\n'));

var triangle = [] ;
var radius = [];
var trapezium = [];
var square = []
var rectangle = [];

triangle.push(a,b,c);
radius.push(a,b,c);
trapezium.push(a,b,c);
square.push(a,b,c);
rectangle.push(a,b,c);

var triangle_result = triangle[0] * triangle[2] / 2;
var radius_result = 3.14159 * Math.pow(rectangle[2],2);
var trapezium_result = (trapezium[0] + trapezium[1]) *trapezium[2]/2;
var square_result = Math.pow(square[1],2);
var rectangle_result = rectangle[0] * rectangle[1];

console.log("TRIANGULO: "+triangle_result.toFixed(3));
console.log("CIRCULO: "+radius_result.toFixed(3));
console.log("TRAPEZIO: "+trapezium_result.toFixed(3));
console.log("QUADRADO: "+square_result.toFixed(3));
console.log("RETANGULO: "+rectangle_result.toFixed(3));

```
