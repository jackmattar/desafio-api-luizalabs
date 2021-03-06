# Desafio API Luizalabs - Node

## Índice

* [1. API Luizalabs](#1-desafio-api-luizalabs)
* [2. Como utilizar](#2-como-utilizar)
* [3. Endpoints](#3-endpoints)
* [4. Tecnologias usadas](#4-tecnologias-usadas)

***

## 1. Desafio API Luizalabs

Este projeto consiste no desenvolvimento de uma API de serviços com estrutura MVC (Model View Controller) que serve JSON através de uma conexão HTTP. A base de dados e os endpoints correspondem ao serviço de criação de uma lista de produtos favoritos de determinado cliente.

## 2. Como utilizar

A aplicação pode ser usada localmente, é necessário fazer a instalação de todas as dependências citadas no item [4. Tecnologias usadas](#4-tecnologias-usadas).
Após todas as dependências instaladas, certifique-se de configurar os dados do seu MySql no arquivo config.json no caminho /api/config/config.json, com os dados da sua conexão, porta e usuário a ser usado em seu banco de dados.

Com as dependências instaladas e o banco de dados configurados, rodar os seguintes comandos:

`npx sequelize-cli db:migrate` - cria as tabelas no mysql

Caso queira popular com dados iniciais: (Atenção: precisa ser nesta sequência, por conta de geração de chaves estrangeiras)
`sequelize db:seed --seed clientes`
`sequelize db:seed --seed wishlists`
`sequelize db:seed --seed products`

E por fim:

`npm star`

Pronto, sua aplicação estará rodando.

ATENÇÃO: A duração da autenticação é de 6 minutos, após este tempo é necessário efetuar nova autenticação.

## 3. Endpoints

## Aberta a todos :

### `/login`
#### Aberta a todos :
* `POST /login`
   Login padrão mocado {"user": "root", "password": "admin"}
   
### `/logout`
* `POST /logout`

### `/clientes`
* `POST /clientes`
   Cria novo cliente ex: {"nome": 'Jhon, "email": teste@teste"}, se não existir cadastro com mesmo e-mail
   
## Necessita autenticação:

### `/clientes`
* `GET /clients/:id`
* `PUT /clientes/:id`
* `DELETE /clientes/:id`

### `favoritos`

* `GET /favoritos/:clienteId`
   Lista todos os produtos da lista de um cliente
   
* `GET /favoritos/:clienteId/:productId`
   Lista todos os dados de produto específico na lista do cliente
   
* `POST /favoritos/:clienteId/:productId`
   Adiciona o produto na lista do cliente se existente e se não duplicado
   
* `DELETE /favoritos/:clienteId/:productId`
   Deleta produto da lista de um cliente

## 4. Tecnologias usadas

### Node e dependencias npm

* express
* node-localstorage
* body-parser
* axios
* jsonwebtoken
* dotenv-safe
* Nodemon
* mysql2
* sequelize, sequelize-cli, path


### Tecnologias
  * Node.js
  * Mysql
  * Postman
