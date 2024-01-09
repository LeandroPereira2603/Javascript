# Algoritmo

## Tabuada 

<p> Colocando vários tipos de algoritmo de retorno de cálculos de tabuada , determinando   a verificação da escolha do úsuario ou já estabelecido programado .</p> 

### Sobre os algoritmos :

1 - Determina a escolha do conjunto de tabuadas, defindas pelo úsuario de inicio e fim, e mostra a tabuada definida ja programado da tabuada 2 ao 5 . <br>
2 - Determina o conjunto de tabuada do 0 até o número definido pelo úsuario. <br>
3 - Mostra uma tabuada completa , definida pelo número escolhido pelo o úsuario. <br>
4 - Mostra uma tabuada com a quantidade maxima de multiplicaçôes, que é o número definida pelo usuário .

### 1 - Conjunto de tabuada 

<p> O úsuario vai digitar o número de inicio e fim , exemplo : 5 , 14  , o sistema irá calcular e mostrar a tabuada completa , da tabuada 5 até a tabuada 14 , mostrando as multiplicações do 0 até o 10 de cada tabuada .</p>

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

### 2 - Conjunto de tabuada 

<p> O úsuario vai digitar o número que vai estabelecer o final do conjunto de tabuada , exemplo : digitou 5 , o sistema irá calcular e mostrar o conjunto de tabuadas do 0 até o 5 , mostrando a multiplicação do 0 até o 10 </p>

```javascript 

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

```


### 3 - Tabuada

<p> O úsuario ira digitar um número, exemplo : 7 , o sistema irá calcular e mostrar a tabuada do 7 , da multiplicação do 0 até o 10 , </p>


```javascript 

var c = parseInt(prompt("Digite o número da tabuada  deseja visualizar "));
    

    for (var i = 0 ; i<11;i++){
      var result = c * i ;
       console.log(" "+c+" x "+i+" = "+result);
     }
    console.log("");
  

```

### 4 - Tabuada

<p> Exemplo o usuário digitou 3 e 20 , vai mostrar a tabuada do 3 com sequência de multiplicaçôes do 0 ao 20 </P>

```javascript 

var t = parseInt(prompt("Digite o número da tabuada :"));

var s = parseInt(prompt("Digite o número de sequências maximas de multiplicação desta tabuada :"));

s++;

for (var i = 0;i<s;i++){

var result = t * i ; 

  console.log ( " "+t+" x "+i+" = "+result);

}

```


## Todos os exemplos de cálculos de tabuada em um aó algoritmo 
 
### Switch case 

<p> Com o switch case o úsuario vai escolher qual algoritmo de cálculo de tabuada quer visualizar </p>

```javascript

var escolha = parseInt(prompt("escolha o algoriitmo de tabuada que deseja visualiar : 1 - conjunto de tabuada  definida , 2 - conjunto de tabuada  ,3 - uma tabuada , 4 - tabuada definindo multiplcaçôes")) ; 

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

   case 4 :
    var t = parseInt(prompt("Digite o número da tabuada :"));

    var s = parseInt(prompt("Digite o número de sequências maximas de multiplicação desta tabuada :"));

    s++;

    for (var i = 0;i<s;i++){

    var result = t * i ; 
 
    console.log ( " "+t+" x "+i+" = "+result);

    }
    break;
        
  default :

    console.log("Erro este caminho não existe ") ;

}



```



