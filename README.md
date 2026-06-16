# ⚽ World Cup Manager

Sistema Full Stack para gerenciamento de Seleções, Jogadores e Partidas da Copa do Mundo desenvolvido com Java, Spring Boot e Angular.

---

## 📌 Funcionalidades

### 🌎 Seleções

* Cadastro de seleções
* Edição de seleções
* Exclusão de seleções
* Listagem de seleções
* Paginação
* Confirmação de exclusão com SweetAlert

### 👤 Jogadores

* Cadastro de jogadores
* Associação de jogadores a uma seleção
* Edição de jogadores
* Exclusão de jogadores
* Listagem de jogadores
* Filtro por seleção
* Paginação
* Confirmação de exclusão com SweetAlert

### ⚽ Partidas

* Cadastro de partidas
* Associação entre seleção mandante e visitante
* Registro de placares
* Edição de partidas
* Exclusão de partidas
* Listagem de partidas
* Paginação
* Confirmação de exclusão com SweetAlert
* Destaque visual para a seleção vencedora
* Validação para impedir que uma seleção jogue contra ela mesma

### 🏠 Dashboard Inicial

* Tela inicial personalizada
* Cards de navegação rápida para módulos do sistema
* Interface responsiva utilizando Bootstrap

---

## 🛠️ Tecnologias Utilizadas

### Backend

* Java 21
* Spring Boot
* Spring Data JPA
* Hibernate
* Maven

### Frontend

* Angular
* TypeScript
* Bootstrap 5
* Bootstrap Icons
* SweetAlert2

### Banco de Dados

* H2 Database

---

## 📂 Estrutura do Projeto

### Backend

```text
backend
├── controllers
├── services
├── repositories
├── entities
├── dtos
└── mappers
```

### Frontend

```text
frontend
├── components
├── services
├── models
├── app.routes.ts
└── assets
```

---

## 📖 Regras de Negócio

* Um jogador deve estar associado a uma seleção.
* Uma partida deve possuir uma seleção mandante e uma seleção visitante.
* Uma seleção não pode jogar contra ela mesma.
* Os placares devem ser números inteiros válidos.
* Não é permitido excluir uma seleção que possua jogadores cadastrados.

---
## 📸 Screenshots do Sistema

### 🏠 Tela Inicial
<img width="1587" height="770" alt="image" src="https://github.com/user-attachments/assets/27c88049-58e9-4d80-8e10-b38feddecb77" />

### 🌎 Gerenciamento de Seleções
Cadastro, edição, exclusão e listagem de seleções participantes da Copa do Mundo.
<img width="1600" height="774" alt="image" src="https://github.com/user-attachments/assets/62e33409-82d0-48be-8d40-ea760e76fa59" />

### 👤 Gerenciamento de Jogadores
Cadastro e gerenciamento de jogadores com filtro por seleção e paginação.
<img width="1600" height="769" alt="image" src="https://github.com/user-attachments/assets/299fc693-89d9-44d9-8925-793a1f52949c" />

### 📝 Cadastro de Jogadores
Formulário para criação e edição de jogadores.
<img width="1600" height="772" alt="image" src="https://github.com/user-attachments/assets/6f780472-a976-4d3f-bbed-701756f6418e" />

### ⚽ Gerenciamento de Partidas
Controle dos confrontos, estádios, datas e placares.
<img width="1589" height="770" alt="image" src="https://github.com/user-attachments/assets/da0618af-6e7d-46a2-8389-4623a2a9091f" />

### ✨ Confirmação de Exclusão
O sistema utiliza SweetAlert2 para confirmação de exclusão de registros.
<img width="1585" height="769" alt="image" src="https://github.com/user-attachments/assets/b662a924-aa57-4c3f-817e-efc3024561e8" />

---

## 🚀 Como Executar o Projeto

### Backend

Clone o repositório:

```bash
git clone https://github.com/sarahrbz/worldcup-manager.git
```

Acesse a pasta do backend:

```bash
cd backend
```

Execute a aplicação:

```bash
./mvnw spring-boot:run
```

API disponível em:

```text
http://localhost:8080
```

Console H2:

```text
http://localhost:8080/h2-console
```

---

### Frontend

Acesse a pasta do frontend:

```bash
cd frontend
```

Instale as dependências:

```bash
npm install
```

Execute a aplicação:

```bash
ng serve
```

Sistema disponível em:

```text
http://localhost:4200
```

---

## 📚 Conceitos Aplicados

* Arquitetura em Camadas
* REST API
* CRUD Completo
* DTO Pattern
* Mapper Pattern
* Relacionamentos JPA (@ManyToOne)
* Reactive Forms
* Angular Signals
* Paginação Client-Side
* Filtros Dinâmicos
* Componentização Angular
* Integração Frontend ↔ Backend
* Tratamento de Erros
* SweetAlert2

---

## 👩‍💻 Desenvolvedora

**Sarah Ribeiro de Souza**

Projeto desenvolvido para fins acadêmicos e aprendizado prático em desenvolvimento Full Stack utilizando Java, Spring Boot e Angular.

---

## 📌 Status do Projeto

🟢 Projeto Finalizado

* CRUD de Seleções
* CRUD de Jogadores
* CRUD de Partidas
* Integração Angular + Spring Boot
* Paginação
* Filtro de jogadores por seleção
* Dashboard inicial
* SweetAlert para confirmações
* Melhorias visuais com Bootstrap

🚀 Melhorias Futuras

* Busca por nome
* Ordenação de registros
* Estatísticas das seleções
* Responsividade avançada
* Deploy da aplicação
