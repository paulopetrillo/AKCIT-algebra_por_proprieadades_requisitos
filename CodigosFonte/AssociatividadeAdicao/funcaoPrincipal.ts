/**
 * Aplica a propriedade associativa da adição a uma expressão da forma
 * `(a + b) + c` ou `c + (a + b)`, alterando apenas o agrupamento.
 *
 * NÃO efetua soma — apenas reorganiza os parênteses.
 *
 * @param numeroUnico - O termo isolado (número ou incógnita), ex.: `7` ou `"c"`.
 * @param par - O par de termos somados, ex.: `[2, 5]` ou `["a", "b"]`.
 * @param lado - Onde o número único está em relação ao par:
 *               `"direita"` para `(a + b) + c`, `"esquerda"` para `c + (a + b)`.
 * @returns O novo agrupamento `a + (b + c)` (ou `(c + b) + a` no caso espelhado).
 *
 * @example
 * aplicarAssociativa(7, [2, 5], "direita");
 * // => { esquerda: 2, direita: [5, 7], representacao: "2 + (5 + 7)" }
 *
 * @example
 * aplicarAssociativa("c", ["a", "b"], "direita");
 * // => { esquerda: "a", direita: ["b", "c"], representacao: "a + (b + c)" }
 */
function aplicarAssociativa(
  numeroUnico: Termo,
  par: Par,
  lado: "direita" | "esquerda" = "direita"
): ResultadoAssociativa {
  const [primeira, segunda] = par;

  if (lado === "direita") {
    // (a + b) + c  =>  a + (b + c)
    // Parcela "mais próxima" do número único é a segunda (b).
    return {
      esquerda: primeira,
      direita: [segunda, numeroUnico],
      representacao: `${fmt(primeira)} + (${fmt(segunda)} + ${fmt(numeroUnico)})`,
    };
  }

  // c + (a + b)  =>  (c + a) + b
  // Parcela "mais próxima" do número único é a primeira (a).
  return {
    esquerda: segunda,
    direita: [numeroUnico, primeira],
    representacao: `(${fmt(numeroUnico)} + ${fmt(primeira)}) + ${fmt(segunda)}`,
  };
}

/** Formata um termo para representação textual (sem avaliar). */
function fmt(t: Termo): string {
  return typeof t === "number" ? String(t) : t;
}