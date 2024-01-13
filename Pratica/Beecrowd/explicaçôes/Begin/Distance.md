# Distance

**Level:** :star:

**Solved:** ✓

**🎯:** First try 


Two cars (X and Y) leave in the same direction. The car X leaves with a constant speed of 60 km/h and the car Y leaves with a constant speed of 90 km / h.

<!-- Dois carros (x e y) Ganha a mesma direção . O carro x leva com uma constante velocidade de 60 km/h e o carro y leva com uma constante velocidade de 90 km / h .-->

In one hour (60 minutes) the car Y can get a distance of 30 kilometers from the X car, in other words, it can get away one kilometer for each 2 minutes.

<!-- Em uma hora (60 minutos) o carro y pode ter uma distância de 30 kilometros do carro x , em outras palavras , pode sempre ter um kilometros para cada 2 minutos. -->

Read the distance (in km) and calculate how long it takes (in minutes) for the car Y to take this distance in relation to the other car.

<-- leia a distância em km e calcule como obter longa em minutos para o carro y para ter esta distância em relaçáo para o outro carro.
-->

**Input**

The input file contains 1 integer value.

a entrada do arquivo contém 1 valor de inteiro.

**Output**

Print the necessary time followed by the message "minutos" that means minutes in Portuguese.

| Input Sample	| Output Sample |
|:--:|:--:|
| 30  | 60 minutos |
| 110 | 220 minutos |
| 7 | 14 minutos |

## For beecrowd

```javascript 

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var minutes = parseInt(lines.shift('\n'));

console.log(minutes*2+" minutos");


```

## In VsCode 

```javascript 

var input = '30';
var lines = input.split('\n');

var minutes = parseInt(lines.shift('\n'));

console.log(minutes*2+" minutos");
 
```