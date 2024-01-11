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


var product_1 = lines[0].split('');
var product_2 = lines[1].split('');

var product_1_code = Number(product_1[0]);
var product_1_quantity = Number(product_1[1]);
var product_1_price = Number(product_1[2]);

var product_2_code = Number(product_2[0]);
var product_2_quantity = Number(product_2[1]);
var product_2_price = Number(product_2[2]);

var total = (product_1_quantity * product_1_price) + (product_2_quantity * product_2_price );

console.log("Valor a pagar: R$ "+total.toFixed(2));





```