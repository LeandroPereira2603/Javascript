# To Carry or not to Carry

<!-- Carregar ou não carregar -->

**Level :** :star: :star: :star: :star: :star:

**Solved:** not

<div align="center"; >
<img  src="https://resources.beecrowd.com.br/gallery/images/problems/UOJ_1026.png">
</div> <br>

Look at, Mofiz worked hard throughout his Digital Logic course, but when he was asked to implement a 32 bit adder for the laboratory exam, he did some mistake in the design part. After scavenging the design for half an hour, he found his flaw!! He was doing bitwise addition but his carry bit always had zero output. Thus,

<!-- olhando para , Mofiz trabalhou duro por muito tempo seu cursor de lógica digital , mas quando ele foi perguntado para implementar um 32 bit adicionador para o exame do laboratório , ele fez algo de errado a parte de design . depois mudando o design para meia hora , ele encontrou sua falha !! ele foi fazer outro bit adicionando mas seu transporte bit sempre teve saida zero , portanto .
-->


 4  = 00000000 00000000 00000000 00000100 <br>
+6  = 00000000 00000000 00000000 00000110 <br>
.   . ---------------------------------------- <br>
 2  = 00000000 00000000 00000000 00000010 <br>

<p> It’s a good thing that he finally found his mistake, but it was too late. Considering his effort throughout the course, the instructor gave him one more chance. Mofiz had to write an efficient program that would take 2 unsigned 32 bit decimal numbers as input, and produce an unsigned 32 bit decimal number as the output adding in the same way as his circuit does.
</p>

<!-- É algo bom que ele finalmente encontrou este rro , mas e era também tarde . Considerando este esforço muito tempo o cursor. o instrutor deu a ele um e mais chances .Mofiz para escrever um número decimal com a entrada , e produze um sem sinal de 32 bit número decimal com outra saida adicionados em da mesma maneira com o circuito dele faz . -->

**Input**

In each input line there will be a pair of integer separated by a single space. Input ends at EOF.

<!-- em cada linha de saida ele vai ser um par de inteiros separado de um espaço sozinho . fim de saidas para EOF. -->

**Output**

<p> For each input line, the program must provide an output's line: the value after adding the two numbers in the "Mofiz way". </p>

<!-- para cada linha de saida , o programa deve prover uma outra linha de saida : o valor depois adiciona os dois números em o " maneira Mofiz " -->

|Input Sample	|Output Sample|
|:--|:--|
| 4 6 |  2 |
| 6 9 | 15 |


```javascript
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
```

