# Quizz 

### Criar um site ou aplicativo

que tenha  :  

* cronômetro 
* ranking
* Mostra o nível de dificuldade 
* escolher categorias 


quizz básica na práticá em javascript :  


```javascript 


var n = (Math.floor(Math.random()* 6)); ;
var question = n;
var ranking ; 
var ponto = 0; 
var resposta ; 
var correto ; 

question = 1 ; 


console.log('Question  : \n ');

switch (question) {
  case 1 :
    
  console.log('Para que que serve nimesulida ? \n ');
  console.log('a : Anti flamatorio ');
  console.log('b : Acidez estomacal ');
  console.log('c : anti micotico ');
  console.log('d : Anti termico ');
  
  resposta = 'a';
  correto = 'a';
  
  if ( resposta == correto ){
    console.log('\n'+resposta+' : resposta correta  ');
    
    ponto += 1 ; 
  }
  else {

    console.log('\nResposta :'+resposta+' resposta errada ');
  }
    
    
    
    break;
  
  case 2 : 
  
  console.log('Question  ');
  console.log('a :');
  console.log('b :');
  console.log('c :');
  console.log('d :');
  
  break;

  case 3 :
  
  console.log('Question ');
  console.log('a :');
  console.log('b :');
  console.log('c :');
  console.log('d :');
  
  break;
  
  case 4 : 
    
  console.log('Question ');
  console.log('a :');
  console.log('b :');
  console.log('c :');
  console.log('d :');
  
  break ;
  
  case 5 : 
  console.log('Question ');
  console.log('a :');
  console.log('b :');
  console.log('c :');
  console.log('d :');
  
  break ;
  
  case 6 : 
    
  console.log('Question ');
  console.log('a :');
  console.log('b :');
  console.log('c :');
  console.log('d :');
  
  break;
  
  default : 
  
  console.log('End program ');
    

}


console.log ('\nRanking : \n\nTotal de pontos :'+ponto)
console.log('Porcentagem : ');



```
