## URI : 1

<p> Read 2 variables, named A and B and make the sum of these two variables, assigning its result to the variable X. Print X as shown below. Print endline after the result otherwise you will get “Presentation Error”.

<!--
leia 2 variáveis , com o nome a e b e faça a soma das duas variáveis , colocando este resultado para a variavel x , imprima x com shown below , imprima o fim da linha depois o resultado otherwise voce vai pegar a presentação de erro . -->

Input
The input file will contain 2 integer numbers.

<!--
entrada 
a entrada do arquivo vai conter 2 números inteiros .-->

Output
Print the letter X (uppercase) with a blank space before and after the equal signal followed by the value of X, according to the following example.

<!--
Saida 
imprima a letra x ( maiusculo ) com um espaço em branco antes e depois o sinal de igual followed do valor de X , seguindo de acordo com o exemplo .
-->

Obs.: don't forget the endline after all.

Obs : Não esqueça o final da linha depois de tudo .


```javascript 


var input = require('fs').readFileSync('/dev/stdin','utf8');

var lines = input.split('\n');


var a = parseInt(lines.shift());
var b = parseInt(lines.shift());

var x = ('X = '+(a+b));


```