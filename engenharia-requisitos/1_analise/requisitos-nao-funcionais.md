# Requisitos Não Funcionais

| ID | Categoria | Requisito | Critério Verificável |
|----|-----------|-----------|----------------------|
| RNF01 | Usabilidade | Interface didática, terminologia matemática formal. | Inspeção de textos: ausência de "passa para o outro lado"/"corta". |
| RNF02 | Usabilidade | Indicar visualmente propriedades aplicáveis. | Teste de usabilidade: aluno identifica próxima ação. |
| RNF03 | Correção | Toda transformação aceita deve ser matematicamente válida. | Suíte de testes com casos de cada propriedade/universo. |
| RNF04 | Desempenho | Validação de passo < 1 s. | Medição em equações típicas. |
| RNF05 | Confiabilidade | Histórico persistente na sessão; undo consistente. | Testes de undo encadeado. |
| RNF06 | Portabilidade | (A confirmar — D05) Web responsiva. | Testes em navegadores modernos. |
| RNF07 | Acessibilidade | (A confirmar — D05) WCAG 2.1 AA mínimo. | Auditoria automatizada + manual. |
| RNF08 | i18n | pt-BR; renderização correta de notação matemática. | Revisão visual de frações/expoentes/símbolos. |
| RNF09 | Manutenibilidade | Catálogo de propriedades extensível via configuração. | Adicionar nova propriedade sem alterar motor. |
| RNF10 | Rastreabilidade | Cada passo referencia ID/nome da propriedade. | Inspeção do histórico. |
| RNF11 | Privacidade | (A confirmar — D05) Conformidade LGPD. | Revisão jurídica. |

## Pendências
Itens marcados "A confirmar" dependem de decisões em `duvidas-e-lacunas.md`.