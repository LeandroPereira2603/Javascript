# Difference 

**Level:** :star:

**Solved;** ✓


<p> Read four integer values named A, B, C and D. Calculate and print the difference of product A and B by the product of C and D (A * B - C * D). </p>

**Input**

<p>
The input file contains 4 integer values.</p>


**Output**

<p>
Print DIFERENCA (DIFFERENCE in Portuguese) with all the capital letters, according to the following example, with a blank space before and after the equal signal. </p>

|Input Samples|	Output Samples|
|:--|:--:|
|5 6 7 8| DIFERENCA = -26 |
|0 0 7 8| DIFERENCA = -56 |
| 5 6 -7 8| DIFERENCA = 86 |


```javascript

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var a = parseInt(lines.shift('\n'));
var b = parseInt(lines.shift('\n'));
var c = parseInt(lines.shift('\n'));
var d = parseInt(lines.shift('\n'));

console.log('DIFERENCA = '+((a * b) - (c * d)));


```

