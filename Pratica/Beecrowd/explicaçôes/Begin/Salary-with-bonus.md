# Salary with bonus 

**Level:** :star: :star:

**Solved:** Not 


<p>
Make a program that reads a seller's name, his/her fixed salary and the sale's total made by himself/herself in the month (in money). Considering that this seller receives 15% over all products sold, write the final salary (total) of this seller at the end of the month , with two decimal places.
</p>

<p>
- Don’t forget to print the line's end after the result, otherwise you will receive “Presentation Error”.</p>

<p>
- Don’t forget the blank spaces.</p>


**Input** 

<p>
The input file contains a text (employee's first name), and two double precision values, that are the seller's salary and the total value sold by him/her.
</p>


**Output**

<p>
Print the seller's total salary, according to the given example.
</p>


| Input Samples | 	Output Samples |
|:--|:--|
| JOAO <br> 500.00 <br> 1230.30 |TOTAL = R$ 684.54
| PEDRO <br> 700.00 <br> 0.00 |TOTAL = R$ 700.00 |
| MANGOJATA <br >1700.00 <br>1230.50 |TOTAL = R$ 1884.58 |

```javascript 


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var name = lines.shift('\n');
var one = parseFloat(lines.shift('\n');
var Two = parseFloat(linea.shitf('\n');

consol.log("TOTAL = R$ '+((two/15)+one).toFixed(2));


//for the solved 
//solution
 
//15 porcent of values of variable 
//Two and variavle sum with the value One and print 

//15 % do valor da variavel two e soma com      
//variable one e  imprimir 


```