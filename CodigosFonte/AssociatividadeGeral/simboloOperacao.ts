/** Mapeia a operação para seu símbolo textual. */
function simbolo(op: OperacaoAssociativa): string {
  switch (op) {
    case "soma":
      return "+";
    case "multiplicacao":
      return "×";
    default: {
      // Exaustividade: se uma nova operação for adicionada, o TS acusa aqui.
      const _exhaustive: never = op;
      throw new Error(`Operação não suportada: ${_exhaustive}`);
    }
  }
}