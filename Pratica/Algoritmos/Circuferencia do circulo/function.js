

for(i=0;i<=9;){

 var escolha = parseInt(prompt(""+ 
 " ESCOLHA : 1 á 4 :\n"+
 " 1 - cálculo da circuferência do circulo em cm.\n"+
 " 2 - cálculo da circuferência do circulo em m.\n"+
 " 3 - cálculo do comprimento do circulo em cm.\n"+
 " 4 - cálculo do comprimento do circulo em m.\n"+
 " Qualquer outro número irá sair do programa\n"));

    if(escolha == 1 || escolha == 2 || escolha == 3 || escolha == 4){

        console.log("Circuferência de um circulo\n");

        console.log(""+
        "Com a medida do raio , encontramos o diamêtro ,para que possa\n"+
        "calcular o raio elevado ao quadradro R² assim multiplicando\n"+
        "por PI π encontramos a área total da circufêrencia do circulo \n"+
        "Fórmula : π * R² para saber o comprimento do circulo , basta\n"+
        "multiplicar o PI π por 2 e multiplica pelo raio atenção : a\n"+
        "circuferência e plana não é tridimensional como a esfera\n"+
        "Fórmula : π x 2 x R\n");

        switch (escolha){

            case 1 :

                console.log("A circuferência do circulo\n");

                var r = parseFloat(prompt("Digite a distância do raio , que está no formato de unidade de medida cm (centimetro) : ")) ;

                console.log("O medida do raio "+r+" cm \n");
                
                var pi = 3.14159;
                
                // Método : Math.pow( O número a ser calculado , e a potência que deseja realizar )
                
                Math.pow(r,2);
                
                r.toFixed(4);
                
                console.log("A medida do diametro é "+r+" cm\n");
                
                var result = pi * r ;  
                
                console.log(" A medida da área total do circulo  é :\n"+result.toFixed(4)+" cm² " );

                var dec = parseInt(prompt("Deseja escolhar outro cálculo ? : 1 - sim 2 - não "));

                if(dec == 1 ){

                    break;

                }
                else{

                    i = i + 15;
                    break;
                }
            
            
            case 2 :


                console.log("A circuferência do circulo ");

                var r = parseFloat(prompt("Digite a distância do raio , que está em formato de unidade de medida metros ")) ;

                console.log("O medida do raio "+r+" m \n");
                
                var pi = 3.14159;
                
                Math.pow(r,2);
                
                r.toFixed(4);
                
                console.log("A medida do diametro é "+r+" m ");
                               
                var result = pi * r ; 
                
                result.toFixed(4);
                     
                console.log(" A medida da área total do circulo  é : "+result+" m² ");
              
                var dec = parseInt(prompt("Deseja escolhar outro cálculo ? : 1 - sim 2 - não "));

                if(dec == 1 ){

                    break;

                }
                else{

                    i = i + 10;
                    break;
                }
    
             case 3 :
        

                console.log("O comprimento do circulo \n");

                var r = parseFloat(prompt("Digite a distância da raio , que está no formato de unidade de medida cm ( centimetros ) : "));

                console.log("O medida do raio "+r+" cm \n");

                var pi = 3.14159;

                var result = pi * 2 * r ;


                console.log(" a medida do comprimento do circulo e :"+result.toFixed(4)+" cm ");

                
                var dec = parseInt(prompt("Deseja escolhar outro cálculo ? : 1 - sim 2 - não "));

                if(dec == 1 ){

                    break;

                }
                else{

                    i = i + 10;
                    break;
                }

            case 4 :

                console.log("O comprimento do circulo \n");

                var r = parseFloat(prompt("Digite a distância da  do raio , que está em unidade de medida em metros : "));

                console.log("O medida do raio "+r+" m \n");

                var pi = 3.14159;

                var result = pi * 2 * r ;

                result.toFixed(4);

                console.log(" a medida do comprimento do circulo e :"+result+" metros ");
        
                var dec = parseInt(prompt("Deseja escolhar outro cálculo ? : 1 - sim 2 - não "));

                if(dec == 1 ){

                    break;

                }
                else{

                    i = i + 10;
                    break;
                }

                /*
                sobre os códigos :
                A entrada de dados digitada pelo usuario ,vai esta convertida para o formato em números reais " parseFloat " que é números quebrados , sendo que o metodo toFixed() que esta no resultado , vai deixar o número no  máximo com 4 casas decimais , a saida de dados vai imprimir toda informação em formato String , interpolada com a variável "result" . 
                */
        }

    }
    else{

         console.log("Digitou número "+escolha+" :\n");
    }

    console.log(" Saiu do programa !!");
}
































