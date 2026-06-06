# ⚽ World Cup Manager

Sistema Full Stack desenvolvido para gerenciamento de uma Copa do Mundo, permitindo o cadastro e gerenciamento de Seleções, Jogadores e Partidas.

## 📌 Funcionalidades

### 🌎 Seleções

* Cadastro de seleções
* Edição de seleções
* Exclusão de seleções
* Listagem de seleções

### 👤 Jogadores

* Cadastro de jogadores
* Associação de jogadores a uma seleção
* Edição de jogadores
* Exclusão de jogadores
* Listagem de jogadores

### ⚽ Partidas

* Cadastro de partidas
* Associação entre seleção mandante e visitante
* Registro de placares
* Edição de partidas
* Exclusão de partidas
* Listagem de partidas
* Validação para impedir que uma seleção jogue contra ela mesma

---

## 🛠️ Tecnologias Utilizadas

### Backend

* Java
* Spring Boot
* Spring Data JPA
* Hibernate
* Maven

### Frontend

* Angular
* TypeScript
* Bootstrap 5
* Bootstrap Icons

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
└── routes
```

---

## 📖 Regras de Negócio

* Um jogador deve estar associado a uma seleção.
* Uma partida deve possuir uma seleção mandante e uma seleção visitante.
* Uma seleção não pode jogar contra ela mesma.
* Os placares devem ser números inteiros válidos.

---

## 🚀 Como Executar o Projeto

### Backend

Clone o repositório:

```bash
git clone <url-do-repositorio>
```

Acesse a pasta do backend:

```bash
cd backend
```

Execute a aplicação:

```bash
./mvnw spring-boot:run
```

A API estará disponível em:

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

O sistema estará disponível em:

```text
http://localhost:4200
```

---

## 📚 Conceitos Aplicados

* Arquitetura em camadas
* REST API
* CRUD Completo
* DTO Pattern
* Mapper Pattern
* Relacionamentos JPA (@ManyToOne)
* Reactive Forms
* Angular Signals
* Integração Frontend ↔ Backend

---

## 👩‍💻 Desenvolvedora

**Sarah Ribeiro de Souza**

Projeto desenvolvido para fins acadêmicos e aprendizado prático em desenvolvimento Full Stack utilizando Java, Spring Boot e Angular.

---

## 📌 Status do Projeto

🚧 Em desenvolvimento

### Concluído

* CRUD de Seleções
* CRUD de Jogadores
* Backend de Partidas
* Integração Angular + Spring Boot

### Em andamento

* Frontend de Partidas
* Melhorias visuais
* Validações adicionais
