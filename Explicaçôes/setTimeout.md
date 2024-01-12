
# Set timeout 

  _setTimeout()_ <p> é uma função em JavaScript que permite atrasar a execução de um trecho de código por um determinado período de tempo </P>

```javascript
   
function moveon (){
   
    // Exibe uma caixa de diálogo modal para fazer uma pergunta ao usuário

    var answer = confirm("Ready to move on ? ");

   // Se ele clicou no botão "OK" , faz o navegador carregar uma uma nova página .

   if (answer) window.location = "https://www.google.com/";
}

// Executa a função definida acima por 1 minuto (60.000 míllissegundos) a partir

setTimeout(moveon, 60000);


moveon();


```

> [!NOTE]
> <strong> Rêferencia: </strong>
> * Livro : O guia definitivo do javascript

