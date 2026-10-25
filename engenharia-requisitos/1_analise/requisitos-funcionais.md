# Requisitos Funcionais

| ID | Requisito | Prioridade | Origem |
|----|-----------|-----------|--------|
| RF01 | Permitir inserir equação do 1º grau (`ax + b = cx + d`). | Alta | Item 1 |
| RF02 | Permitir selecionar o conjunto universo (ℕ, ℤ, ℚ). | Alta | Item 3.3 |
| RF03 | Exibir a equação em formato algébrico estruturado. | Alta | Item 1 |
| RF04 | Permitir aplicar, passo a passo, cada propriedade algébrica explicitamente. | Alta | Item 1 / 3.4 |
| RF05 | Validar se a propriedade escolhida é aplicável ao estado atual e ao universo. | Alta | 3.4 |
| RF06 | Bloquear operações que violem o fechamento do universo. | Alta | 3.1 / 3.3 |
| RF07 | Registrar e exibir histórico de passos com justificativa. | Alta | 3.4 |
| RF08 | Indicar quando a variável foi isolada e apresentar o conjunto solução. | Alta | 3.2 |
| RF09 | Verificar pertinência da solução ao universo e informar ausência de solução. | Alta | 3.2 / 3.3 |
| RF10 | Permitir trocar o universo e reprocessar a partir de estado salvo. | Média | 3.2 |
| RF11 | Apresentar propriedades aplicáveis no passo corrente (sem resolver). | Média | D02 |
| RF12 | Permitir desfazer (undo) o último passo. | Média | — |
| RF13 | Validar sintaticamente a equação de entrada. | Alta | — |

## Rastreabilidade com Regras de Negócio
- RF04, RF05, RF07 → RN01, RN07, RN09
- RF05, RF06, RF09 → RN02, RN03, RN04, RN05, RN08
- RF11 → RN06

## Observações
- RF de 2º grau (seções 3.5/3.6) **não incluídos** por inconsistência de escopo (D01).
- Nível de assistência (validar vs. sugerir) pendente (D02).