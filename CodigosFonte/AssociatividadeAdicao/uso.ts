// Exemplo do enunciado: (2 + 5) + 7  =>  2 + (5 + 7)
console.log(aplicarAssociativa(7, [2, 5], "direita").representacao);
// "2 + (5 + 7)"

// Com incógnitas: (a + b) + c  =>  a + (b + c)
console.log(aplicarAssociativa("c", ["a", "b"], "direita").representacao);
// "a + (b + c)"

// Caso espelhado: c + (a + b)  =>  (c + a) + b
console.log(aplicarAssociativa("c", ["a", "b"], "esquerda").representacao);
// "(c + a) + b"

// Misturando número e incógnita: (x + 3) + 5  =>  x + (3 + 5)
console.log(aplicarAssociativa(5, ["x", 3], "direita").representacao);
// "x + (3 + 5)"