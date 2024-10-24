
# Desafio técnico Umentor

Stacks:
- Docker
- Laravel
- React com Vite
- Tailwind
- MySql


## Instalação

Clonar o projeto
`git@github.com:Daivison06/umentor.git`

Rodar o projeto

`cd umentor`

`docker-compose up --build`

## Obs
O processo de build incluí a execução da migrations e o seed do database.

## Url
Backend http://localhost:8080/api/users

Frontend http://localhost:5173

## Banco de Dados
O MySQL está rodando no contêiner Docker. O acesso pode ser configurado conforme as variáveis de ambiente no arquivo docker-compose

## Estrutura do Projeto
Backend (Laravel)
O backend utiliza a arquitetura MVC do Laravel para fornecer uma API simples para gerenciamento de usuários. Endpoints principais incluem:

GET /api/users: Lista todos os usuários
POST /api/users: Cria um novo usuário
PUT /api/users/{id}: Atualiza um usuário existente
DELETE /api/users/{id}: Deleta um usuário

A filtragem de usuários esta sendo feita passando paramentros para o GET endpoint.

## Frontend (React)
O frontend foi construído utilizando React e Vite, com estilização através de Tailwind CSS para criar uma interface simples e responsiva para o gerenciamento de usuários.