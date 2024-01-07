## Revisão de novos conteudo



```javascript 


// Pode atribuir uma função na variável , esta modalidade eu nem sabia que daria pra fazer , pois uma função ja tem sua estrutura e bloco , para ser declarada quando e chamada na função , no javascript da pra fazer isto .

var butterfly = function cor () {

  console.log(" the butterfly have wings blue ") ;

 
} ;

\\ Para ser chamada a função com uma outra função .


function imprimir(t){

// += sinal de atribuição somatoria que vai causar a concatenação das duas strings .

 var t += " and too is very beautiful ";
 
 return t ;

}

imprimir(butterfly());

// A função dentro de uma outra função , que eu chamo de função encadeado , vai concatenar as frases de cada função , por conta da funcionalidade do retorno da chamada da função imprimir () dentro da função butterfly , declarada .


// return : "the butterfly have wings blue and too is very beautiful ! "
```

## Vamos piorar mais a situação 

```javascript

// Colocar estas duas funções dentro do for e do desvio condicional 


 

   // tirei o incremento da estrutura for para ser chamada dentro do desvio condicional if para se caso for a opção não que e o número (2) ele vai fazer o incremento ,  fazendo sair do laço de repetição , e imprimir a informação saiu do programa .


   for (var i = 0 ; i<2 ; ) {

     var a = parseInt(" Quer visualizar denovo a mensagem : 1 sim ,  2 não ");

      if (a == 1 ) {
         
     
       
       var butterfly = function cor () {

        console.log(" the butterfly have wings blue ") ;

 
     } ;

     function imprimir(t){

    // += sinal de atribuição somatoria que vai    causar          a concatenação das duas strings .
 
         var t += " and too is very beautiful ";
 
        return t ;
  
       }

        imprimir(butterfly());

}
else {
      i = i +4;

    }


     console.log (" Saiu do programa ") ;
   }


```
> [!NOTE]
> Agora e so testar no console do navegador 
> Salva  o arquivo .js 
> e importar no arquivo html 
> para ver se tem algum erro de sintaxe 
> e depois salvar no github indexando no link.