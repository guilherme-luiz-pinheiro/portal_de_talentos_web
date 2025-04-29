# Portal de Talentos - Frontend (ReactJS)

Este é o frontend do Portal de Talentos, desenvolvido com **ReactJS**. A aplicação permite o cadastro e visualização de candidatos a vagas de programação, com funcionalidades específicas para **gestores** e **candidatos**.

## 🧰 Tecnologias utilizadas

- ReactJS
- Axios
- React Router DOM
- Styled Components / Tailwind (caso utilizado)
- API ViaCEP

## 📦 Instalação

bash
git clone https://github.com/seu-usuario/portal-talentos-frontend.git
cd portal-talentos-frontend
npm install

## ▶️ Execução
bash
Copiar
Editar
npm run dev
A aplicação será executada em http://localhost:5173 (ou porta configurada no Vite/CRA).

## 📌 Funcionalidades

Tela de Login

Cadastro de novo usuário

Cadastro de candidato, com:

CEP integrado com ViaCEP para preencher o endereço automaticamente

Seleção de múltiplas habilidades pré-definidas

Inclusão de múltiplas formações acadêmicas

Notificação visual caso o candidato tenha sido selecionado

Área restrita para gestores com:

Listagem de candidatos

Filtro por nome e habilidades

Visualização detalhada

Seleção para entrevista

## 📡 Integração com Backend
As requisições são feitas via Axios para o backend em AdonisJS. A base da URL pode ser configurada no arquivo .env.

## 🔐 Autenticação
A autenticação é baseada em token JWT. O token é armazenado localmente e utilizado nos headers das requisições.

## ✅ Requisitos
Node.js v18+

Backend do projeto em funcionamento (veja o README do backend)

## ✉️ Contato
Para dúvidas, sugestões ou bugs, abra uma issue no repositório ou entre em contato.