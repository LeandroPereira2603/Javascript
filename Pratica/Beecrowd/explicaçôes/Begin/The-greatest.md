# The greatest

**Level:** :star: :star: :star:

**Solved:** not

Make a program that reads 3 integer values and present the greatest one followed by the message "eh o maior". Use the following formula:


**Input**

The input file contains 3 integer values.

**Output**

Print the greatest of these three values followed by a space and the message “eh o maior”.

| Input Samples	| Output Samples |
|:--:|:--:|
|7 14 106 | 106 eh o maior |
| 217 14 6 | 217 eh o maior |

```javascript 

a = parseInt(lines.shift('\n'));
b = parseInt(lines.shift('\n'));
c = parseInt(lines.shift('\n'));

if( a > b && a > c ) {

console.log(""+a+" eh maior ");

}

else if ( b > a && b > c){

console.log(""+b+" eh maior ");

}

else if ( c > a && c > b ){

console.log(""+c+" eh maior ");
}



```