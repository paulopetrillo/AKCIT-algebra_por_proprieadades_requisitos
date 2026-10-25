# Regras de Negócio

| ID | Regra | Justificativa / Origem |
|----|-------|------------------------|
| RN01 | Toda transformação deve ser justificada por uma propriedade da igualdade ou operacional do universo vigente. | Item 1 / 3.4 |
| RN02 | O conjunto universo define operações e elementos válidos; solução só é válida se pertencer ao universo. | 3.3 |
| RN03 | Em ℕ: sem subtração/divisão fechadas, sem opostos, sem inversos. Bloquear operações que os exijam. | 3.1 |
| RN04 | Em ℤ: há inverso aditivo, mas não inverso multiplicativo. Bloquear divisões que exijam inverso. | 3.2 |
| RN05 | Em ℚ: há inverso aditivo e multiplicativo; frações/decimais válidos. | 3.2 |
| RN06 | O sistema não resolve a equação pelo participante; apenas valida e registra. | Item 1 |
| RN07 | Proibida terminologia prática ("passa para o outro lado", "corta") nas justificativas. | Item 1 |
| RN08 | Solução fora do universo → declarar "não há solução em [conjunto]" e permitir troca de universo. | 3.2 / 3.3 |
| RN09 | A ordem das propriedades deve respeitar a aplicabilidade (pré-condições). | 3.4 |

## Tabela de Decisão — Validação por Universo

| Operação / Elemento | ℕ | ℤ | ℚ |
|---------------------|----|----|----|
| Adição (fechamento) | ✔ | ✔ | ✔ |
| Subtração (fechamento) | ✘ | ✔ | ✔ |
| Inverso aditivo (oposto) | ✘ | ✔ | ✔ |
| Divisão (fechamento) | ✘ | ✘ | ✔ |
| Inverso multiplicativo | ✘ | ✘ | ✔ |
| Fração/decimal como solução | ✘ | ✘ | ✔ |
| Negativo como solução | ✘ | ✔ | ✔ |