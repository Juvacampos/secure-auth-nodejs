# 🔐 Secure Auth Node.js

Projeto completo de **autenticação segura** em Node.js com:

- Autenticação via **JWT**
- **MFA (Autenticação Multifator)** usando TOTP (Google Authenticator)
- Senhas fortes com validação
- Armazenamento seguro com **bcrypt + salt**
- **Reset de senha** via token
- Expiração periódica de senhas
- Logout com blacklist de tokens
- Proteção contra ataques de força bruta (rate limit)
- Gerenciamento de usuários
- Docker e MongoDB

---

## 🚀 Tecnologias

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT
- Bcrypt
- Speakeasy (MFA)
- Docker / Docker Compose

---

## 📦 Instalação

### 🐳 Usando Docker

```bash
# Subir os containers
docker-compose up --build
