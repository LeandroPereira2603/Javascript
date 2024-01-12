
/* Algoritmo que da para escolher tipos de saida de calculos de tabuadas diferentes  */

var escolha = parseInt(prompt("Escolha o algoriitmo de tabuada que deseja visualiar : 1 - conjunto de tabuada  definida , 2 - conjunto de tabuada  ,3 - uma tabuada , 4 - tabuada definindo multiplicaçôes , 5 - tabuada definida  ")) ; 

switch(escolha) { 

  case 1 :
     //case 1 : algoritmo de conjunto de tabuada definida o inicio e fim pelo úsuario .
    var n = parseInt(prompt("Digite o número que vai definir o inicio de conjunto de tabuada")) ;
    var nDois = parseInt(prompt("Digite o número que vai definir o última tabela da tabuada "));
    nDois++;
    console.log ("Tabuada completa :");
    console.log(" do "+n+" até o "+nDois+" : números escolhida pelo úsuario ");
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

   console.log("Tabuada do 2 ao 5 : números colocados na função !.")
   console.log("");
    // definida a função agora pelo sistema e não pelo o digito do úsuario :

   tabuadaDefinida(2,5+1);

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
    

    for (var i = 0 ; i<11;i++){
      var result = c * i ;
       console.log(" "+c+" x "+i+" = "+result);
     }
    console.log("");
  
   break;

   case 4 :

    var t = parseInt(prompt("Digite o número da tabuada :"));

    var s = parseInt(prompt("Digite o número de sequências maximas de multiplicação desta tabuada :"));

    s++;

    for (var i = 0;i<s;i++){

    var result = t * i ; 

    console.log ( " "+t+" x "+i+" = "+result);

    }

   break;
   
   case 5 : 

      var vezes = [0,1,2,3,4,5,6,7,8,9,10] ;
      var tabuada = [0,1,2,3];
      var j = 0;
     console.log('\n');
   for (var k = 0;k<3;k++){
     j++;
   for (var i=0;i < 11; i ++){
       var calc = tabuada[j] * vezes[i];
      console.log(" "+tabuada[j]+" x "+vezes[i]+" =    "+calc);
      }
       console.log('\n');
     }
        
   default :
    console.log("Erro este caminho não existe ") ;

}















