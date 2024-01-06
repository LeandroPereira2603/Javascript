## I.M.C

### Sobre a fórmula 

<p> <strong>Fórmula</strong> : kg / ( altura x altura ) </p>
<p> ou </p>
<p> <strong>Fórmula </strong> : kg / (altura²) </p>

### Tabela IMC
|Peso (kg) | IMC |
|:--:|:--:|
| < 18,5kg/m2 | Baixo peso |
| > 18,5 até 24,9kg/m2 | Eutrofia - peso adequado |
| ≥ 25 até 29,9kg/m2 | Sobrepeso |
| > 30,0kg/m2 até 34,9km/m2 | Obesidade grau 1 |

### Sobre o algoritmo 

<p>Algoritmo que calcule o I.M.C  , sendo informada pelo usúario o peso e altura, mostrando o grau que esta no resultado de acordo com a tabela abaixo .</p>

<p>O Usuário vai digitar o número , para o peso e altura , o sistema irá calcular e informar qual é o grau que esta de acordo com a medida da tabela do imc . </p>

### Código 

```javascript

var kg = parseFloat(prompt("Digite qual é o seu peso : "));

var alt = parseFloat(prompt("Digite a sua altura :"));

console.log("Cálculo com os dados iformados pelo usuário altura : "+alt+" peso : "+kg+" ");

var imc = kg / ( alt * alt ) ; 

if ( imc < 18.5 ) {

 console.log (" IMC = "+imc.toFixed(2)+" kg/m2 ( baixo peso ) ");
 
}

else if ( imc > 18.6 && imc < 24.9 ) {

 console.log (" IMC = "+imc.toFixed(2)+" kg/m2 ( peso adequado ) ");

}

else if ( imc >=25 && imc < 34.9 ) {

 console.log (" IMC = "+imc.toFixed(2)+" kg/m2 ( sobrepeso ) ");

}

else if( imc > 30  && imc < 34.9 ) {

console.log (" IMC = "+imc.toFixed(2)+" kg/m2 ( Obesidade grau 1 )");

}

else {

 console.log(" "+imc+" kg/m2 : este resultado não tem na descrição de grau do imc na tabela I.M.C ");

}


```

### Exemplo com função 

<p> o peso e altura ja programado para o resultado , com objeto criado pessoa .  </p>

```javascript 


function calculoImc ( kg , alt ) {

var result;

var imc = kg / ( alt * alt ) ; 

if ( imc < 18.5 ) {

var result = console.log (" IMC = "+imc.toFixed(2)+" kg/m2 ( baixo peso ) ");

}

else if ( imc > 18.6 && imc < 24.9 ) {

 var result = console.log (" IMC = "+imc.toFixed(2)+" kg/m2 ( peso adequado ) ");

}

else if ( imc >=25 && imc < 34.9 ) {

 var result =console.log (" IMC = "+imc.toFixed(2)+" kg/m2 ( sobrepeso ) ");

}

else if ( imc > 30  && imc < 34.9 ) {

var result = console.log (" IMC = "+imc.toFixed(2)+" kg/m2 ( Obesidade grau 1 )");

}

else {


console.log("");

console.log("Cálculo com oas dados ja estabelicido programado !! peso : 62 altura : 1.60 ");

}

return result ;

}

// criando objeto pessoa com chave

const pessoa = {

'nome' : 'Leandro',
'altura' : '1.60',
'peso' : 62 

}

var altLeandro = pessoa['altura'];

var pesoLeandro = pessoa ['peso'];


calculoImc(pesoLeandro ,altLeandro)  ; 


```
