## I.M.C

* Algoritmo que calcule o I.M.C  , sendo informada pelo usúario o peso e altura, mostrando o grau que esta no resultado de acordo com a tabela abaixo .


|Peso (kg) | IMC |
|:--:|:--:|
| < 18,5kg/m2 | Baixo peso |
| > 18,5 até 24,9kg/m2 | Eutrofia - peso adequado |
| ≥ 25 até 29,9kg/m2 até 34,9kg/m2 | Sobrepeso |
| > 30,0kg/m2 até 34,9km/m2 | Obesidade grau |

```javascript

var kg = parseDouble(prompt("Digite qual é o seu peso : "));

var alt = parseDouble(prompt("Digite a sua altura :"));

var imc = kg / ( alt * alt ) ; 

if ( imc < 18,5 ) }

 console.log (" IMC = "+imc+" ( baixo peso ) ");

else if ( imc > 18,6 && imc < 24,9 ) {

 console.log (" IMC = "+imc+" ( peso adequado ) ");

}

else if ( imc >=25 && imc < 34,9 ) {

 console.log (" IMC = "+imc+" ( sobrepeso ) ");

}

else if ( imc > 30  && < 34,9 } {

console.log (" IMC = "+imc+" ( Obesidade grau 1 )");

}

else {

 console.log(" "+imc+" : este resultado não tem na descrição da tabela I.M.C ");

}


```

### Exemplo com função 

<p> o peso e altura ja programado para o resultádo , com objeto criado pessoa .  </p>

```javascript 



function calculoImc ( peso , alt ) {

var result = '';
var imc = kg / ( alt * alt ) ; 

if ( imc < 18,5 ) }

var result = console.log (" IMC = "+imc+" ( baixo peso ) ");

else if ( imc > 18,6 && imc < 24,9 ) {

 var result = console.log (" IMC = "+imc+" ( peso adequado ) ");

}

else if ( imc >=25 && imc < 34,9 ) {

 var result =console.log (" IMC = "+imc+" ( sobrepeso ) ");

}

else if ( imc > 30  && < 34,9 } {

var result = console.log (" IMC = "+imc+" ( Obesidade grau 1 )");

}

else {

 var result = console.log(" "+imc+" : este resultado não tem na descrição da tabela I.M.C ");

}

return result ;

}

\\ criando objeto pessoa com chave

var const pessoa = {

'nome' : 'Leandro',
'altura' : '1.58',
'peso' : 62 

}

var altLeandro = pessoa.['altura'];

var pesoLeandro = pessoa ['peso'];


calculoIMc(altLeandro, pesoLeandro ; 



```
