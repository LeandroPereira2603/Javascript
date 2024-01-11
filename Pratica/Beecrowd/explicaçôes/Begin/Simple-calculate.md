# Simple calculate

**Level:** :star: :star: :star:

**Solved:** Not 

In this problem, the task is to read a code of a product 1, the number of units of product 1, the price for one unit of product 1, the code of a product 2, the number of units of product 2 and the price for one unit of product 2. After this, calculate and show the amount to be paid.

**Input**

The input file contains two lines of data. In each line there will be 3 values: two integers and a floating value with 2 digits after the decimal point.

**Output**

The output file must be a message like the following example where "Valor a pagar" means Value to Pay. Remember the space after ":" and after "R$" symbol. The value must be presented with 2 digits after the point.

|Input Samples|	Output Samples|
|:--|:--|
|12 1 5.30 <br> 16 2 5.10 | VALOR A PAGAR: R$ 15.50 |
|13 2 15.30 <br> 161 4 5.20|VALOR A PAGAR: R$ 51.40
|1 1 15.10 <br> 2 1 15.10 |VALOR A PAGAR: R$ 30.20 |

```javascript 

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var data = [];

var a = parseInt(lines.shift('\n'));
var b = parseInt(lines.shift('\n'));
var c = parseFloat(lines.shift('\n'));

// elemento vetor 0 lineOne , elemento vetor 1 lineTwo cada um com três índices 0,1,2 .

// Elemento array 0 lineOne , element Array 1 lineTwo each a with three index 0,1,2.

var lineOne = [a,b,c];
var lineTwo = [a,b,c];

// Inserindo os valores no vetor data, formando uma matriz .

// Insert the values in array data , 

data.push(lineOne);
data.push(lineTwo);

// calculando os valores dentro de uma matriz .

// Calcule the values 

//var result = (data[0],[1] * data[0],[2]) + 
//(data[1],[1] * data[1],[2]);

// imprimindo imformações do resultado 

// print information the result .

//console.log("Valor a pagar : 
//R$ "+result.toFixed(2));

console.log("Valor a pagar : R$ "+((data[0],[1] * data[0],[2]) + (data[1],[1] * data[1],[2])).toFixed(2));




/*

// ou 

var a , b = parseInt(lines.shift('\n');
var c = parseFloat(lines.shift('\n');
var d = 
var e = 
var f = 

var data = (b * c) +( e * f);

console.log


*/


```