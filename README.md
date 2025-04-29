# 🚀 Portal de Talentos - Frontend (ReactJS)

Frontend do sistema **Portal de Talentos**, desenvolvido com **ReactJS**, voltado para o cadastro e gerenciamento de candidatos a vagas de programação. O sistema possui áreas dedicadas para **gestores** e **candidatos**.

---

## 🛠️ Tecnologias

- ⚛️ ReactJS  
- 📡 Axios  
- 🌐 React Router DOM  
- 🎨 Styled Components / TailwindCSS *(se aplicável)*  
- 🗺️ API ViaCEP  

---

## 📦 Instalação

```bash
git clone https://github.com/seu-usuario/portal-talentos-frontend.git
cd portal-talentos-frontend
npm install
```

---

## ▶️ Execução

```bash
npm run dev
```

Acesse em: [http://localhost:5173](http://localhost:5173) *(ou a porta configurada no Vite/CRA)*

---

## ✨ Funcionalidades

### 👤 Área do Candidato

- Cadastro com preenchimento automático de endereço via **CEP (ViaCEP)**
- Seleção de **múltiplas habilidades**
- Inclusão de **formações acadêmicas**
- Indicação visual de **seleção para entrevista**

### 🔐 Área do Gestor

- Listagem de candidatos
- Filtro por **nome** e **habilidades**
- Visualização de detalhes do candidato
- Seleção de candidatos para entrevista

---

## 🔗 Integração com Backend

As requisições são feitas via **Axios** para a API desenvolvida em **AdonisJS**.  
A base da URL pode ser configurada no arquivo `.env`.

---

## 🛡️ Autenticação

- Autenticação baseada em **JWT**
- Token armazenado localmente e enviado via **headers**

---

## ✅ Pré-requisitos

- Node.js **v18+**
- Backend em funcionamento ➡️ *Veja o README do backend*

---

## 📬 Contato

Encontrou um problema ou tem uma sugestão?  
Abra uma issue ou entre em contato diretamente.
