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
filtragem com dois termos  , so que neste caso  vai calcular e mostrar somente as tabelas definidas pelo úsuario , exemplo da tabuada 2 a tabuada 5 */

/* Com 15 linhas totais de código , 
 da para mostrar  a tabuada do 1 até o número que o úsuario quiser exemplo 1000000000
 , com  dois digitos pelo usuario , claro 
 se o úsuario preferir esta 
 quantidade .*/

```

  