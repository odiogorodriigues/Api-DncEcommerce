# API DNCommerce

Bem-vindo à API DNCommerce! Esta API permite gerenciar clientes, produtos, estoque, pedidos e vendas de uma loja online. Abaixo você encontrará detalhes sobre a modelagem de dados, as rotas disponíveis e como usar a API.

## Índice

- [Introdução](#introdução)
- [Modelagem de Dados](#modelagem-de-dados)
- [Rotas da API](#rotas-da-api)
  - [Clientes](#clientes)
  - [Produtos](#produtos)
  - [Estoque](#estoque)
  - [Pedidos](#pedidos)
  - [Vendas](#vendas)
- [Como Usar](#como-usar)
- [Instalação](#instalação)
- [Autor](#autor)

## Introdução

Esta API foi desenvolvida para facilitar a gestão de um e-commerce, permitindo operações CRUD em clientes, produtos, estoque, pedidos e vendas. Ela é projetada para ser fácil de usar e integrar com outras partes do sistema de e-commerce.

## Modelagem de Dados

A modelagem de dados foi feita para representar as entidades principais do e-commerce e suas relações. Abaixo estão os detalhes das tabelas e suas relações:

![Modelagem de Dados](https://github.com/odiogorodriigues/Api-DncEcommerce/assets/125144716/c0e05a67-2cda-47f9-bf11-156e2d9faba4)

### Tabelas

- **Clientes**
  - `cliente_id` (PK)
  - `nome`
  - `email`
  - `telefone`
  - `endereco`
  - `data_criacao`

- **Produtos**
  - `produto_id` (PK)
  - `nome`
  - `descricao`
  - `preco`
  - `categoria`
  - `data_criacao`

- **Estoque**
  - `estoque_id` (PK)
  - `produto_id` (FK)
  - `quantidade`
  - `localizacao`

- **Pedidos**
  - `pedido_id` (PK)
  - `cliente_id` (FK)
  - `data_pedido`
  - `status`

- **Vendas**
  - `venda_id` (PK)
  - `pedido_id` (FK)
  - `produto_id` (FK)
  - `quantidade`
  - `preco_venda`
  - `data_venda`

### Relações

- **Clientes para Pedidos**: 1:N
- **Pedidos para Vendas**: 1:N
- **Produtos para Vendas**: N:N (com tabela intermediária `Vendas`)
- **Produtos para Estoque**: 1:1

## Rotas da API

### Clientes

- **GET /clientes**: Retorna a lista de todos os clientes.
- **GET /clientes/{cliente_id}**: Retorna os detalhes de um cliente específico.
- **POST /clientes**: Cria um novo cliente.
- **PUT /clientes/{cliente_id}**: Atualiza as informações de um cliente específico.
- **DELETE /clientes/{cliente_id}**: Deleta um cliente específico.

### Produtos

- **GET /produtos**: Retorna a lista de todos os produtos.
- **GET /produtos/{produto_id}**: Retorna os detalhes de um produto específico.
- **POST /produtos**: Cria um novo produto.
- **PUT /produtos/{produto_id}**: Atualiza as informações de um produto específico.
- **DELETE /produtos/{produto_id}**: Deleta um produto específico.

### Estoque

- **GET /estoque**: Retorna a lista de todos os estoques.
- **GET /estoque/{estoque_id}**: Retorna os detalhes de um estoque específico.
- **POST /estoque**: Cria um novo registro de estoque.
- **PUT /estoque/{estoque_id}**: Atualiza as informações de um estoque específico.
- **DELETE /estoque/{estoque_id}**: Deleta um registro de estoque específico.

### Pedidos

- **GET /pedidos**: Retorna a lista de todos os pedidos.
- **GET /pedidos/{pedido_id}**: Retorna os detalhes de um pedido específico.
- **POST /pedidos**: Cria um novo pedido.
- **PUT /pedidos/{pedido_id}**: Atualiza as informações de um pedido específico.
- **DELETE /pedidos/{pedido_id}**: Deleta um pedido específico.

### Vendas

- **GET /vendas**: Retorna a lista de todas as vendas.
- **GET /vendas/{venda_id}**: Retorna os detalhes de uma venda específica.
- **POST /vendas**: Cria um novo registro de venda.
- **PUT /vendas/{venda_id}**: Atualiza as informações de uma venda específica.
- **DELETE /vendas/{venda_id}**: Deleta um registro de venda específico.

## Como Usar

Para usar a API com o Insomnia, siga os passos abaixo para configurar suas requisições.

### Configurando uma Requisição no Insomnia

1. **GET /clientes**
   - Abra o Insomnia e crie uma nova requisição.
   - Selecione o método `GET`.
   - Insira a URL: `http://localhost:5050/clientes`.
   - Clique em "Send" para obter a lista de clientes.

![Insomnia GET Clientes](https://github.com/odiogorodriigues/Api-DncEcommerce/assets/125144716/4ebd1292-fecc-47eb-8708-c456e46abfea)

2. **POST /clientes**
   - Crie uma nova requisição e selecione o método `POST`.
   - Insira a URL: `http://localhost:5050/clientes`.
   - Vá para a aba "Body" e selecione "JSON".
   - Insira o corpo da requisição com os dados do novo cliente:
     ```json
     {
       "nome": "João Silva",
       "email": "joao@exemplo.com",
       "telefone": "5269-9874",
       "endereco": "Rua A, 123"
     }
     ```
   - Clique em "Send" para criar o novo cliente.

![Insomnia POST Clientes](https://github.com/odiogorodriigues/Api-DncEcommerce/assets/125144716/732c1997-5918-472d-90fd-67ae83c975ae)

Repita esses passos para configurar as outras requisições, adaptando o método HTTP, a URL e o corpo conforme necessário para cada rota.

## Instalação

Para instalar e rodar a API localmente:

1. Clone o repositório:

```sh
git clone https://github.com/odiogorodriigues/Api-DncEcommerce.git
```

2. Instale as dependências:

```sh
cd api-dncecommerce
npm install
```

3. Configure o banco de dados no arquivo `.env`.

4. Inicie o servidor:

```sh
npm start
```

## Autor

Este projeto foi desenvolvido por [Diogo Rodrigues](github.com/odiogorodriigues).