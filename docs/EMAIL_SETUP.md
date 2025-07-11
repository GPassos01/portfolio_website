# 📧 Configuração do Sistema de Email

## 🎯 Visão Geral

O portfólio agora possui um sistema completo de envio de emails que permite receber mensagens do formulário de contato diretamente na sua caixa de entrada.

## ⚙️ Configuração Necessária

### 1. Criar uma Senha de App do Gmail

Para usar o Gmail SMTP, você precisa de uma **Senha de App** (não a senha regular):

1. **Acesse sua conta Google**: [myaccount.google.com](https://myaccount.google.com)
2. **Vá para Segurança** → **Verificação em duas etapas** (deve estar ativada)
3. **Clique em "Senhas de app"**
4. **Selecione "Outro (nome personalizado)"**
5. **Digite**: "Portfolio Contact Form"
6. **Copie a senha gerada** (16 caracteres)

### 2. Configurar Variáveis de Ambiente

#### 🐧 **Linux/macOS**
```bash
# Adicione ao ~/.bashrc ou ~/.zshrc
export EMAIL_USERNAME="seuemail@gmail.com"
export EMAIL_PASSWORD="sua_senha_de_app_de_16_caracteres"
export RECIPIENT_EMAIL="seuemail@gmail.com"  # Email onde receber as mensagens

# Recarregue o terminal
source ~/.bashrc
```

#### 🪟 **Windows**
```cmd
# Prompt de Comando (execute como Administrador)
setx EMAIL_USERNAME "seuemail@gmail.com"
setx EMAIL_PASSWORD "sua_senha_de_app_de_16_caracteres"
setx RECIPIENT_EMAIL "seuemail@gmail.com"

# Reinicie o terminal após definir as variáveis
```

#### 🐳 **Docker (Futuro)**
```yaml
environment:
  - EMAIL_USERNAME=seuemail@gmail.com
  - EMAIL_PASSWORD=sua_senha_de_app
  - RECIPIENT_EMAIL=seuemail@gmail.com
```

### 3. Verificar Configuração

Após definir as variáveis de ambiente:

1. **Reinicie o terminal**
2. **Navegue até o diretório backend**:
   ```bash
   cd backend
   ```
3. **Execute o servidor**:
   ```bash
   ./gradlew bootRun
   ```
4. **Verifique os logs** para confirmar que não há erros de configuração

## 🧪 Testando o Sistema

### 1. Teste Frontend
1. Acesse: `http://localhost:3000`
2. Vá para a seção **"Contato"**
3. Preencha o formulário:
   - **Nome**: Seu nome
   - **Email**: Seu email (para teste)
   - **Mensagem**: "Teste do sistema de email"
4. Clique em **"Enviar Mensagem"**

### 2. Verificar Recebimento
- Confira sua caixa de entrada do Gmail
- Procure por: **"📧 Nova Mensagem do Portfólio - [Seu Nome]"**
- O email deve ter formatação profissional com todas as informações

## 🔧 Funcionalidades Implementadas

### ✅ **Backend (Spring Boot)**
- **EmailService**: Serviço dedicado para envio de emails
- **Validação**: Campos obrigatórios e sanitização
- **Configuração SMTP**: Gmail com TLS seguro
- **Tratamento de erros**: Logs detalhados e respostas adequadas
- **Formatação**: Emails bem estruturados e profissionais

### ✅ **Frontend (React)**
- **Feedback visual melhorado**: Spinner de loading e ícones
- **Múltiplos tipos de erro**: Validação, rede e servidor
- **Mensagens detalhadas**: Instruções claras para o usuário
- **Reset automático**: Formulário limpa após sucesso
- **Timeouts inteligentes**: Status se limpa automaticamente

## 📋 Formato do Email Recebido

```
🚀 NOVA MENSAGEM DO PORTFÓLIO

═══════════════════════════════════════

👤 INFORMAÇÕES DO CONTATO:
• Nome: João Silva
• Email: joao@email.com
• Data/Hora: 11/07/2025 10:30:45

═══════════════════════════════════════

💬 MENSAGEM:

Olá! Gostei muito do seu portfólio e gostaria de
conversar sobre uma oportunidade de trabalho...

═══════════════════════════════════════

📝 INSTRUÇÕES PARA RESPOSTA:
• Responda diretamente este email
• O email será enviado automaticamente para: joao@email.com
• Ou copie o email para resposta manual

═══════════════════════════════════════

🤖 Este email foi enviado automaticamente através do 
   sistema de contato do portfólio de Gabriel Passos.
```

## 🛡️ Segurança

### ✅ **Medidas Implementadas**
- **Variáveis de ambiente**: Credenciais não ficam no código
- **Validação**: Backend valida todos os campos
- **Sanitização**: Dados são limpos antes do envio
- **Rate limiting natural**: Um email por submit do formulário
- **HTTPS ready**: Preparado para produção com SSL

### ⚠️ **Para Produção**
- Configure **CORS** específico (não `origins = "*"`)
- Use **variáveis de ambiente** do servidor/container
- Considere **rate limiting** adicional
- Configure **logs** estruturados
- Use **HTTPS** obrigatório

## 🚀 Como Funciona

### 1. **Usuário preenche formulário** → 
### 2. **Frontend valida e envia POST /api/contact** → 
### 3. **Backend recebe e valida dados** → 
### 4. **EmailService formata e envia via SMTP** → 
### 5. **Gmail entrega na sua caixa de entrada** → 
### 6. **Frontend mostra feedback de sucesso** ✅

## 🆘 Resolução de Problemas

### ❌ **"Erro ao enviar email"**
- Verifique se as variáveis de ambiente estão corretas
- Confirme que a senha de app foi gerada corretamente
- Certifique-se de que a verificação em duas etapas está ativa

### ❌ **"Serviço de email temporariamente indisponível"**
- Variáveis de ambiente não foram definidas
- Execute: `echo $EMAIL_USERNAME` (Linux/Mac) ou `echo %EMAIL_USERNAME%` (Windows)

### ❌ **"Erro de conexão"**
- Verifique sua conexão com a internet
- Confirme que não há firewall bloqueando a porta 587

### 🔍 **Logs Detalhados**
Verifique o console do backend para logs como:
```
✅ Email enviado com sucesso para: gabriel.passos@unesp.br
📤 Remetente: João Silva (joao@email.com)
```

## 📞 Suporte

Se ainda tiver problemas:
1. **Verifique os logs** do backend
2. **Teste com outro email** de remetente
3. **Confirme as variáveis** de ambiente
4. **Reinicie** o servidor backend

---

**🎉 Parabéns! Seu portfólio agora tem um sistema profissional de contato por email!** 