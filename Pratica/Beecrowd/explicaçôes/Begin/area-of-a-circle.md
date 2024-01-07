# Area of a Circle

<strong>Level : 4 </strong> :star: :star: :star: :star:

**Sovled** : ✓

<p> The formula to calculate the area of a circumference is defined as A = π . R2. Considering to this problem that π = 3.14159: </p>

<!-- A fórmula para calcular a area de uma circuferência é definida com A = pi . R2 . considerando para este problema que pi = 3.14159 : --

<p> Calculate the area using the formula given in the problem description.</p>

<!-- Calcule a area usando a fórmula  given  na descrição do problema --

### Input

<!-- entrada -->

<p>
The input contains a value of floating point (double precision), that is the variable R.  </p>

<!-- A entrada contendo um valor de ponto flutuante (presição Double), que é a variável R . -->

### Output

<!-- saida -->

<p>
Present the message "A=" followed by the value of the variable, as in the example bellow, with four places after the decimal point. Use all double precision variables. Like all the problems, don't forget to print the end of line after the result, otherwise you will receive "Presentation Error".</p>

<!-- Apresente a mensagem "A=" sequindo do valor da variável , como no exemplo abaixo , com quatro lugares (llp : ou seja casa decimais) depois o ponto decimal .Usa todos os double variáveis de precisão . Like all os problemas , não esqueça para imprimir o fim da linha depois o resultado , othetwise voce vai receber " Apresentação erro ". -->


| Input Samples	| Output Samples |
|:--:|:--:|
| 2.00 | A = 12.5664 |
| 100.64 | A = 31819.3103 |
| 150.00 | A = 70685.7750 |

```javascript 

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var r = parseFloat(lines.shift('\n'));

var a = 3.14159*Math.pow(r,2);

console.log('A='+a.toFixed(4));

/*

or

var a = ('A='+Math.PI*Math.pow(r,2).toFixed(4));
*/

```
