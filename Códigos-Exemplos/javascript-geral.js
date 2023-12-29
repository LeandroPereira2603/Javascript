
// primeiro código

var msg = console.log("Hello , world !!");
alert(msg);

// Declaração de variáveis 

var n = 50 ;
var y = 33 ;
var x = 4.3;
var nome ="leandro ";
var bolean = true ;
var peso = 10.23 ;
var caractere = 'a';

// Operadores aritméticos 

console.log("Operadores Aritméticos");

var soma = n + y ;

console.log(" Soma de "+n+" + "+y+" = "+soma);

var sub = n - y ;

console.log(" Subtração de "+n+" - "+y+" = "+sub);

var div = n / y ;

console.log(" Divisão de "+n+" / "+y+" = "+sub);

var mod = n % 2  ;

console.log(" Resto da divisão de "+n+" / 2 é  = "+mod);

// Operadores lógico 

console.log (" "+x+" é maior que "+y+" ? ´");

if(x > y){
    console.log ("Verdadeiro");
}
else{
    console.log ("falso");
}

console.log (" "+x+" é menor que "+y+" ? ´");

if(x < y){
    console.log ("Verdadeiro");
}
else{
    console.log ("falso");
}

console.log (" "+x+" é menor ou igual que "+y+" ? ´");

if(x <= y){
    console.log ("Verdadeiro");
}
else{
    console.log ("falso");
}

console.log (" "+x+" é maior ou igual que "+y+" ? ´");

if(x >= y){
    console.log ("Verdadeiro");
}
else{
    console.log ("falso");
}

console.log (" "+x+" diferente do que "+y+" ? ´");

if(x != y){
    console.log ("Verdadeiro");
}
else{
    console.log ("falso");
}

// verificar se é par ou immpar

if(n % 2==0){
 
 console.log(" o "+n+" divido por 2 o resto da divisão é 0 então é  par");
}
else{
    console.log("o "+n+" divido por 2 o resto da divisão não é 0 então e impar");
}

if(y % 3 == 0 ){
    console.log("o "+y+" divido por 2 o resto da divisão não é 0 então e impar");
}
else{
    console.log(" o "+y+" divido por 2 o resto da divisão é 0 então é  par");
}






// um dos meus prediiletos são a utilização do for , exemplo :
// Este algoritmo vai mostrar todas as tabuadas do 0 até o número que o usuario digitar 
var c = prompt("Digite o número máximo de tabuadas que deseja visualizar ");
c++;
var n = 0;
for (var k=0 ;k<c;k++){ 
 for (var i = 0 ; i<11;i++){
  var result = n * i ;
   console.log(" "+n+" x "+i+" = "+result);
  }
  n++;
 }