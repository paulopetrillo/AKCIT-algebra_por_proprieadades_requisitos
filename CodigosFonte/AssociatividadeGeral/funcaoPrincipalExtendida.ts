/**
 * Aplica a propriedade associativa (adição ou multiplicação) a uma expressão
 * da forma `(a op b) op c` ou `c op (a op b)`, alterando apenas o agrupamento.
 *
 * NÃO efetua a operação — apenas reorganiza os parênteses.
 *
 * @param operacao - `"soma"` ou `"multiplicacao"`.
 * @param termoUnico - O termo isolado (número ou incógnita), ex.: `7` ou `"c"`.
 * @param par - O par de termos operados, ex.: `[2, 5]` ou `["a", "b"]`.
 * @param lado - Onde o termo único está em relação ao par:
 *               `"direita"` para `(a op b) op c`, `"esquerda"` para `c op (a op b)`.
 * @returns O novo agrupamento com a operação e a representação textual.
 *
 * @example
 * aplicarAssociativa("soma", 7, [2, 5], "direita");
 * // => { operacao: "soma", esquerda: 2, direita: [5, 7],
 * //      representacao: "2 + (5 + 7)" }
 *
 * @example
 * aplicarAssociativa("multiplicacao", "c", ["a", "b"], "direita");
 * // => { operacao: "multiplicacao", esquerda: "a", direita: ["b", "c"],
 * //      representacao: "a × (b × c)" }
 */
function aplicarAssociativa(
  operacao: OperacaoAssociativa,
  termoUnico: Termo,
  par: Par,
  lado: Lado = "direita"
): ResultadoAssociativa {
  const [primeiro, segundo] = par;
  const op = simbolo(operacao);

  if (lado === "direita") {
    // (a op b) op c  =>  a op (b op c)
    // Termo "mais próximo" do único é o segundo (b).
    return {
      operacao,
      esquerda: primeiro,
      direita: [segundo, termoUnico],
      representacao: `${fmt(primeiro)} ${op} (${fmt(segundo)} ${op} ${fmt(termoUnico)})`,
    };
  }

  // c op (a op b)  =>  (c op a) op b
  // Termo "mais próximo" do único é o primeiro (a).
  return {
    operacao,
    esquerda: segundo,
    direita: [termoUnico, primeiro],
    representacao: `(${fmt(termoUnico)} ${op} ${fmt(primeiro)}) ${op} ${fmt(segundo)}`,
  };
}

/** Formata um termo para representação textual (sem avaliar). */
function fmt(t: Termo): string {
  return typeof t === "number" ? String(t) : t;
}