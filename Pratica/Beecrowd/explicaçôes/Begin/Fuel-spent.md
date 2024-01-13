# Fuel spent 

**Level:** :star:
**Solved** : Not 

Little John wants to calculate and show the amount of spent fuel liters on a trip, using a car that does 12 Km/L. For this, he would like you to help him through a simple program. To perform the calculation, you have to read spent time (in hours) and the same average speed (km/h). In this way, you can get distance and then, calculate how many liters would be needed. Show the value with three decimal places after the point.

<!-- Little John precisa para calcular e mostrar a quantia de litros de gasolina na estrada . usando o carro fazendo 12 km/L . Para isto , ele gostaria de sua ajuda ele pensando num simples  programa . Para performance e calculação , vcs tem que ler o tempo (em horas) e o mesma velocidade (km/l) .Este sempre , você pode ter a distância e então , calcular com muitos litros que precisar.Mostre o valor com três decimal lugar depois do ponto -->

**Input** 

The input file contains two integers. The first one is the spent time in the trip (in hours). The second one is the average speed during the trip (in Km/h).

<!-- A entrada do arquivo , contém dois inteiros .A primeira o tempo na hora .E segundo e a média de velocidade de duração na estrada (em km/h) --> 

**Output**

Print how many liters would be needed to do this trip, with three digits after the decimal point.

Imprima como muitos litros vai precisar para esta estrada , com três dígitos depois do decimal ponto .

| Input Sample |	Output Sample |
|:--:|:--:|
| 10 <br> 85 | 70.833 |
| 2 <br> 92  | 15.333 |
| 22 <br> 67 | 122.833|

## In beecrowd 

```javascript

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var [hour,km] = lines[0].split(' ').map((item) => parseInt(item));

var media = hour * km / 12 ;

console.log(media);

```

## In VsCode

```javascript 

input = '10 85';
lines = input.split('\n');

var [hour,km] = lines[0].split(' ').map((item) => parseInt(item));

var media = hour * km / 12 ;

console.log(media);

```