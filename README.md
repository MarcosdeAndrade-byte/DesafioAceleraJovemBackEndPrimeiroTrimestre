# <img src="https://img.icons8.com/external-flat-amoghdesign/32/000000/external-flame-olympic-games-flat-amoghdesign.png"/> Desafio Acelera Jovem Back End 1º Trimestre <img src="https://img.icons8.com/external-flat-amoghdesign/32/000000/external-flame-olympic-games-flat-amoghdesign.png"/>

Parabéns por ter concluído o seu primeiro trimestre como Acelera Jovem.

Abaixo o desafio que você deverá concluir para validar seus conhecimentos.

## 😀 API com CRUD de usuários

- Você deverá criar um projeto de API utilizando Node.JS + a biblioteca Express.
- O projeto se trata de uma API que faz o gerenciamento de usuários. A API deverá realizar as seguintes funcionalidades:
    - Cadastrar usuário (utilizar banco em memória)
    - Leitura de todos os usuários
    - Leitura de usuário específico
    - Deletar usuário
    - Atualizar usuário
- Os campos do objeto usuário ficam ao seu critério.
- Você deverá documentar a API utilizando o Swagger
- Lembre-se de manter o código organizado e legível.

Ao finalizar, gere um zip do seu projeto e envie ao time de People.

Boa sorte! 🥳

## 👊 Feedbacks:
- Manteve simples. Resolveu o que foi proposto sem inventar moda
- Ótimo entendimento de: Model, Repositories, Interfaces, funções nativas do javascript
- Ficou show a separação das responsabilidades do código, isolando adapters, regras de negócios, interação com banco de dados

## 🤗 Melhorias:
- Delete e Update usar o 204
- Não precisa colocar /create ou /list, pois por padrão um POST na / já é um create e um GET na /list já é um list
- Para retornar uma lista, pode retornar apenas o array
- Para retornar um item, pode ser só o objeto
- Pra update, pode usar o PUT. O PATCH geralmente é pra quando é pequena alteração. Ex: upload de avatar. Mas se puder dar update em tudo, usa-se o PUT
- O update está funcionando apenas para o e-mail, o ideal é funcionar para todos os campos. E o ideal é encontrar pelo ID.
