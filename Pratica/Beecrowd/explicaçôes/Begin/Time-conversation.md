# Time conversation 

**Level:** :star:

**Solved:** ✓

Read an integer value, which is the duration in seconds of a certain event in a factory, and inform it expressed in hours : minutes : seconds .

**Input**

The input file contains an integer N.

**Output** 

Print the read time in the input file (seconds) converted in hours:minutes:seconds like the following example.

| Input Sample	| Output Sample |
|:--:|:--:|
|556 | 0:9:16 |
|1 | 0:0:1 |
| 140153 | 38:55:53 |

## For beecrowd ❌

```javascript

var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var lines = input.split('\n');

var totalSegundos  = lines[0];

var qtdHora = totalSegundos / 3600 ;
totalSegundos = totalSegundos % 3600;

var qtdMinutos = totalSegundos / 60;
var totalSegundos = totalSegundos % 60;

var qtdSegundos = totalSegundos;

console.log(Math.floor(qtdHora)+":"+Math.floor(qtdMinutos)+":"+Math.floor(totalSegundos));

```

## In VsCode ✓

```javascript 

input = '556';
lines = input.split('\n');

totalSegundos = lines[0];

function conversorSegundos(segundos,tipo){
 
const conversao = {
   
  hora : 3600,
  minuto : 60,
  segundo : 1

}
  const quantidade = (Math.floor(segundos / conversao[tipo]));
  input = '905';
lines = input.split('\n');


var totalSegundos  = lines[0];

var qtdHora = totalSegundos / 3600 ;
totalSegundos = totalSegundos % 3600;

var qtdMinutos = totalSegundos / 60;
var totalSegundos = totalSegundos % 60;

var qtdSegundos = totalSegundos;

console.log(" "+Math.floor(qtdHora)+":"+Math.floor(qtdMinutos)+":"+totalSegundos);
totalSegundos = totalSegundos % 3600;

var qtdMinutos = totalSegundos / 60;
var totalSegundos = totalSegundos % 60;

var qtdSegundos = totalSegundos;

console.log(" "+Math.floor(qtdHora)+":"+Math.floor(qtdMinutos)+":"+totalSegundos);
totalSegundos = totalSegundos % 3600;

var qtdMinutos = totalSegundos / 60;
var totalSegundos = totalSegundos % 60;

var qtdSegundos = totalSegundos;

console.log(" "+Math.floor(qtdHora)+":"+Math.floor(qtdMinutos)+":"+totalSegundos);

var qtdMinutos = totalSegundos / 60;
var totalSegundos = totalSegundos % 60;

var qtdSegundos = totalSegundos;

console.log(" "+Math.floor(qtdHora)+":"+Math.floor(qtdMinutos)+":"+totalSegundos);
  const horas = conversorSegundos(segundos,'hora');
  const minutos = conversorSegundos(horas.restoSegundos,'minuto');
  
  return (" "+horas.quantidade+":"+minutos.quantidade+":"+minutos.restoSegundos);
  
}

console.log(formatarHora(totalSegundos));

```
