/** Operações associativas suportadas. */
type OperacaoAssociativa = "soma" | "multiplicacao";

/** Um termo pode ser um número ou uma incógnita (string). */
type Termo = number | string;

/** Um par de termos operados: [primeiro, segundo]. */
type Par = [Termo, Termo];

/** Lado em que o termo único está em relação ao par. */
type Lado = "direita" | "esquerda";

/** Resultado da aplicação da propriedade associativa. */
interface ResultadoAssociativa {
  operacao: OperacaoAssociativa;
  /** Termo único isolado no novo agrupamento. */
  esquerda: Termo;
  /** Par reagrupado no novo agrupamento. */
  direita: Par;
  /** Representação textual para conferência. */
  representacao: string;
}