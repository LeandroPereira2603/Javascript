# Simple sum

**Level:** :star:

**Solved:** ✓

<p> Read two integer values, in this case, the variables A and B. After this, calculate the sum between them and assign it to the variable SOMA. Write the value of this variable.</p>

<!-- Leia dois valores dos números , neste caso , a variável A e B . depois disto , calcule a soma entre them e assign it para a variável soma .
escreva o valor desta variavél .


<strong> Input </strong>

<!-- Entrada -->

<p> The input file contains 2 integer numbers.</p>

<!-- A entrada do arquivo contém 2 números inteiros -->

<strong> Output </strong>

<!-- Saida -->

<p> Print the message "SOMA" with all the capital letters, with a blank space before and after the equal signal followed by the corresponding value to the sum of A and B. Like all the problems, don't forget to print the end of line, otherwise you will receive "Presentation Error" </p>

<!-- Imprima a mensagem "SOMA" com toda o capital das letras com um espaço em branco antes e depois o sinal de igual seguindo o correspondende para o valor a soma de A e B . Like todo o problema, não esqueça para imprimir a fim da linha , otherwise voce vai receber "Apresentação de erro" -->


| Input Samples |  Output Samples |
|:--:|:--:|
|30 10 | SOMA = 40 |
|-30 10 | SOMA = -20 |
|0 0 | SOMA = 0 |

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

var soma = a+b;

console.log('SOMA = '+soma);


```
