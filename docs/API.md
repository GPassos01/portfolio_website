# 📚 Documentação da API - Portfólio Gabriel Passos

## 🔗 Base URL
```
http://localhost:8080/api
```

## 📋 Endpoints

### 1. **Contato** - `POST /contact`

Envia uma mensagem de contato via email.

#### Request Body
```json
{
  "name": "string",
  "email": "string",
  "service": "string",
  "budget": "string",
  "timeline": "string",
  "description": "string"
}
```

#### Exemplo de Request
```json
{
  "name": "João Silva",
  "email": "joao@email.com",
  "service": "web-development",
  "budget": "1000-2000",
  "timeline": "1-month",
  "description": "Preciso de um site para minha empresa..."
}
```

#### Response (200 OK)
```json
{
  "message": "Mensagem enviada com sucesso!",
  "timestamp": "2024-01-11T10:30:00Z"
}
```

#### Response (400 Bad Request)
```json
{
  "error": "Dados inválidos",
  "details": {
    "email": "Email inválido",
    "name": "Nome é obrigatório"
  }
}
```

---

### 2. **Projetos** - `GET /projects`

Retorna a lista de todos os projetos.

#### Response (200 OK)
```json
[
  {
    "id": 1,
    "title": "Sistema de Análise de Enchentes",
    "description": "Sistema de análise de imagens para monitoramento de enchentes usando IA",
    "technologies": ["Python", "OpenCV", "ESP32-CAM", "Machine Learning"],
    "githubUrl": "https://github.com/gabrielpassos/projeto-enchentes",
    "liveUrl": "https://demo-projeto.com",
    "status": "completed",
    "type": "personal",
    "imageUrl": "/images/projeto-enchentes.png"
  },
  {
    "id": 2,
    "title": "E-commerce Moderno",
    "description": "Plataforma de e-commerce com React e Node.js",
    "technologies": ["React", "Node.js", "MongoDB", "Stripe"],
    "githubUrl": "https://github.com/gabrielpassos/ecommerce",
    "status": "coming-soon",
    "type": "study"
  }
]
```

---

### 3. **Projeto Específico** - `GET /projects/{id}`

Retorna detalhes de um projeto específico.

#### Path Parameters
- `id` (integer): ID do projeto

#### Response (200 OK)
```json
{
  "id": 1,
  "title": "Sistema de Análise de Enchentes",
  "description": "Sistema completo de análise de imagens...",
  "technologies": ["Python", "OpenCV", "ESP32-CAM", "Machine Learning"],
  "githubUrl": "https://github.com/gabrielpassos/projeto-enchentes",
  "liveUrl": "https://demo-projeto.com",
  "status": "completed",
  "type": "personal",
  "imageUrl": "/images/projeto-enchentes.png",
  "createdAt": "2024-01-01T00:00:00Z",
  "updatedAt": "2024-01-11T10:30:00Z"
}
```

#### Response (404 Not Found)
```json
{
  "error": "Projeto não encontrado",
  "message": "Projeto com ID 999 não foi encontrado"
}
```

---

### 4. **Perfil** - `GET /profile`

Retorna informações do perfil profissional.

#### Response (200 OK)
```json
{
  "name": "Gabriel Passos",
  "title": "Desenvolvedor Full Stack",
  "bio": "Desenvolvedor apaixonado por criar soluções inovadoras...",
  "email": "gabriel@email.com",
  "github": "https://github.com/gabrielpassos",
  "linkedin": "https://linkedin.com/in/gabrielpassos",
  "location": "São Paulo, Brasil",
  "skills": {
    "frontend": ["React", "JavaScript", "CSS3", "HTML5"],
    "backend": ["Node.js", "Python", "Java", "Spring Boot"],
    "database": ["MongoDB", "PostgreSQL", "MySQL"],
    "tools": ["Git", "Docker", "AWS", "Figma"]
  }
}
```

---

## 🔧 Configuração

### Variáveis de Ambiente

```properties
# Server
server.port=8080
server.servlet.context-path=/api

# Database
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.jpa.hibernate.ddl-auto=create-drop

# Email
spring.mail.host=smtp.gmail.com
spring.mail.port=587
spring.mail.username=seu-email@gmail.com
spring.mail.password=sua-senha-app
spring.mail.properties.mail.smtp.auth=true
spring.mail.properties.mail.smtp.starttls.enable=true

# CORS
spring.web.cors.allowed-origins=http://localhost:3000
spring.web.cors.allowed-methods=GET,POST,PUT,DELETE
spring.web.cors.allowed-headers=*
```

### Swagger UI

Acesse a documentação interativa da API em:
```
http://localhost:8080/swagger-ui.html
```

---

## 🧪 Testes

### Testar com cURL

#### Enviar mensagem de contato
```bash
curl -X POST http://localhost:8080/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Teste",
    "email": "teste@email.com",
    "description": "Mensagem de teste"
  }'
```

#### Buscar projetos
```bash
curl -X GET http://localhost:8080/api/projects
```

#### Buscar perfil
```bash
curl -X GET http://localhost:8080/api/profile
```

---

## 📊 Status Codes

| Código | Descrição |
|--------|-----------|
| 200 | OK - Sucesso |
| 201 | Created - Recurso criado |
| 400 | Bad Request - Dados inválidos |
| 404 | Not Found - Recurso não encontrado |
| 500 | Internal Server Error - Erro interno |

---

## 🔒 Segurança

- **CORS**: Configurado para permitir apenas origens específicas
- **Validação**: Todos os inputs são validados
- **Sanitização**: Dados são sanitizados antes do processamento
- **Rate Limiting**: Implementado para prevenir spam

---

## 📝 Logs

A API gera logs detalhados para:
- Requisições recebidas
- Erros de validação
- Envios de email
- Performance de endpoints

---

*Documentação atualizada em: Janeiro 2024* 