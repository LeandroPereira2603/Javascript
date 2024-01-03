### 1 - Revisão : prática usando a estrutura  for e if de forma encadeado .

```javascript 


var n = parseInt(prompt("Digite o número que vai definir o inicio de tabelas de tabuada") ;

var nDois = parseInt(prompt("Digite o número que vai definir a última tabela da tabuada ");

n++;

function tabuadaDefinida ( begin , end) {
  var c=0;
  for (var k = begin ;k<end;k++){
    for ( var i = 0 ; i<c;i++){
      var mult = c * i ; 
       var result = console.log(" "+c+" X "+i+" = "mult);

     }
   }

 return result ;

}
       

tabuadaDefinida(n,nDois); 

// Ou pode ser definida :

tabuadaDefinida(2,5);

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

```
### 2 Lógica de programação : desvio condicional encadeado composto , prática : 


```javascript 

escolha = parseInt(prompt("Digite o caminho que desejar percorrer , 1 ,2 , 3 ") ;

swicht(escolha){

case: 1
   
 console.log("Que pena ,voce escolheu o caminho muito longo !") ;

breack;

case: 2
  
  console log("Opa !!! tem um atalho no caminho ");

continue;

case: 3 
  
  console.log("Parabéns !!  voce escolheu o caminho   mais curto e fácil no trageto !! ") ;

  console.log(" Congratulation ! Do you choose the  traject ,  more easy ") ;

default :
   
  console.log("Erro este caminho não existe ") ;

}
  