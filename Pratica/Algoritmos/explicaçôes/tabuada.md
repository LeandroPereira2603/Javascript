# Algoritmo

## Tabuada 

<p> Colocando vários tipos de algoritmo de retorno de cálculos de tabuada , determinando   a verificação da escolha do úsuario ou já estabelecido programado .</p> 

### Três algoritmos :

* 1 - Determina a escolha do conjunto de tabuadas, defindas pelo úsuario de inicio e fim.
* 2 - Determina o conjunto de tabuada do 0 até o número definido pelo úsuario.
* 3 - Mostra uma tabuada completa , definida pelo número escolhido pelo o úsuario.

```javascript 

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
 
   tabuadaDefinida(2,5+1);
```

## Todos em um só algoritmo 
### Switch case 

```javascript

var escolha = parseInt(prompt("escolha o algoriitmo de tabuada que deseja visualiar : 1 - conjunto de tabuada  definida , 2 - conjunto de tabuada  ,3 - uma tabuada")) ; 

switch(escolha) { 

  case 1 :
    
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
 
   tabuadaDefinida(2,5+1);

    break;

  case 2 :
     

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
        
default :
    console.log("Erro este caminho não existe ") ;

}





```