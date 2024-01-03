## If 

## Desvio condicional

<p> Desvio codicional : estrutura if , tem a finalidade de criar e definir vários possibilidades de percurssos diferentes , como "composto" , " encadeado " ou " simples "  , levando ao certo destino final ,  sendo escolhidos pelo percuso já estabelecido "programado" ou definido por uma escolha como do "úsuario"  . </p>

### Exemplo de algoritmo , if "composto"  :

<p> Algoritmo que informa qual e a classificação que a pessoa está , exemplo :  criança , adolescente , adulto ou idoso , sendo que a idade é informada pelo programador .  </p>

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


<p> O mesmo modelo de algoritmo ,  agora sendo informada pelo usuário . </p>

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




## Switch Case



```Javascript 

// Exemplo de escolha definida pelo programador 

var dia = 2 ; 

// Irá retornar : TERÇA

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
    
 }

 // Exemplo de escolha definida pelo úsuario número  : 4 

// O parseInt serve para converter os valores digitados para intenger que é números inteiroa .

var day = parseInt(prompt("Digite o número de 0 á 6 ")) ;


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