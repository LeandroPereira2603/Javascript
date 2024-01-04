## Tabuada 

* Algoritmo que mostra a tabuda e sua sequências máxima de multiplicação , sendo escolhida  pelo usúario  .


<p> Exemplo o usúario vai digitar : 2 e 33 , vai mostrar , a tabuada do 2 , com a sequência da multiplicação do 0 até o 33 . </p>

```javascript 

var t = parseInt(prompt("Digite o número da tabuada :"));

var s = parseInt(prompt("Digite o número de sequências maximas de multiplicação desta tabuada :"));

s++;

for (var i = 0;i<s;i++){

var result = t * i ; 

  console.log ( " "+t+" x "+i+" = "+result);

}

```