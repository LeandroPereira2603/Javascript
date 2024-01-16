

if (!log){

    log = document.createElement("div");  // Cria um novo elemento <div>
    log.id = "debuglog";                  // Define o atribuo de indentificaação HTML
    log.innerHtml ="<h1>Debug Log</h1>";  // Define o contéudo inicial 
    document.body.appendChild(log);       // Adiciona=o no final do documento

}

// Agora, coloca a mensagem em seu próprio <pre> e a anexa no log .

var pre = documet.createElement("pre");  // Cria uma marca <pre>
var msg ="text";
var text = document.createTextNode(msg);  // Coloca a msg em nó de texto .
pre.appendChild(text);                    // Adiciona o texto no <pre>
log.appendChild(pre);                    // Adiciona <pre> no log .
function hide(e, reflow) {      // Se o 2° argumento é verdadeiro .

if (reflow) {
e.style.display ="none";    // Oculta o elemento e utiliiza seu espaço .

}

else {
    e.style.visibility ="hidden";   // torna e invisivel, mas deixa seu espaço
   }

}

function highlight(e) { 

// Destaca e, definido uma classe CSS.
// ISSO presume que uma folha de estilos CSS já define a classse "hilite";

if(!e.className) e.className ="hilite";
else e.className +="hilite";

}



