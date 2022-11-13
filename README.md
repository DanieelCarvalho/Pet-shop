    Formação: React (Celcoin) Desafio Final

    - Para rodar a página é preciso dar um npm rum json no terminal 

- **🎯 Objetivo:** Desenvolver o front-end de um e-commerce (tema livre).
- **✅ Requisitos:**
    - O sistema precisa ser responsivo e desenvolvido em React.
    - Dados como senhas, chaves de API, URLS de acesso e afins devem ser inseridos dentro de um arquivo `.env`.
    - O sistema deve permitir que o usuário acumule os itens dentro de um carrinho de compras antes de fechar o seu pedido.
        - Cada item deve ter uma página com detalhes sobre ele.
        - Nesta página de detalhes, deve ser possível escolher a quantidade que o usuário deseja inserir no carrinho (ilimitado).
    - O sistema deve conter pelo menos 20 itens divididos em pelo menos 3 categorias diferentes. Os produtos dentro das categorias devem ser possíveis de filtrar de alguma forma (dropdown, busca, etc).
        - Use o [json-server](https://www.npmjs.com/package/json-server) para simular o back-end com os produtos.
    - O sistema deve exigir o nome completo, e-mail, data de nascimento e endereço do usuário.
        - O endereço deve usar a API do [ViaCep](https://viacep.com.br/) para ser preenchido por meio do CEP fornecido pelo usuário.
    - O sistema deve possuir uma tela final de revisão do pedido onde devem conter:
        - Os itens selecionados.
        - O preço total.
        - Os dados de endereço.
        - **Não é necessário fazer a parte de pagamento. Ao fechar o pedido basta dizer na tela que o pedido foi confirmado.**