/*
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
|2.00 | A=12.5664 |
| 100.64 | A=31819.3103 |
| 150.00 | A=70685.7750 |

*/


/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 *the Calculate of circuference of a circle  is : π x R² 
 */

var r = parseFloat(prompt("Digite um valor "));



var a = ('A = '+3.141592653589793*Math.pow(r,2).toFixed(4));

//var a = ('A = '+3.141592653589793*(r*r));


console.log(a);




/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 *the Calculate of circuference of a circle  is : π x R² 
 */

 /*

var r = parseFloat(lines.split());

var a = ('A = '+3.141592653589793*Math.pow(r,2).toFixed(4).shift());


var a = ('A = '+(3.14159*(r.toFixed(4)*r.toFixed(4))));

//other : 

var a = ('A = '+(3.14159*Math.pow(r,2).toFixed(4).shift()));

//other : 



*/