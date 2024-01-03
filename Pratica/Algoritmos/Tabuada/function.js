
/* Switch case : Vai dar opçôes de  escolher o algoritmo para o cálculo de tabuada */

var escolha = parseInt(prompt("escolha o algoriitmo de tabuada que deseja visualiar : 1 - conjunto de tabuada  definida , 2 - conjunto de tabuada  ,3 - uma tabuada")) ; 

switch(escolha) { 

  case 1 :
     //case 1 : algoritmo de conjunto de tabuada definida o inicio e fim pelo úsuario .
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

   console.log("Tabuada do 2 ao 5 pelo sistema !.")
    // definida a função agora pelo sistema e não pelo o digito do úsuario :

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

    break;

  case 2 :
     

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

       break;

  case 3 :

    var c = parseInt(prompt("Digite o número da tabuada  deseja visualizar "));
    c++;

    for (var i = 0 ; i<11;i++){
      var result = n * i ;
       console.log(" "+c+" x "+i+" = "+result);
     }
    console.log("");
  
   break;
        
default :
    console.log("Erro este caminho não existe ") ;

}

















