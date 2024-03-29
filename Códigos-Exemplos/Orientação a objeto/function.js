
// Define uma função construtura para inicializar um novo objeto

function Point (x,y){          // Por convenção , as construtoras coomeçam com letra maiúsculas .

    this.x = x;                // A palavra-chave this é o novo objeto que está sendo inicializado .
    this.y = y;                // Armazena os argumentos da função com a proprriedade objeto.
                               // Nenhum return é necessário .
}

// Usa uma função construtura com a palavra-chave "new" para criar instâncias .

var p = new Point(1,1);        // O ponto geométrico (1,1) .

// Define métodos para objetos Point atribuindo-o ao objeto .
// Prototype associado á função construtora.

Point.prototype.r = function() {
    return Math.sqrt(          // Retorna a raiz quadrada de x² + y² .

        this.x * this.x +      // Este é o objeto Point no qual o método ...
        this.y * this.y       // ... é chamado .
    );

};

// Agora o objeto Point b ( e todos os futuros objetos Point) herda o método r()

console.log(p.r());                   // retorna : 1,414