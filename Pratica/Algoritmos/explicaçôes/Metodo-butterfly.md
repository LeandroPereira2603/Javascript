### Algoritmo : method butterfly 

<p> The user will input the values of each number , of  numerator and of denominator , the system will return with result .</p>

```javascript

var n , nTwo , d , dTwo ;
var calcD ;
var wingLeft , wingRight ; 
var butterfly; 

var n = parseInt(prompt("Input , the first number of umerator : ") ;

var nTwo = parseInt(prompt("Input , the second number of numerator ") ; 

var d = parseInt(prompt("Input , the first number of denominator ");

var dTwo = parseInt(prompt(" Input , the second number od denominator ");

wingLeft = n * dTwo ;
wingRight = d * nTwo ;
butterfly = wingLeft + wingRight ; 
calcD = d + dTwo ; 

console.log("");

console.log (" "+n+" + "+nTwo+" = "+butterfly);
console.log (" "+d+"    "+dTwo+"      "+calcD);



```

