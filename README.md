# Mega Rifa — Repositório

Projeto starter para o site **Mega Rifa** (rifa online - iPhone 17 Pro Max 256GB).

## Estrutura
- frontend/ (React)
- backend/ (Node + Express)
- db/ (migrações SQL)
- legal/ (documentos)
- docker-compose.yml

## Configuração principal (resumo)
1. Copie `.env.example` para `.env` nas pastas `frontend` e `backend` e preencha as variáveis:
   - FRONTEND: REACT_APP_BACKEND_URL, REACT_APP_STRIPE_PK
   - BACKEND: STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET, ADMIN_TOKEN, DATABASE_URL, SUCCESS_URL, CANCEL_URL, EMAIL_CONTACT

2. Iniciar localmente (Docker):
   ```bash
   docker-compose up --build
   ```
   Isto cria um serviço Postgres e a aplicação backend (frontend pode correr localmente via `npm start`).

3. Stripe:
   - Configure Stripe com as chaves (test mode primeiro).
   - Registe webhook apontando para `/api/webhook` do backend e configure `STRIPE_WEBHOOK_SECRET`.

4. Legislação:
   - Obtenha autorização da Câmara Municipal de Coimbra antes de operar (documento em /legal).

## Contacto
Email oficial: megarifa27@gmail.com
