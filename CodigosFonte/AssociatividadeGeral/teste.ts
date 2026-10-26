import { describe, it, expect } from "vitest"; // ou jest

describe("aplicarAssociativa (estendida)", () => {
  describe("soma", () => {
    it("(2 + 5) + 7 => 2 + (5 + 7)", () => {
      const r = aplicarAssociativa("soma", 7, [2, 5], "direita");
      expect(r.esquerda).toBe(2);
      expect(r.direita).toEqual([5, 7]);
      expect(r.representacao).toBe("2 + (5 + 7)");
    });

    it("(a + b) + c => a + (b + c)", () => {
      const r = aplicarAssociativa("soma", "c", ["a", "b"], "direita");
      expect(r.representacao).toBe("a + (b + c)");
    });

    it("c + (a + b) => (c + a) + b (espelhado)", () => {
      const r = aplicarAssociativa("soma", "c", ["a", "b"], "esquerda");
      expect(r.representacao).toBe("(c + a) + b");
    });
  });

  describe("multiplicacao", () => {
    it("(2 × 5) × 7 => 2 × (5 × 7)", () => {
      const r = aplicarAssociativa("multiplicacao", 7, [2, 5], "direita");
      expect(r.esquerda).toBe(2);
      expect(r.direita).toEqual([5, 7]);
      expect(r.representacao).toBe("2 × (5 × 7)");
    });

    it("(a × b) × c => a × (b × c)", () => {
      const r = aplicarAssociativa("multiplicacao", "c", ["a", "b"], "direita");
      expect(r.representacao).toBe("a × (b × c)");
    });

    it("c × (a × b) => (c × a) × b (espelhado)", () => {
      const r = aplicarAssociativa("multiplicacao", "c", ["a", "b"], "esquerda");
      expect(r.representacao).toBe("(c × a) × b");
    });
  });

  describe("propriedades invariantes", () => {
    it("não efetua a operação — preserva os termos (soma)", () => {
      const r = aplicarAssociativa("soma", 7, [2, 5], "direita");
      expect([r.esquerda, ...r.direita]).toEqual([2, 5, 7]);
    });

    it("não efetua a operação — preserva os termos (multiplicação)", () => {
      const r = aplicarAssociativa("multiplicacao", 7, [2, 5], "direita");
      expect([r.esquerda, ...r.direita]).toEqual([2, 5, 7]);
    });

    it("mantém a operação no resultado", () => {
      expect(aplicarAssociativa("soma", 1, [2, 3]).operacao).toBe("soma");
      expect(aplicarAssociativa("multiplicacao", 1, [2, 3]).operacao).toBe(
        "multiplicacao"
      );
    });
  });
});