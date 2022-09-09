# Great-desafio
Uma aplicação que cadastra e lista usuários por filtros.

* Tela de cadastro de usuários
![01](https://user-images.githubusercontent.com/37351953/189362535-9596f433-c841-4743-ba31-557bba045403.png)

* Tela contendo uma tabela com paginação que lista todos os usuários cadastrados.
![02](https://user-images.githubusercontent.com/37351953/189364586-b884a2c0-bc1c-4ff7-9f8c-19d747f6b1ec.png)


* Tela que mostra todos os dados de um usuário.
![03](https://user-images.githubusercontent.com/37351953/189364594-4a9c5384-1899-439c-883b-c4a0e07adace.png)

<!-- 
1. Descrição do projeto
2. Tecnologias utilizadas
3. Organização do projeto
4. Build e deploy
5. Desenvolvimento 
-->

## 1. Descrição do projeto
## 1.1. Tecnologias

Principais tecnologias utilizadas neste projeto são apresentadas na tabela abaixo.

| Tecnologia                               | Descrição                                                                     |
| :--------------------------------------- | :---------------------------------------------------------------------------- |          
| [React](https://pt-br.reactjs.org/)      | Biblioteca JavaScript para criação de aplicações web.                         |

## 1.2. Organização do projeto

O está organizado como:

     ├── src
        ├── assets
        ├── components
           ├── Formulario
           ├── Listagem
        ├── models
          ├── user
        ├── service
          ├── resources
              ├── usuarioService
          ├── api
        ├── types
          ├── filter
          ├── pagination
        ├── utils
          ├── table
        ├── app
        └── README.md
        
 # SRC
| Pasta                     | Descrição                                                                                                                       |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| assets                    | Contém os elementos visuais da aplicação, como imagens, etc...                                                                  |
| components                | Contém componentes reutilizáveis ao decorrer da aplicação.                                                                      |
| screens                   | Contém as páginas da aplicação.                                                                                                 |
| services                  | Contém a comunicação da aplicação com a Api.    



| Arquivo                   | Descrição                                                                           |
| ------------------------- | ----------------------------------------------------------------------------------- |
| Formulario                | Contém os componentes de formulário da aplicação                                    |
| Listagem                  | Página de listagem da aplicação.                                                    |


## 1.3. Específicações sobre as funcionalidades
É possível cadastar, listar, visualizar informações de um usuários e filtrar buscas por usuários. A seguir veja com mais detalhes cada uma delas.

|Operação     | Descrição
|------------ | -----------------------
| Cadastrar   | É possível cadastrar usuários.
| Listar      | É possível listar todos os usuários.
| Visualizar  | É possível visaulizar todas as informações de um usuário.
| Filtro      | É possivel filtar busca por usuários pelo Nome, CPF e RG.


## 2.  Como executar

# WebApp

Clone o projeto e acesse a pasta onde foi clonado.
Para iniciá-lo usando o **yarn**, siga os passos abaixo:

```
# Instalar as dependências com yarn 
$ yarn
```

Para iniciá-lo usando o **npm**, siga os passos abaixo:

```
# Instalar as dependências com npm 
$ npm install
```

Por fim para executá-lo, execute:
```
yarn start
```
