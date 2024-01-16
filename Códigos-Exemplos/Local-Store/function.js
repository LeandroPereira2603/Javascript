


function save(amount, apr, years,zipcode){
if (window.localStorage) {  // Só fa isso se onavegador suporta
    localStorage.loan_amount = amont;
    localStorage.loan_apr = apr;
    localStorage.loan_years = years;
    localStorage.loan_zipcode = zipcode;

 } 

}

// Tenta restaurar os xampos de entrada automaticamente quando o documento é carregado .
// pela primeira vez .

window.onload = function(){
   // Se o navegador suportar localStorage e temos alguns dados armazenados .
   if(window.localStorage && localStorage.loan_amount){

    document.getElementById("amount").value = localStorage.loan_amount ;
    document.getElementById("apr").value = localStorage.loan_apr;
    document.getElementById("years").value = localStorage.loan_years;
    document.getElementById("zipcode").value = localStorage.loan_zipcode;
  }

};

// Passa a entrada do usuário para um script no lado do servidor que (teoricamente)
// retornar 



function getLenders(amount,apr,years,zipcode){
    // Se o navegador não suporta o objeto XMLHttpRequesr, não 

  if(!window.XMLHttpRequest) return;

  var ad = document.getElementById("leanders");
  if(!ad) return ; // Encerra senão há ponto de saída
  // Codifica a entrada do usuário com parãmetros de 
  // consulta em um URL
  var url = "getLender.php"+
        "?amt=" + encodeURIComponent(amount) +
        "&apr=" + encodeURIComponent(years)+
        "&zip=" + encodeURIComponent(zipcode);        
}

// Busca o conteúdo desse URL usando o objeto XMLHttpRequest
var req = new XMLHttpRequest(); // Inicia UM NOVO pedido
req.open("GET",url);            // Um pedido GET da HTTP ppara o url
req.send(null);                // Envia o pedido sem corpo body

// Antes de retornar , registra uma função de rotina de tratamento de evento que será 
//chamada em um momento posterior , quando a resposta do servidor de HTTP chegar.
// Esse tipo de programação assincrona é muito comum em JavaScript do lado do
// cliente.
req.omreadystatechange = function(){
    if(req.readyState == 4 && req.status == 200) {

    // Se chegamos até aqui , obtivemos uma resposta HTTP válida e completa
    var response = req.responseText;    // Resposta HTTP como string
    var lenders = JSON.parse(resoponse); // Análisa em um array JS

 // Converte o array de objetos lender em uma string HTML 
 var list = "";
 for(var i = 0;i<lenders.lenght;i++){
    list +="<li><a href='"+lenders[i].url + "'>"+
    lenders[i].name +"</a>";
 }

 // Exibe o código HTML no elemento acima .
  ad.innertHTML ="<ul>" + list +"</ul>";

}

}
