
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

var a = parseFloat(lines.shift('\n'));
var b = parseFloat(lines.shift('\n'));


var media = (3.5 * a + 7.5 * b) / (3.5 + 7.5);

console.log ('MEDIA = '+media.toFixed(5));

```

**Resumo :**

Este algoritmo e para encontrar a média ponderada das notas dos alunos  ,colocando um exemplo de peso  da grade  A 3.5 e o peso da grade B 7.5  , a nota e avaliada de 0 á 10 , fazer a média ponderada  das duas notas correspondente .

This algoritm and for found the avarege of note of student's , a example : with the weight of grade A 3.5 , the with weight grade 7.5 , the note and avaliable of zero the ten , make the averange of two notes corresponding .


3.5 (peso) * input (nota) + 7.5 (peso) * input (nota) / ( 3.5 + 7.5 ) ;

