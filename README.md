# ONG Esperança

Projeto institucional responsivo da ONG Esperança, desenvolvido com HTML5 e CSS puro.

## Arquivos principais

- `index.html`: página inicial da ONG.
- `cadastro.html`: formulário de cadastro de voluntários e apoiadores.
- `styles.css`: estilos compartilhados entre as páginas.
- `assets/img/acao-comunitaria.webp`: versão otimizada em WebP.
- `assets/img/acao-comunitaria.png`: versão alternativa em PNG.

## Recursos usados no formulário

O formulário foi organizado com `fieldset` e `legend` e utiliza validações nativas do HTML5, incluindo `required`, `minlength`, `maxlength`, `type="email"`, `type="date"` e `pattern`.

Padrões de entrada:

- CPF: `000.000.000-00`
- Telefone: `(00) 00000-0000`
- CEP: `00000-000`

As imagens são carregadas com o elemento `picture`, priorizando WebP e mantendo PNG como alternativa.

## Como visualizar

Abra o arquivo `index.html` diretamente no navegador. Não há dependências ou processo de build.
## Formulário

O projeto possui um formulário de cadastro de voluntários com validação em JavaScript e armazenamento de dados com localStorage.