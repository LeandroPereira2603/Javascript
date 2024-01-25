# Choose object 

## English 

```javascript 

// Complete full name 

var firstName = prompt('what's your first name ?');
var middleName = prompt('What's your middle name ?');
var lastName = prompt('What's your last name ?');
var fullName = [];

fullName.push(firstName,middleName,lastName);

var object = [] ;

object.push('ball','skate','bike', 'prancha');

choose = prompt ("What's is object : 1 = ball , 2 = skate , 3 = bike ");

switch (choose){

case '1':

console.log(" The  object that choose is  "+object[0]+" "+fullName);

break;

case '2' :

console.log(" The  object that choose is  "+object[1]+" "+fullName);

break;

case '3' :

console.log(" The  object that choose is  "+object[2]+" "+fullName);

break;

case '4' :

console.log(" The  object that choose is  "+object[3]+" "+fullName);

}


```

> [!Note]
> **Refência:**  <br>
> Kultivi <br>
> (LLP) Leandro Luiz Pereira <br>