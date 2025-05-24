# ✅ CheckList - Projeto Full-Stack

## 📌 Sobre o Projeto

**CheckList** é uma aplicação **Full-Stack** desenvolvida como projeto prático para o **Trabalho de Conclusão de Curso (TCC)** do curso de **Análise e Desenvolvimento de Sistemas** no **SENAI**. Iniciado em **23/05/2025** por **João Pedro Dala Dea Mello**, o projeto tem como objetivo aplicar conhecimentos em front-end, back-end e banco de dados, criando uma aplicação funcional para gerenciamento de listas de produtos. Voltada para usuários que buscam organizar compras ou estoques, a aplicação permite o cadastro, listagem, edição e exclusão de produtos de forma simples e intuitiva, demonstrando a integração entre tecnologias modernas.

![Screenshot do CheckList](img/img-checklist.png)

## 📋 Funcionalidades

1. **Cadastro de Produtos**: Permite adicionar produtos com nome, quantidade e categoria, facilitando a organização de listas personalizadas.
2. **Listagem de Produtos**: Exibe todos os produtos em uma interface clara e organizada, com opções de ordenação.
3. **Edição de Produtos**: Oferece a possibilidade de atualizar informações de produtos já cadastrados, garantindo flexibilidade.
4. **Exclusão de Produtos**: Permite remover produtos desnecessários com segurança.
5. **Interface Responsiva**: Garante usabilidade em dispositivos móveis e desktops, adaptando-se a diferentes tamanhos de tela.

## 🛠️ Tecnologias Utilizadas

| **Camada**     | **Tecnologia**      | **Versão** | **Descrição**                                      |
|----------------|---------------------|------------|---------------------------------------------------|
| Front-End      | React               | 18.x       | Biblioteca JavaScript para interfaces dinâmicas   |
| Front-End      | Bootstrap           | 5.x        | Framework CSS para estilização responsiva        |
| Front-End      | Axios               | 1.x        | Cliente HTTP para comunicação com a API          |
| Back-End       | Spring Boot         | 3.x        | Framework Java para APIs RESTful                 |
| Back-End       | DTOs                | -          | Objetos de transferência para padronizar dados   |
| Banco de Dados | PostgreSQL          | 16.x       | Banco de dados relacional robusto e escalável    |

### 🌐 Linguagens
- HTML
- CSS
- JavaScript
- Java 21

## 📂 Estrutura do Projeto

- `/frontend`: Interface desenvolvida em React, organizada em componentes, páginas e serviços para chamadas à API, com Bootstrap para estilização e Axios para comunicação com o back-end.
- `/backend`: API RESTful construída com Spring Boot, seguindo uma arquitetura em camadas composta por:
  - **Model**: Define as entidades do banco de dados
  - **Repository**: Interface para acesso e manipulação de dados no PostgreSQL.
  - **Service**: Contém a lógica de negócios, intermediando controllers e repositórios.
  - **Controller**: Gerencia requisições HTTP e respostas da API.
  - **DTO**: Objetos de transferência de dados para padronizar a comunicação entre front-end e back-end.

## 🚀 Instalação e Execução

### ✅ Pré-requisitos

Antes de iniciar, certifique-se de que você tenha os seguintes softwares instalados na sua máquina:

- [Node.js](https://nodejs.org) (versão recomendada: LTS)
- [Java 21+](https://www.oracle.com/java/technologies/javase/jdk21-archive-downloads.html)
- [PostgreSQL](https://www.postgresql.org)
- [Maven](https://maven.apache.org) (para build do back-end)
- [Visual Studio Code](https://code.visualstudio.com/) (ou outra IDE de sua preferência, como IntelliJ, Eclipse ou NetBeans)

---

### 🗄️ Banco de Dados (PostgreSQL)

#### 1. Criar o Banco de Dados

- **Via pgAdmin 4**:
  1. Abra o **pgAdmin 4** e clique em **Servers** no menu lateral.
  2. Insira a senha do servidor, se solicitada.
  3. Clique com o botão direito em **Databases** (ou dê dois cliques no trackpad) e selecione **Create > Database**.
  4. Nomeie o banco como `checklist` (recomendado) e clique em **Save**.
     ![Criação do Banco](img/postgresql1.png)

- **Via Query Tool**:
  1. No pgAdmin 4, clique em **Tools** no menu superior e selecione **Query Tool**.
     ![Abertura do Query Tool](img/postgresql2.png)
  2. Execute o comando SQL abaixo para criar o banco:
     ```sql
     CREATE DATABASE checklist;
---

#### 2. Criar a Tabela products
Após criar o banco checklist, crie a tabela products com as colunas necessárias para armazenar os dados dos produtos.

- **Via pgAdmin 4**:

1. No menu lateral, expanda o banco checklist e clique com o botão direito em Schemas > public > Tables.

2. Selecione Create > Table e nomeie a tabela como products.

3. Adicione as seguintes colunas:

- `id_product`: Tipo `bigint`, marque como **Primary Key** e configure como **Identity(By Default)** para auto-incremento.

- `name`: Tipo **character varying(200)**, para o nome do produto.
- `quantity`: Tipo `integer`, para a quantidade.
- `category`: Tipo `character varying(50)`, para a categoria do produto.
- `purchased`: Tipo `character varying(30)`, para indicar se o produto foi comprado.
- `register_timer`: Tipo `character varying(25)`, para o timestamp de registro.

![create-table](img/postgresql3.png)

1. Clique em Save para criar a tabela

- **Via Query Tool**: 
  
  Execute o comando SQL abaixo no Query Tool para criar a tabela **products**:

    ```sql
    CREATE TABLE products(
    id_product BIGINT PRIMARY KEY NOT NULL GENERATED BY DEFAULT AS IDENTITY, 
    name VARCHAR(200), 
    quantity INTEGER, 
    category VARCHAR(50), 
    purchased VARCHAR(30), 
    register_timer VARCHAR(25)
    );
- **Nota**: O campo id_product usa **GENERATED BY DEFAULT AS IDENTITY** para garantir auto-incremento, equivalente à configuração de identity no pgAdmin.
---

#### 3. Verificar o Servidor do Banco de Dados

- Certifique-se de que o servidor PostgreSQL está ativo:

1. No pgAdmin 4, verifique se o status do servidor está **verde** (conectado).
2. Caso não esteja, inicie o servidor via linha de comando ou ferramenta de gerenciamento (ex.: ``pg_ctl start`` no Linux/Windows ou serviços no sistema operacional).
3. Insira a senha do usuário PostgreSQL, se solicitada.
---
### 🔧 Backend (Spring Boot)

1. Acesse a pasta do back-end
`cd backend`

2. Configure o arquivo ``application.properties`` com as credenciais do seu banco PostgreSQL.

   ![Configuration](img/configuration.png)

3. Execute o projeto com Maven
`mvn spring-boot:run`

---

### 💻 Frontend (React)

1. Acesse a pasta do front-end: 
`cd frontend`

2. Instale as dependências:
`npm install`

3. Inicie a aplicação:
`npm run dev`
A aplicação estará disponível em `http://localhost:5173`

## 📚 Aprendizados e Desafios

- **Integração Front-End e Back-End**: Configuração de chamadas HTTP com Axios e tratamento de respostas da API.
- **Gerenciamento de Banco de Dados**: Criação e manipulação de tabelas no PostgreSQL para suportar as funcionalidades do projeto.
- **Desafios**: Configuração inicial do ambiente, como integração entre Spring Boot e PostgreSQL, e garantir responsividade com Bootstrap.


## 🧑‍💻 Autor

**João Pedro Dala Dea Mello**  
Estudante de Análise e Desenvolvimento de Sistemas - SENAI  
- GitHub: [github.com/joaopedro08-dev](https://github.com/joaopedro08-dev)  
- Email: joaopedrodaladeamello098@gmail.com
