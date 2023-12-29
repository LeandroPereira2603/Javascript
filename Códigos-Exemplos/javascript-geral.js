
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

// Interpolação de variável 
var inseto = "Butterfly";
var cor = "Azul";

console.log(" Uma "+inseto+" da cor "+cor);

// Concatenação de variável 

var nome ="Leandro"
var sobrenome ="Pereira ";
var nomeCompleto = nome = sobrenome ;

console.log(nomeCompleto);





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







####.            Testa depois.               ######


// Desvio condicional if 

var caminhoA = 1;
var caminhoB = 2;
var caminhoC = 3 ;


/* Vamos supor um exemplo , um carro esta indo a uma direção só que entra numa cruzilhada , que tem possibilidade de três caminhos diferentes a  esquerda , direita , e reta , na lógica , pelo percuso que vai chegar mais rápido e a reta , so que tem um problema no meio do percuso de uma das rotas tem um atalho para mudar o percuso , e outro e uma rua sem saida , crie a lógica  com a escolha do úsuario e que mostra qual e o destino mais rápido , e mostre qual o caminho final ele escolgeu  */

var escolha = prompt(" Digite o camilho que deseja escolher 1 ( esquerda ) 2 ( reta ) 3 (direita ) ") ; 

swicht(escolha) {

case 1 : 

console.log(" E o caminho mais longo , rua sem saída  ") ; 

case 2 : 
 console.log("ops , voce escolheu o caminho com atalho ");

end;

case 3 :
 console.log(" E o caminho mais rápido ") ; 
   
default : 
  
 console.log("não existe este caminho ") ;

}

######.          testa depois.            ########









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