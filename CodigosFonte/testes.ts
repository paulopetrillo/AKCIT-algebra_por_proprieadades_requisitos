import { describe, it, expect } from "vitest"; // ou jest

describe("aplicarAssociativa", () => {
  it("(2 + 5) + 7 => 2 + (5 + 7)", () => {
    const r = aplicarAssociativa(7, [2, 5], "direita");
    expect(r.esquerda).toBe(2);
    expect(r.direita).toEqual([5, 7]);
    expect(r.representacao).toBe("2 + (5 + 7)");
  });

  it("(a + b) + c => a + (b + c)", () => {
    const r = aplicarAssociativa("c", ["a", "b"], "direita");
    expect(r.representacao).toBe("a + (b + c)");
  });

  it("c + (a + b) => (c + a) + b (caso espelhado)", () => {
    const r = aplicarAssociativa("c", ["a", "b"], "esquerda");
    expect(r.representacao).toBe("(c + a) + b");
  });

  it("não efetua soma — preserva os termos", () => {
    const r = aplicarAssociativa(7, [2, 5], "direita");
    const termos = [r.esquerda, ...r.direita];
    expect(termos).toEqual([2, 5, 7]); // mesmos termos, apenas reagrupados
  });

  it("funciona com incógnitas misturadas a números", () => {
    const r = aplicarAssociativa(5, ["x", 3], "direita");
    expect(r.representacao).toBe("x + (3 + 5)");
  });
});