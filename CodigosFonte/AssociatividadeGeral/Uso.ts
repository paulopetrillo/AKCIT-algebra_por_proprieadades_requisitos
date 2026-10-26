// Soma: (2 + 5) + 7  =>  2 + (5 + 7)
console.log(
  aplicarAssociativa("soma", 7, [2, 5], "direita").representacao
);
// "2 + (5 + 7)"

// Soma com incógnitas: (a + b) + c  =>  a + (b + c)
console.log(
  aplicarAssociativa("soma", "c", ["a", "b"], "direita").representacao
);
// "a + (b + c)"

// Multiplicação: (x × 3) × 5  =>  x × (3 × 5)
console.log(
  aplicarAssociativa("multiplicacao", 5, ["x", 3], "direita").representacao
);
// "x × (3 × 5)"

// Multiplicação com incógnitas: (a × b) × c  =>  a × (b × c)
console.log(
  aplicarAssociativa("multiplicacao", "c", ["a", "b"], "direita").representacao
);
// "a × (b × c)"

// Caso espelhado na soma: c + (a + b)  =>  (c + a) + b
console.log(
  aplicarAssociativa("soma", "c", ["a", "b"], "esquerda").representacao
);
// "(c + a) + b"

// Caso espelhado na multiplicação: c × (a × b)  =>  (c × a) × b
console.log(
  aplicarAssociativa("multiplicacao", "c", ["a", "b"], "esquerda").representacao
);
// "(c × a) × b"