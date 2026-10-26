/** Um termo pode ser um número ou uma incógnita (string). */
type Termo = number | string;

/** Um par de termos somados: [primeiraParcela, segundaParcela]. */
type Par = [Termo, Termo];

/** Resultado da aplicação da propriedade associativa. */
interface ResultadoAssociativa {
  /** Novo agrupamento: número único + par reordenado. */
  esquerda: Termo;
  direita: Par;
  /** Representação textual para conferência. */
  representacao: string;
}