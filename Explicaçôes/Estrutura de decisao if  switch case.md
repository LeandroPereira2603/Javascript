

## if : Desvio condicional

<p> A estrutura if , tem a finalidade de criar e definir vários possibilidades de percurssos diferentes , tem vários exemplos de uso da estrutura : "simples" , "composto" , " encadeado ", levando ao certo destino final ,  sendo escolhidos o percuso já estabelecido "programado" ou definido por uma escolha do "úsuario"  . </p>

### if simples 

<p> If simples e uma estrutura de desvio condicional com uma condição .</p>

```javascript 

var x = 10;
var y = 30 ;

if ( x > y){

 console.log("Verdadeiro");

}
else {
 console.log("Falso");

}

```

### If composto

<p> If composto e uma estrutura condicional com  várias condiçõea </p>

<p> Exemplo : algoritmo que informa qual e a classificação que a pessoa está , exemplo :  criança , adolescente , adulto ou idoso , sendo que a idade ja definido programado .  </p>

```Javascript 

var idade = 25;

if (idade <11) {

   console.log("Criança");

}

else if (idade > 12 && idade < 17) {

   console.log("Adolescente");

}

else if (idade >= 18 && idade <= 55) {

   console.log("Adulto");

}

else {

   console.log("Idoso");

}

```


<p> O mesmo modelo de algoritmo ,  agora a idade sendo informada pelo usuário . </p>

```Javascript 

var idade = parseInt(prompt(" Digita o número da idade : ");

if (idade <11) {

   console.log("Criança");

}

else if (idade > 12 && idade < 17) {

   console.log("Adolescente");

}

else if (idade >= 18 && idade <= 55) {

   console.log("Adulto");

}

else {

   console.log("Idoso");

}

```

### if encadeado 

<p> são várias estruturas condicionais , sendo if colocado dentro de outro if. </p>


```javascript 

var x = 50 ;
var y = 70 ;
var z = 20 ; 
var w = 23 ;

if ( x > y ) {

 if ( z < w ) {

   console.log("Verdadeiro");

 }

 else {

   console.log("falso");

}

else {

  console.log("falso");

}

```
    



## Switch Case

<p> O switch case tem a semelhancia da estrutura if 
, so que mais organizado ,e ideal quando ha vários casos de escolhas diferentes , podendo sair da estrutura  com o comando break; </p>  


<p> Exemplo de escolha definida pelo sistema programado </p>



```Javascript 

var dia = 2 ; 

switch(dia) {

   case 0:
      console.log("DOMINGO");
      break;
   case 1:
      console.log("SEGUNDA");
      break;
   case 2:
      console.log("TERÇA");
      break;
   case 3:
      console.log("QUARTA");
      break;
   case 4:
      console.log("QUINTA");
      break;
    case 5:
      console.log("SEXTA");
      break;
    case 6:
      console.log("SABADO");
      break;
    default:
      console.log("Dia invalido");

// Irá retornar : TERÇA
    
 }

```

<p> Exemplo de escolha informado pelo úsuario </p>
 
<p> O úsuario digitou número : 4 </p>

```javascript 

var day = parseInt(prompt("Digite o número de 0 á 6 ")) ;

// O parseInt serve para converter os valores digitados para intenger, que significa números inteiroa .

switch(day) {

    case 0:
       console.log("DOMINGO");
       break;
    case 1:
       console.log("SEGUNDA");
       break;
    case 2:
       console.log("TERÇA");
       break;
    case 3:
       console.log("QUARTA");
       break;
    case 4:
       console.log("QUINTA");
       break;
     case 5:
       console.log("SEXTA");
       break;
     case 6:
       console.log("SABADO");
       break;
     default:
       console.log("Dia invalido");
     
  }

// Irá retornar : QUINTA 

```