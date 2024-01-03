var n , nTwo , d , dTwo ;
var calcD ;
var wingLeft , wingRight ; 
var butterfly; 
var sinOne , sinTwo;

var n = parseInt(prompt("Input , the first number of umerator : ")) ;

var nTwo = parseInt(prompt("Input , the second number of numerator ")); 

var d = parseInt(prompt("Input , the first number of denominator "));

var dTwo = parseInt(prompt(" Input , the second number od denominator "));

wingLeft = n * dTwo ;
wingRight = d * nTwo ;
butterfly = wingLeft + wingRight ; 
calcD = d * dTwo ; 

if ( butterfly % 2 == 0  &&  calcD % 2 == 0 ) {

sinOne = butterfly / 2 ;
sinTwo = calcD / 2 ;
console.log("");

console.log (" "+n+" + "+nTwo+" = "+sinOne);
console.log (" "+d+"    "+dTwo+"      "+sinTwo);

}

else {

console.log (" "+n+" + "+nTwo+" = "+butterfly);
console.log (" "+d+"    "+dTwo+"      "+calcD);

}