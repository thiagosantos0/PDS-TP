# Criação e Compartilhamento de Artigos

### Membros e Papeis

- Matheus Alexandre Irias de Oliveira - Desenvolvedor Back-end
- Thiago Henrique Moreira Santos - Desenvolvedor Front-end
- João Pedro Macedo Oliveira - Desenvolvedor Front-end
- Lucas Augusto Araújo Aguiar - Desenvolvedor Back-end

---

### Funcional

#### Objetivo do Sistema:
Plataforma para criação e compartilhamento de artigos de texto.

#### Principais Features:
- Criação de conta na plataforma
- Criação e edição de artigos através de um editor
- Definir um artigo como público ou privado
- Navegar pelos artigos públicos mais recentes da plataforma
- Visualizar e interagir com artigos de outros usuários

---

### Tecnologias

#### Front-end:
- Linguagem: Javascript
- Framework: React

#### Back-end:
- Linguagem: Javascript
- Engine: Node.Js
- Framework: Express.Js

#### Banco de Dados: 
- MySQL

---

### Organização do backlog

#### Backlog do produto
- Como usuário, quero criar uma conta na plataforma
- Como usuário, quero fazer login na plataforma
- Como usuário, quero acessar meu perfil com meus artigos
- Como usuário, quero criar um novo artigo
- Como usuário, quero editar meus artigos através de um editor
- Como usuário, quero ler artigos escritos por outros usuários
- Como usuário, quero navegar pelos artigos disponíveis na plataforma
- Como usuário, quero navegar pelos artigos de um usuário específico
- Como usuário, quero definir quem pode ler meus artigos
- Como usuário, quero ter meios de interação com os artigos escritos por outros usuários
- Como usuário, quero buscar por um tema e ver artigos relacionados a ele
- Como usuário, quero adicionar imagens nos meus artigos
- Como usuário, quero poder seguir meus autores favoritos



#### Primeira sprint
- Como usuário, quero criar uma conta na plataforma
    - Criar modelagem do usuário para o banco.
    - Criar endpoint responsável e lógica no backend.
    - Criação da tela do usuário.
    - Consumir api e realizar lógica de criação no front.

- Como usuário, quero fazer login na plataforma
    - Criação da tela do usuário.
    - Criar endpoint responsável pela autenticação.
    - Realizar lógica de login no front e consumir a api.

- Como usuário, quero acessar meu perfil com meus artigos
    - Criação da tela do usuário.
    - Criar endpoint e lógica para obter dados do usuário..
    - Consumir api de dados do usuário e realizar lógica de exposição dos dados no front.
    - Criar endpoint e lógica para listagem de artigos.
    - Consumir api de listagem de artigos e realizar lógica de listagem no front

- Como usuário, quero criar um novo artigo
    - Criar modelagem do artigo para o banco.
    - Criar endpoint para adicionar novo artigo no BD
    - Criar tela para criação de artigos

- Como usuário, quero editar meus artigos através de um editor
    - Criar a interface de edição de artigos
    - Criar endpoint para editar um artigo específico
    - Estabelecer comunicação entre o front e o back para receber o artigo alterado e posteriormente salvar as alterações no BD

- Como usuário, quero ler artigos escritos por outros usuários
    - Criar a interface para ler artigo
    - Criar endpoint para ler um artigo específico
    - Estabelecer comunicação entre o front e o back

- Como usuário, quero navegar pelos artigos disponíveis na plataforma
    - Criar endpoint para recuperar todos os artigos do BD
    - Criar interface para visualizar os artigos retornados
    - Estabelecer comunicação entre o front e o back

- Como usuário, quero navegar pelos artigos de um usuário específico
    - Criar endpoint para recuperar todos os artigos do usuário
    - Criar interface para visualizar os artigos retornados
    - Estabelecer comunicação entre o front e o back

### Documentação da arquitetura
- Por que o sistema está adotando essa arquitetura?
    - Porque a arquitetura hexagonal torna o sistema independente de tecnologia, além de permitir que o código seja mais reutilizável e coeso.

- Quais são as portas e adaptadores? Qual o objetivo deles?
    - Adaptadores - Os Repositórios funcionam como adaptadores, recebendo as chamadas da porta de saída e transformando nas operações correspondentes no banco de dados.
    - Porta de entrada - São as Rotas, onde são declaradas as funcionalidades oferecidas pelo sistema.
    - Porta de saída - São os Serviços, que contém os métodos que podem ser chamados pelas classes de domínio e que levarão ao uso de serviços externos.