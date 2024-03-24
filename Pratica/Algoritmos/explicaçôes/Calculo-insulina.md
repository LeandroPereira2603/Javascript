# Calculo para insulina 

* Cada ml equivale a 100 unidade de insulina .
* O frasco de ampola de insulina tem  10 mls .


| ML | UI | 
|:-:|:-:| 
| 1 | 100 | 
| 0.01 | 1 | 

#### Exemplo : 

```javascript 

console.log ('Conversão de calculo para a insulina ');

var ml = 5;

var ui = ml * 100 ;

console.log('Insulina : '+ml+' ml equivale a '+ui+' ui');

var ui = 4300;

var ml = ui / 100 ;

console.log('Insulina : '+ui+' ui equivale '+ml+' ml ');

console.log('Simulação : a receita pede 6.556 ui , quantas frascos vai dispensar para o cliente ? '); 

console.log('Resposta : o total deverá ser 65,5 mls então tem que dispensar 7 frascos '); 

```

#### Output:

Resultado da saída do cálculo .

| UI | ML |
|:-:|:-:|
| 5000 | 5 |
| 4300 | 43 |


# Cálculos de conversão de gotas para ml

| gotas | ml |
|:-:|:-:| 
| 20 | 1 | 

Cada ml equivale a 20 gotas .

O padrão é este modelo , mas existe alguns frascos especifico que tem abertura um pouco menor ,aí  varia de fabricação do laboratório , pode ter a quantidade de 26 a 27 gotas cada ml , mas geralmente informa na embalagem , quando e diferente do padrão  .

#### Exemplo : 

```javascript 

console.log('Suposição : O cliente tem que tomar no total do tratamento com 60 gotas , o frasco tem 2 mls quantos frascos vai ter que dispensar para o cliente ? ');

console.log('Resposta : 2 frascos '); 

var gotasTotais = 60 ; 

var ml = 20 ; 

var result = gotasTotais / ml ; 

console.log('\nTotal de gotas : '+gotasTotais);

console.log('Total de mls : '+result);







```
