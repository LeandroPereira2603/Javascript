# Calculo para insulina 

* Cada ml equivale a 100 unidade de insulina .
* Frasco de ampola de insulina tem  10 mls .


| ML | UI | 
|:-:|:-:| 
| 1 | 100 | 
| 0.01 | 1 | 


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

#### Output :

| UI | ML |
|:-:|:-:|
| 5000 | 5 |
| 4300 | 43 |