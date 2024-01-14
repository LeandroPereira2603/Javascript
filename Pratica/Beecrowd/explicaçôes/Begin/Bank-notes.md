# Bank Notes 

**Level**: :star: :star: :star: :star:

**Solved:** ✓

**Resolution:** 🎯 improved 

In this problem you have to read an integer value and calculate the smallest possible number of banknotes in which the value may be decomposed. The possible banknotes are 100, 50, 20, 10, 5, 2 and 1. Print the read value and the list of banknotes.

**Input** 

The input file contains an integer value N (0 < N < 1000000).

**Output**

Print the read number and the minimum quantity of each necessary banknotes in Portuguese language, as the given example. Do not forget to print the end of line after each line, otherwise you will receive “Presentation Error”.

| Input Sample |	Output Sample |
|:--:|:--|
| 576 | 576 <br> 5 nota(s) de R$ 100,00 <br> 1 nota(s) de R$ 50,00 <br> 1 nota(s) de R$ 20,00 <br> 0 nota(s) de R$ 10,00 <br> 1 nota(s) de R$ 5,00 <br> 0 nota(s) de R$ 2,00 <br> 1 nota(s) de R$ 1,00|
| 11257 | 11257 <br> 112 nota(s) de R$ 100,00 <br> 1 nota(s) de R$ 50,00 <br> 0 nota(s) de R$ 20,00 <br> 0 nota(s) de R$ 10,00 <br> 1 nota(s) de R$ 5,00 <br> 1 nota(s) de R$ 2,00 <br> 0 nota(s) de R$ 1,00 |
| 503 | 503 <br> 5 nota(s) de R$ 100,00 <br> 0 nota(s) de R$ 50,00 <br> 0 nota(s) de R$ 20,00 <br> 0 nota(s) de R$ 10,00 <br> 0 nota(s) de R$ 5,00 <br> 1 nota(s) de R$ 2,00 <br> 1 nota(s) de R$ 1,00 <br> | 

# For beecrowd 


```javascript 

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */


var valor_total = lines[0];

const notasDisponiveis = [100, 50, 20, 10, 5, 2 ,1];

function quantidadeNota (valor , nota) {

  var result = Math.floor((valor/nota));

return result ;

}

function quantidadesPorNotas(valor,notas){
  
  const listaNota = notas.map(nota => {
  const  quantidade = quantidadeNota(valor,nota);
  valor = valor - quantidade * nota ;
  return {nota,quantidade}

});

 return listaNota;
}

function MostrarNotasNecessarias (valor, notas ){
  const notasNecessarias = quantidadesPorNotas(valor,notas);

console.log(valor_total);  

 notasNecessarias.forEach(({quantidade,nota}) => {
    
    console.log(quantidade+' nota(s) de R$ '+nota+',00');

   });
}
  MostrarNotasNecessarias(valor_total,notasDisponiveis);



```

# In VsCode 

<p> improving the resolution of the requested exercise, printing the three test outputs, </p>

```javascript 

var input = '576\n11257\n503';

var lines = input.split('\n');

var valor_total = lines[0];

const notasDisponiveis = [100, 50, 20, 10, 5, 2 ,1];

function quantidadeNota (valor , nota) {

  var result = Math.floor((valor/nota));

return result ;

}

function quantidadesPorNotas(valor,notas){
  
  const listaNota = notas.map(nota => {
  const  quantidade = quantidadeNota(valor,nota);
  valor = valor - quantidade * nota ;
  return {nota ,quantidade}

});

 return listaNota;

}

// example : not used the method lines.lenght()

for (var i =0; i<3;i++){
  
  if(i==1){
   var valor_total = lines[1];
  }

  else if(i==2){
   var valor_total = lines[2];
  }

  else if(i==3){
 var valor_total = lines[3];
  }

  else {
    var valor_total = lines[0];
  }
  
function MostrarNotasNecessarias (valor, notas ){
  const notasNecessarias = quantidadesPorNotas(valor,notas);

console.log(valor_total);  

 notasNecessarias.forEach(({quantidade,nota}) => {
    
    console.log(quantidade+' nota(s) de R$ '+nota+',00');

   });
}
  MostrarNotasNecessarias(valor_total,notasDisponiveis);
  
  console.log('\n');
  
}


```

<p> improving the resolution of the requested exercise, printing the three test outputs,with forEach </p>

```javascript 

var input = '576\n11257\n503';

var lines = input.split('\n');

var valor_total = lines[0];

const notasDisponiveis = [100, 50, 20, 10, 5, 2 ,1];

function quantidadeNota (valor , nota) {

  var result = Math.floor((valor/nota));

return result ;

}

function quantidadesPorNotas(valor,notas){
  
  const listaNota = notas.map(nota => {
  const  quantidade = quantidadeNota(valor,nota);
  valor = valor - quantidade * nota ;
  return {nota ,quantidade}

});

 return listaNota;

}

function MostrarNotasNecessarias (valor, notas ){
  const notasNecessarias = quantidadesPorNotas(valor,notas);

console.log(valor_total);  

 notasNecessarias.forEach(({quantidade,nota}) => {
    
    console.log(quantidade+' nota(s) de R$ '+nota+',00');

   });
}

\\ example with forEach()

 lines.forEach((item) => {
   
 
 MostrarNotasNecessarias(item,notasDisponiveis);
  
  console.log('\n');
  
  
});


```