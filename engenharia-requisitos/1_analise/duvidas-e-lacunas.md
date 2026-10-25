# Dúvidas, Ambiguidades e Lacunas

| ID | Tipo | Descrição | Stakeholder a Consultar | Impacto |
|----|------|-----------|--------------------------|---------|
| D01 | Inconsistência de escopo | Item 1 fala só em 1º grau; seções 3.5/3.6 detalham 2º grau. O 2º grau está no escopo? | Participante / Produto | Alto |
| D02 | Ambiguidade | O sistema valida a propriedade escolhida ou sugere a próxima? Qual o nível de assistência? | Participante | Alto |
| D03 | Ambiguidade | Formato de entrada: texto livre, editor estruturado ou seleção de termos? | Participante / UX | Médio |
| D04 | Lacuna | Perfis de usuário (aluno/professor/admin) e autenticação não definidos. | Produto | Médio |
| D05 | Lacuna | Plataforma, persistência, acessibilidade, idioma e LGPD não definidos. | TI / Produto | Alto |
| D06 | Lacuna | Relatórios/exportação do histórico (ex.: PDF) não elicitados. | Participante / Professor | Baixo |
| D07 | Ambiguidade | O universo pode ser alterado no meio da resolução? A partir de qual estado? | Participante | Médio |
| D08 | Lacuna | Critérios de aceitação e casos de teste não elicitados. | TI / QA | Médio |
| D09 | Ambiguidade | Permitir propriedades válidas que não avançam a resolução (ex.: somar 0)? | Participante | Baixo |
| D10 | Lacuna | Como tratar equações sem solução e identidades (`0x = 0`, `0x = 5`)? | Participante | Médio |
| D11 | Ambiguidade | Menção a Symbolab/MathPapa/WolframAlpha é inspiração de UX ou integração? | Produto | Baixo |
| D12 | Lacuna | Métricas de sucesso pedagógico e testes com usuários não definidos. | Produto / Pedagógico | Médio |

## Próximos Passos Sugeridos
1. Reunião com o participante para resolver D01, D02, D07, D09, D10.
2. Reunião com TI/Produto para D04, D05, D06, D11, D12.
3. Após decisões, atualizar RFs/RNFs/RNs e produzir critérios de aceitação (BDD).