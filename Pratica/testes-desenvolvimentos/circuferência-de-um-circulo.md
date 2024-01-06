## Circuferência de um circulo 


<p> Com a medida do raio , encontramos o diamêtro , calculando o raio elevado ao quadradro "R²" , assim multiplicando por PI "π" , encontramos a área total da circufêrencia do circulo   </p>

<p> Fórmula : π * R² </p>

<p> para saber o comprimento do circulo , basta multiplicar o PI "π" por 2 e multiplica pelo raio </p>

<p> atenção : a circuferência e plana não é tridimensional como a esfera . </p>

<p> Fórmula : π x 2 x R </p>

```javascript

console.log("A circuferência do circulo ");

var r = parseFloat(prompt("Digite a distância do raio , que esta no formato de unidade de medida cm (centimetro) : ") ;

var pi = 3.14159;

r.Math.pow(2).toFixed(4);

console.log("A medida do diametro é "+r+" cm ");


var result = pi * r ; 


console.log(" A medida da area total do circulo  é : "+result.toFixed(4)+" cm² " );


```


```javascript

console.log("A circuferência do circulo ");

var r = parseFloat(prompt("Digite a distância do raio , que esta em formato de unidade de medida metros ") ;

var pi = 3.14159;

r.Math.pow(2).toFixed(4);

console.log("A medida do diametro é "+r+" m ");


var result = pi * r ; 

result.toFixed(4);


console.log(" A area total do circulo  é : "+result+" m² ");


```





</p> Para saber o comprimento do circulo </p>

```javascript 

var r = parseFloat(prompt("Digite a distância da raio , que está no formato de unidade de medida cm ( centimetros ) : ");

var pi = 3.14159;

var result = pi * 2 * r ;


console.log(" a medida do comprimento do circulo e :"+result.toFixed(4)+" cm ");


```


```javascript 

var r = parseFloat(prompt("Digite a distância da  do raio , que está em unidade de medida em metros : ");

var pi = 3.14159;

var result = pi * 2 * r ;

result.toFixed(4);

console.log(" a medida do comprimento do circulo e :"+result+" metros ");


```
### sobre os códigos 

<p>

A entrada de dados digitada pelo usuario ,vai esta convertida para o formato em números reais " parseFloat " que é números quebrados , sendo que o metodo toFixed() que esta no resultado , vai deixar o número no  máximo com 4 casas decimais , a saida de dados vai imprimir toda informação em formato String , interpolada com a variável "result" .

</p>
