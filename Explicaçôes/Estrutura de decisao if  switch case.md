## If composto ( Desvio condicional )

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


## Switch Case



```Javascript 

// Exemplo de escolha definida pelo programador 

var dia = 2 ; 

// Irá retornar : TERÇA

// Exemplo de escolha definida pelo úsuario

var dia = prompt("Digite o número de 0 á 6 ") ;

// exemplo o úsuario digitou 4 

// Irá retornar : QUINTA 


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

```