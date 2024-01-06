

## For

<p> A estrutura for e o laço de repetição , podendo ser infinitas possibilidades para usar esta função . </p>

<p> São três argumentos dentro do parâmetro :</p>

* 1° - Criação da variável para o incremento .
* 2° - Campo para lógica condicional para sair do laço de repetição .
* 3° - Campo para o incremento .

```javascript 

for(var i = 0;i<11;i++){

console.log(i);

}

for(var i = 0;i<10;i++){
    console.log(i);
}

for(var i = 0,j=10;i<10;i++,j--){
    console.log(i*j);
}

for(var p in 0){
    console.log(p);
}

```

<p> Ele vai verificar primeiro a condição para sair do laço de repetição e imprimir as informações </p>


## While

```javascript 

    var c = 1;
    while(c <= 6){
      console.log("contagem : "+c);
      c++; // c = c + 1
    }

```
## Do While

<p> Ele ira imprimir a informação primeiro e depois verificar o condicionamento para poder sair do laço </p>

```javascript 

    var i = 1;
    do{
      console.log("contagem : "+i);
      i++; // i = i + 1
    }
    while(i<=6);

```

## forEach

```javascript

var erros = [];

var ul = document.querySelector("#mensagens-erro");
erros.forEach(function(erro){
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
})

```