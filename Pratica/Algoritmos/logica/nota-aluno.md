```javascript


// Lógica de programação : nota do aluno 

function qtd (x){
  
  
for(var i = 0 ; i < x ; i++){

var nota_1 = Math.random(0,10)*10;
var nota_2 = Math.random(0,10)*10;
var nota_3 = Math.random(0,10)*10;
var nota_4 = Math.random(0,10)*10;

var nota_5 = Math.random(0,10)*10;
var nota_6 = Math.random(0,10)*10;
var nota_7 = Math.random(0,10)*10;
var nota_8 = Math.random(0,10)*10;

var media = (nota_1+nota_2+nota_3+nota_4)/4;

var media_2 =(nota_5+nota_6+nota_7+nota_8)/4;

console.log("\nNotas : 1 \n");
console.log("Nota 1 : "+nota_1.toFixed(0));
console.log("Nota 2 : "+nota_2.toFixed(0));
console.log("Nota 3 : "+nota_3.toFixed(0));
console.log("Nota 4 : "+nota_4.toFixed(0));
console.log("\nNotas : 2  \n")
console.log("Nota 5 : "+nota_5.toFixed(0));
console.log("Nota 6 : "+nota_6.toFixed(0));
console.log("Nota 7 : "+nota_7.toFixed(0));
console.log("Nota 8 : "+nota_8.toFixed(0));


console.log("\nAvaliação : \n");

console.log("Media 1 : "+media.toFixed(0));
console.log("Media 2 : "+media_2.toFixed(0));

var mediaTotal = media + media_2;

var porc = mediaTotal /20*100;

console.log("Acertos : "+porc.toFixed(2)+"%")

if (mediaTotal == 0 || mediaTotal < 10){
  console.log("Está reprovado : ❌");
}
else if (mediaTotal > 10){
  console.log("Está aprovado : ✅");
}
else if (mediaTotal == 20){
  console.log("Nota maxima : 🎯 ");
}
else {
  console.log("Número não existe");
}

}
}

var qtdRandom = Math.random(0,10)*10;
console.log("Quantdade aleatorio :"+qtdRandom.toFixed(0));
qtd(qtdRandom);


```



