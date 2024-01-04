
var kg = parseFloat(prompt("Digite qual é o seu peso : "));

var alt = parseFloat(prompt("Digite a sua altura :"));

console.log("");

console.log("Cálculo com os dados iformados pelo usuário altura : "+alt+" peso : "+kg+" ");

var imc = kg / ( alt * alt ) ; 

if ( imc < 18.5 ) {

 console.log (" IMC = "+imc.toFixed(2)+" kg/m2 ( baixo peso ) ");
 
}

else if ( imc > 18.6 && imc < 24.9 ) {

 console.log (" IMC = "+imc.toFixed(2)+" kg/m2 ( peso adequado ) ");

}

else if ( imc >=25 && imc < 34.9 ) {

 console.log (" IMC = "+imc.toFixed(2)+" kg/m2 ( sobrepeso ) ");

}

else if( imc > 30  && imc < 34.9 ) {

console.log (" IMC = "+imc.toFixed(2)+" kg/m2 ( Obesidade grau 1 )");

}

else {  

    console.log(" "+imc.toFixed(2)+" : este resultado não tem na descrição de grau do imc na tabela I.M.C ");

}


console.log("");

console.log("Cálculo com oas dados ja estabelicido programado !! peso : 62 altura : 1.60 ");


function calculoImc ( kg , alt ) {

var result;

var imc = kg / ( alt * alt ) ; 

if ( imc < 18.5 ) {

var result = console.log (" IMC = "+imc.toFixed(2)+" kg/m2 ( baixo peso ) ");

}

else if ( imc > 18.6 && imc < 24.9 ) {

 var result = console.log (" IMC = "+imc.toFixed(2)+" kg/m2 ( peso adequado ) ");

}

else if ( imc >=25 && imc < 34.9 ) {

 var result =console.log (" IMC = "+imc.toFixed(2)+" kg/m2 ( sobrepeso ) ");

}

else if ( imc > 30  && imc < 34.9 ) {

var result = console.log (" IMC = "+imc.toFixed(2)+" kg/m2 ( Obesidade grau 1 )");

}

else {

 var result = console.log(" "+imc.toFixed(2)+" kg/m2 : este resultado não tem na descrição de grau do imc na tabela I.M.C ");

}

return result ;

}

// criando objeto pessoa com chave

const pessoa = {

'nome' : 'Leandro',
'altura' : '1.60',
'peso' : 62 

}

var altLeandro = pessoa['altura'];

var pesoLeandro = pessoa ['peso'];


calculoImc(pesoLeandro, altLeandro)  ; 




