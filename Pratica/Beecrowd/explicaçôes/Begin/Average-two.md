
## Average 2 

**Level:** :star:

**Solved:** ✓

<p>
Read three values (variables A, B and C), which are the three student's grades. Then, calculate the average, considering that grade A has weight 2, grade B has weight 3 and the grade C has weight 5. Consider that each grade can go from 0 to 10.0, always with one decimal place.</p>

<!--
Leia três valores ( Valores a , b ,e c ) são escolhas de três estudantes de grades . então , calculando a média, considerado que a grade A tem 2 pessos , grade B tem três pessos e a sala c tem 5 pessos , considerando que cada grade pode ir de 0 para 10.0, senpre com uma casa decimal . -->

**Input**

<p>
The input file contains 3 values of floating points (double) with one digit after the decimal point.</p>

<!--
a entrada  do arquivo contem 3 valores flutuantes (Double) com um digito depois o ponto decimal .

-->

**Output**

<p>
Print the message "MEDIA"(average in Portuguese) and the student's average according to the following example, with a blank space before and after the equal signal. </p>

<!--
imprima a mensagem media ( media em portugues ) 
e a media dos estudantes de acordo com exemplo mostrado , com um espaço em branco antes e depois do sinal de igual. 

-->



| Input Samples	| Output Samples|
|:--:|:--:|
| 5.0  6.0  7.0  |  MEDIA = 6.3
| 5.0  10.0 10.0 |  MEDIA = 9.0
| 10.0 10.0 5.0 |  MEDIA = 7.5 |

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

var media = ( a * 2 + b * 3 + c * 5 ) / ( 2 + 3 + 5 );

console.log('MEDIA = '+media.toFixed(1));

```

> [!Warning]
> 





