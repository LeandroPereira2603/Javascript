
# Average 
**Solved :** ✓

<p> Read two floating points' values of double precision A and B, corresponding to two student's grades. After this, calculate the student's average, considering that grade A has weight 3.5 and B has weight 7.5. Each grade can be from zero to ten, always with one digit after the decimal point. Don’t forget to print the end of line after the result, otherwise you will receive “Presentation Error”. Don’t forget the space before and after the equal sign.</p>

<p><strong>Input</strong> <br> <br>
The input file contains 2 floating points' values with one digit after the decimal point. </p>

<p> <strong> Output </strong> <br> <br>
Print the message "MEDIA"(average in Portuguese) and the student's average according to the following example, with 5 digits after the decimal point and with a blank space before and after the equal signal.</p>


|Input Samples	|Output Samples|
|:--:|:--:|
| 5.0  7.1  | MEDIA = 6.43182 |
| 0.0  7.1  | MEDIA = 4.84091 |
| 10.0 10.0 | MEDIA = 10.00000 |

```javascript


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = parseFloat(lines.shift('\n'));
var b = parseFloat(lines.shift('\n'));


var media = (3.5 * a + 7.5 * b) / (3.5 + 7.5);

console.log ('MEDIA = '+media.toFixed(5));

```
<!--

**Resumo :**
<p>
Este algoritmo e para encontrar a média ponderada da grade curricular das notas dos estudantes referente ao peso de duas notas  , O peso da grade (sala) A = 3.5 , ou seja vários alunos tiram a nota 3.5 e o peso da grade  B = 7.5, ou seja vários alunos tiraram 7.5 </p>
<p>
As notas dos alunos de entrada é avaliada de 0 á 10 com um um digito decimal , e o algoritmo fazera o cálulo com os pessos A = 3.5 e B = 7.5 ,que e de acordo com os números informada correspondente ao sistema programado , inseridas no input no exemplo tabela acima : .</p>




3.5 (peso) * input (nota) + 7.5 (peso) * input (nota) / ( 3.5 + 7.5 ) ;

-->