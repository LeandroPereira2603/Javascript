
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

var calc = n + y ;

console.log(" "+n+" + "+y+" = "+calc);

var calc = n - y ;

console.log(" "+n+" - "+y+" = "+calc);

var calc = n / y ;

console.log(" "+n+" / "+y+" = "+calc);

var calc = n * y ;

console.log(" "+n+" x "+y+" = "+calc);



// Operadores relacionais

console.log (" "+x+" é maior que "+y+" ? ´");

// Maior que (>)
// Retorna verdadeiro caso o operando da esquerda seja maior que o da direita.

if(x > y){

    console.log ("Verdadeiro");
}
else{
    console.log ("falso");
}

console.log (" "+x+" é menor que "+y+" ? ´");

// Lógica : Menor que (<)
// Retorna verdadeiro caso o operando da esquerda seja menor que o da direita

if(x < y){

    console.log ("Verdadeiro");
}

else{

    console.log ("falso");
}

console.log (" "+x+" é menor ou igual que "+y+" ? ´");

// Lógica : Menor que ou igual (<=)
// Retorna verdadeiro caso o operando da esquerda seja menor ou igual ao da direita.

if(x <= y){

    console.log ("Verdadeiro");

}

else{

    console.log ("falso");
}

console.log (" "+x+" é maior e igual que "+y+" ? ´");

// Lógica : maior e igua que (>=)
// Retorna verdadeiro caso o operando da esquerda seja maior ou igual ao da direita.

if(x >= y){

    console.log ("Verdadeiro");
}
else{
    console.log ("falso");
}

console.log (" "+x+" não é igual do que "+y+" ? ´");

// Lógica : Não igual (!=)
// Retorna verdadeiro caso os operandos não sejam iguais

if(x != y){
    console.log ("Verdadeiro");
}
else{
    console.log ("falso");
}

// Lógica = Igual (==)
// Retorna verdadeiro caso os operandos sejam iguais.

if( 3 == x ){
    console.log ("Verdadeiro");
}
else{
    console.log ("falso");
}

console.log (" 3 não é do mesmo tipo do que "+y+" ? ´");

// Lógica : Estritamente igual (===)
// Retorna verdadeiro caso os operandos sejam iguais e do mesmo tipo .

if( 3 === x ){

    console.log ("Verdadeiro");
}
else{
    console.log ("falso");
}

console.log (" 3 não é igual ou não é do mesmo tipo que  "+y+" ? ´");

// Estritamente não igual (!==)
// Retorna verdadeiro caso os operandos não sejam iguais e/ou não sejam do mesmo tipo.

if( 3 !== x ){

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




// Desvio condicional if 

var caminhoA = 1;
var caminhoB = 2;
var caminhoC = 3;


/* Vamos supor um exemplo , um carro esta indo a uma direção só que entra numa cruzilhada , 
que tem possibilidade de três caminhos diferentes a  esquerda , direita , e reta , na lógica , 
pelo percuso que vai chegar mais rápido e a reta , so que tem um problema no meio do percuso de 
uma das rotas tem um atalho para mudar o percuso , e outro e uma rua sem saida , crie a lógica  
com a escolha do úsuario e que mostra
 qual e o destino mais rápido , e mostre qual o caminho final ele escolgeu    */

switch(caminhoA) {

 case 1 :

  console.log(" E o caminho mais longo , rua sem saída  ") ; 
  break;

 case 2 : 
   console.log("ops , voce escolheu o caminho com atalho ");

   break;
 case 2 : 
   console.log("ops , voce escolheu o caminho com atalho ");
   break;


  case 3 :
   console.log(" E o caminho mais rápido ") ; 
   
default : 
  
 console.log("não existe este caminho ") ;

}










// um dos meus prediiletos são a utilização do for , exemplo :
// Este algoritmo vai mostrar todas as tabuadas do 0 até o número que o usuario digitar 
var c = parseInt(prompt("Digite o número máximo de tabuadas que deseja visualizar "));
c++;
var n = 0;
for (var k=0 ;k<c;k++){ 
 for (var i = 0 ; i<11;i++){
  var result = n * i ;
   console.log(" "+n+" x "+i+" = "+result);
  }
  n++;
  console.log("");
 }






/* 1 - Revisão : prática usando a estrutura  for e if de forma encadeado */




var n = parseInt(prompt("Digite o número que vai definir o inicio de conjunto de tabuada")) ;

var nDois = parseInt(prompt("Digite o número que vai definir o última tabela da tabuada "));

n++;

console.log ("Tabuada completa :");
console.log(" do "+n+" até o "+nDois+" ");

console.log("");

function tabuadaDefinida ( begin , end) {
 
  if(begin < end ){
  for (var k = begin ;k<end;k++){
    for ( var i = 0 ; i<11;i++){
      var mult = begin * i ; 
       var result = console.log(" "+begin+" X "+i+" = "+mult);

     }
       begin++;
       console.log("");
     }

    return result ;
  }
  else {
    console.log("erro : ordem decrescente !!")
}
   
}      

tabuadaDefinida(n,nDois); 

// Ou pode ser definida :

tabuadaDefinida(2,5+1);

// vai mostrar a tabuada do 2 ao 5 

/* Ou seja vai fazer como comando split() 
ou como um SELECT WHERE , no sentido de 
filtragem com dois termos  ,
so que neste caso  vai calcular
e mostrar somente as tabelas definidas
pelo úsuario , exemplo da tabuada 2
a tabuada 5 */

/* Com 14 linhas totais de código apenas,
da para mostrar  a tabuada completa do 
0 á 10 da tabuada 1 até 
o número da tabuada  que o úsuario 
quiser exemplo 1000000000, com  dois
digitos pelo usuario , 
claro  se o úsuario preferir  esta 
quantidade .*/

/*### 2 - Lógica de programação : desvio condicional encadeado composto , prática : */



var escolha = parseInt(prompt("Digite o número do caminho que desejar percorrer  1 = esquerda  ,2 = reto , 3 = a direita .")) ; 

switch(escolha) { 

  case 1 :
     console.log(" O "+escolha+" : Que pena ,voce escolheu o caminho   muito longo !") ;
     break;

  case 2 :
     console.log(" o "+escolha+" : Opa !!! tem um atalho no caminho    ");

  case 3 : 
     console.log(" O "+escolha+" : Parabéns !!  voce escolheu o caminho   mais curto e fácil no trageto !! ") ;
     console.log(" Congratulation ! Do you choose the  traject ,  more easy ") ;
     break;

  default :
     console.log("Erro este caminho não existe ") ;

}




/* ### 3 - Confirmação  usando if . */



var nome = prompt("Digite seu nome :") ;

if (nome == "Leandro" || nome == "leandro"){

  console.log("Olá "+nome+" , voce é programador");

}

else {

  console.log(" Olá "+nome);

}

