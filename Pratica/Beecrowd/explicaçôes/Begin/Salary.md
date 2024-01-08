# Salary 

**Level:** :star: :star:

**Solved:** ✓

<p>
Write a program that reads an employee's number, his/her worked hours number in a month and the amount he received per hour. Print the employee's number and salary that he/she will receive at end of the month, with two decimal places. </p>

<!-- Escreva um programa que leia um númeroa de empregados ele/ela horas trabalhdos em número de um  mês e a quantia dele recebido por horas . Imprima o númeroa do sálario que ele/ela vai receber com o do mês , com duas casas decimais . -->

<p>
Don’t forget to print the line's end after the result, otherwise you will receive “Presentation Error”.

<p>
Don’t forget the space before and after the equal signal and after the U$. </p>

<!-- Não esqueça de imprimir o fim da linha depois do resultado , de outra forma vai receber " Apresentação de erro ".

Não esqueça o espaço antes e depois o sinal da virgula e depois o U$ 
-->


**Input**

<p>
The input file contains 2 integer numbers and 1 value of floating point, representing the number, worked hours amount and the amount the employee receives per worked hour. </p>

<!-- A entrada do arquivo contém 2 números inteiros e 1 valor de ponto flutuante ,representando o número ,a quantia de horas trabalhados  e a quantia dos funcionários recebidos por horas trabalhados. -->


**Output**

<p>
Print the number and the employee's salary, according to the given example, with a blank space before and after the equal signal.</p>

<!--

Imprima o número e o salário dos funcionarios , de acordo ao exemplo dado , com um espaço antes e depois do sinal de virgula

 -->

| Input Samples |	Output Samples |
|:--|:--|
| 25 <br> 100 <br> 5.50 | NUMBER = 25 <br> SALARY = U$ 550.00 |
|1 <br> 200 <br> 20.50 | NUMBER = 1 <br> SALARY = U$ 4100.00
| 6 <br> 145 <br> 15.55 |NUMBER = 6 <br> SALARY = U$ 2254.75 |

```javascript

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var number = parseInt(lines.shift('\n'));
var amount = parseInt(lines.shift('\n'));
var hour = parseFloat(lines.shift('\n'));

console.log('NUMBER = '+number);
console.log('SALARY = U$ '+(amount * hour).toFixed(2));


```