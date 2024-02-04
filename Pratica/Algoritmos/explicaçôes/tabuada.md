

# Tabuada 

<p> Colocando vários tipos de algoritmo de retorno de cálculos de diferentes de tabuada , com valores de entrada determinada pelo o úsuario e também  com valores de entrada programado . </p> 

### Sobre os algoritmos :

1 - **Conjunto de tabuada** <br>
Determina a escolha do conjunto de tabuadas, definida pelo úsuario de inicio e fim, e também mostra a tabuada definida ja programado da tabuada 2 ao 5 . 
<br>

2 - **Conjunto de tabuada** <br>
 Determina o conjunto de tabuada do 0 até o número definido pelo úsuario. <br>

3 - **Tabuada** <br>
Mostra uma tabuada completa , definida pelo número escolhido pelo o úsuario. <br>

4 - **Tabuada** <br>
Mostra uma tabuada com a quantidade maxima de multiplicaçôes, que é o número definida pelo usuário .

5 - **Tabuada** <br>
Mostra um conjunto de tábuada do 0 até o três , com a quantidade de multiplicações , do 0 até o 10 com arrays.

## 1 - Conjunto de tabuada 

### Sobre a execusão do algoritmo 

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

## 2 - Conjunto de tabuada 

### Sobre a execusão do algoritmo 

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


## 3 - Tabuada


### Sobre a execusão do algoritmo 

<p> O úsuario ira digitar um número, exemplo : 7 , o sistema irá calcular e mostrar a tabuada do 7 , da multiplicação do 0 até o 10 , </p>


```javascript 

var c = parseInt(prompt("Digite o número da tabuada  deseja visualizar "));
    

    for (var i = 0 ; i<11;i++){
      var result = c * i ;
       console.log(" "+c+" x "+i+" = "+result);
     }
    console.log("");
  

```

## 4 - Tabuada

### Sobre a execusão do algoritmo 

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

## 5 - Tabuada com array 

### Sobre a execusão do algoritmo .

<p> Com dois elementos (vezes , tabuada) e cada elemento tem quantidade de índices diferentes , sendo que da tabuada tem 4 índices do 0 até o 3 , o de vezes tem 11 índices de 0 á 10 </p>

```javascript 

var vezes = [0,1,2,3,4,5,6,7,8,9,10] ;
var tabuada = [0,1,2,3];
var j = 0;
console.log('\n');
for (var k = 0;k<3;k++){
j++;
for (var i=0;i < 11; i ++){
   var calc = tabuada[j] * vezes[i];
   console.log(" "+tabuada[j]+" x "+vezes[i]+" = "+calc);
  }
 console.log('\n');
}

```


## Todos os exemplos de cálculos de tabuada em um só algoritmo 
 
### Switch case 

<p> Com o switch case o úsuario vai escolher qual algoritmo de cálculo de tabuada quer visualizar </p>

```javascript

var escolha = parseInt(prompt("Escolha o algoriitmo de tabuada que deseja visualiar : 1 - conjunto de tabuada  definida , 2 - conjunto de tabuada  ,3 - uma tabuada , 4 - tabuada definindo , 5 - tabuada definida - multiplcação")) ; 

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
    
   case 5 : 
     var vezes = [0,1,2,3,4,5,6,7,8,9,10] ;
     var tabuada = [0,1,2,3];
     var j = 0;
     console.log('\n');
   for (var k = 0;k<3;k++){
   j++;
   for (var i=0;i < 11; i ++){
    var calc = tabuada[j] * vezes[i];
    console.log(" "+tabuada[j]+" x "+vezes[i]+" =       "+calc);

    }

      console.log('\n');
   }

   break;
      
        
  default :

    console.log("Erro este caminho não existe ") ;

}


```

> [!NOTE] 
> **Referencia:**  <br>
> (LLP) Leandro Luiz Pereira 
>



