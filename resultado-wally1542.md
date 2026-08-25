Data de atualização: Dia 25/8/2026 às 16:55 

| Questão | Teste | Entregue | Correto | Mensagem de Erro |
|---------|-------|----------|---------|------------------|
| AtvBotaoAcaoExterna Component | deve exibir um p com o texto "Clique abaixo" | ✅ | ✅ | Sem erros |
| AtvBotaoAcaoExterna Component | deve exibir um button com o texto "Clique aqui" | ✅ | ❌ | Error: Unable to find role="button" and name "Clique aqui" |
| AtvBotaoAcaoExterna Component | deve executar a função comando ao clicar no botão | ✅ | ❌ | Error: Unable to find role="button" and name "Clique aqui" |
| AtvBotaoAcaoInterna Component | deve exibir um p com o texto "Clique abaixo" | ✅ | ✅ | Sem erros |
| AtvBotaoAcaoInterna Component | deve exibir um button com o texto "Clique aqui" | ✅ | ✅ | Sem erros |
| AtvBotaoAcaoInterna Component | deve exibir um p e um button dentro de uma div | ✅ | ✅ | Sem erros |
| AtvBotaoAcaoInterna Component | deve exibir um alerta com o texto "Fui clicado!" ao clicar no botão | ✅ | ❌ | AssertionError: expected "bound " to be called with arguments: [ 'Fui clicado!' ][90m |
| AtvDivisoria Component | deve renderizar a div principal com 90vw de largura | ✅ | ✅ | Sem erros |
| AtvDivisoria Component | deve renderizar duas divs internas lado a lado | ✅ | ❌ | AssertionError: expected  to have a length of 2 but got +0 |
| AtvDivisoria Component | deve definir a largura correta para a div esquerda quando largura = 30 | ✅ | ❌ | Error: [2mexpect([22m[31mreceived[39m[2m).toHaveStyle()[22m |
| AtvDivisoria Component | deve definir a largura correta para a div esquerda quando largura = 10 | ✅ | ❌ | Error: [2mexpect([22m[31mreceived[39m[2m).toHaveStyle()[22m |
| AtvDivisoria Component | deve definir a largura correta para a div esquerda quando largura = 90 | ✅ | ❌ | Error: [2mexpect([22m[31mreceived[39m[2m).toHaveStyle()[22m |
| AtvDivisoria Component | deve retornar null quando a largura for menor que 10 | ✅ | ❌ | Error: [2mexpect([22m[31melement[39m[2m).toBeEmptyDOMElement()[22m |
| AtvDivisoria Component | deve retornar null quando a largura for maior que 90 | ✅ | ❌ | Error: [2mexpect([22m[31melement[39m[2m).toBeEmptyDOMElement()[22m |
| AtvDivisoria Component | deve retornar null quando a largura não for um número | ✅ | ❌ | Error: [2mexpect([22m[31melement[39m[2m).toBeEmptyDOMElement()[22m |
| AtvDivisoria Component | deve retornar null quando a largura for undefined | ✅ | ❌ | Error: [2mexpect([22m[31melement[39m[2m).toBeEmptyDOMElement()[22m |
| AtvDivisoria Component | deve manter a proporção correta para diferentes valores de largura | ✅ | ❌ | Error: [2mexpect([22m[31mreceived[39m[2m).toHaveStyle()[22m |
| AtvParagrafo | Renderiza uma div com um h1 e um p dentro de si | ✅ | ❌ | Error: Unable to find an element with the text: Título de Exemplo. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible. |
| AtvParagrafo | deve renderizar o título como h1 com tamanho de fonte 32px | ✅ | ❌ | Error: Unable to find an element with the text: Título Teste. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible. |
| AtvParagrafo | deve renderizar o título com o conteúdo "Título teste" | ✅ | ❌ | Error: Unable to find an element with the text: Título Teste. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible. |
| AtvParagrafo | deve renderizar o conteúdo como P com tamanho de fonte 16px | ✅ | ❌ | Error: Unable to find an element with the text: Conteúdo teste. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible. |
| AtvParagrafo | deve renderizar o conteúdo com o conteúdo "Título teste" | ✅ | ❌ | Error: Unable to find an element with the text: Conteúdo teste. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible. |
