## Feedbacks
- Manteve simples. Resolveu o que foi proposto sem inventar moda
- Ótimo entendimento de: Model, Repositories, Interfaces, funções nativas do javascript
- Ficou show a separação das responsabilidades do código, isolando adapters, regras de negócios, interação com banco de dados

Melhorias
- Delete e Update usar o 204
- Não precisa colocar /create ou /list, pois por padrão um POST na / já é um create e um GET na /list já é um list
- Para retornar uma lista, pode retornar apenas o array
- Para retornar um item, pode ser só o objeto
- Pra update, pode usar o PUT. O PATCH geralmente é pra quando é pequena alteração. Ex: upload de avatar. Mas se puder dar update em tudo, usa-se o PUT
- O update está funcionando apenas para o e-mail, o ideal é funcionar para todos os campos. E o ideal é encontrar pelo ID.
