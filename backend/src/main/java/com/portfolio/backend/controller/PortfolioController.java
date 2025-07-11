package com.portfolio.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import com.portfolio.backend.service.EmailService;
import java.util.*;

/**
 * Controller REST para o Portfólio Pessoal
 * 
 * Este controller gerencia todos os endpoints da API do portfólio,
 * fornecendo dados para o frontend React sobre:
 * - Informações pessoais
 * - Projetos desenvolvidos
 * - Habilidades técnicas
 * - Formulário de contato
 * 
 * @author Gabriel Passos
 * @version 1.0
 * @since 2025
 */
@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*") // Permite requisições do frontend React (localhost:3000)
public class PortfolioController {

    @Autowired
    private EmailService emailService;

    /**
     * Endpoint para obter informações pessoais do portfólio
     * 
     * Retorna dados básicos como nome, título profissional, 
     * biografia e links para redes sociais.
     * 
     * @return ResponseEntity contendo Map com informações pessoais
     * 
     * Exemplo de resposta:
     * {
     *   "name": "Gabriel Passos",
     *   "title": "Cientista da Computação",
     *   "bio": "Cientista da Computação apaixonado por criar soluções inovadoras.",
     *   "email": "gabriel.passos@unesp.br",
     *   "github": "https://github.com/gpassos01",
     *   "linkedin": "https://www.linkedin.com/in/gabriel-passos26/"
     * }
     */
    @GetMapping("/profile")
    public ResponseEntity<Map<String, Object>> getProfile() {
        // Cria um mapa com as informações pessoais
        Map<String, Object> profile = new HashMap<>();
        
        // Informações básicas
        profile.put("name", "Gabriel Passos");
        profile.put("title", "Cientista da Computação");
        profile.put("bio", "Cientista da Computação apaixonado por criar soluções inovadoras.");
        
        // Informações de contato
        profile.put("email", "gabriel.passos@unesp.br");
        profile.put("github", "https://github.com/gpassos01");
        profile.put("linkedin", "https://www.linkedin.com/in/gabriel-passos26/");
        
        return ResponseEntity.ok(profile);
    }

    /**
     * Endpoint para obter lista de projetos do portfólio
     * 
     * Retorna uma lista com todos os projetos desenvolvidos,
     * incluindo projeto principal e projetos futuros.
     * Cada projeto contém informações como título, descrição,
     * tecnologias utilizadas, links e status.
     * 
     * @return ResponseEntity contendo List de Maps com projetos
     * 
     * Status possíveis:
     * - "completed": Projeto finalizado
     * - "coming-soon": Projeto em desenvolvimento
     */
    @GetMapping("/projects")
    public ResponseEntity<List<Map<String, Object>>> getProjects() {
        List<Map<String, Object>> projects = new ArrayList<>();
        
        // PROJETO 1: Sistema de Análise de Imagens para Enchentes (Projeto Principal)
        Map<String, Object> project1 = new HashMap<>();
        project1.put("id", 1);
        project1.put("title", "Sistema de Monitoramento Fluvial Inteligente");
        project1.put("description", 
            "Sistema de monitoramento fluvial inteligente usando ESP32-CAM para " +
            "detecção automática de mudanças visuais em rios, prevenindo enchentes em tempo real.");
        project1.put("technologies", Arrays.asList("Python", "OpenCV", "ESP32-CAM", "Machine Learning", "IoT"));
        project1.put("githubUrl", "https://github.com/gpassos01/espCam_imageAnalysis");
        project1.put("liveUrl", "https://github.com/gpassos01/espCam_imageAnalysis");
        project1.put("imageUrl", "/images/ai-thinker-esp32-cam.png");
        project1.put("status", "completed");
        projects.add(project1);

        // PROJETO 2: Hackathon Seccomp30
        Map<String, Object> project2 = new HashMap<>();
        project2.put("id", 2);
        project2.put("title", "Hackathon Seccomp30");
        project2.put("description", 
            "Desafio Hackathon desenvolvido durante a trigésima edição da Seccomp em " +
            "parceria com a empresa Magis5, focado em soluções inovadoras.");
        project2.put("technologies", Arrays.asList("C"));
        project2.put("githubUrl", "https://github.com/gpassos01/Hackathon_Seccomp30");
        project2.put("liveUrl", "https://github.com/gpassos01/Hackathon_Seccomp30");
        project2.put("imageUrl", "/images/hackathon-seccomp.png");
        project2.put("status", "completed");
        projects.add(project2);

        // PROJETO 3: Template ABNT para LaTeX
        Map<String, Object> project3 = new HashMap<>();
        project3.put("id", 3);
        project3.put("title", "Template ABNT - LaTeX");
        project3.put("description", 
            "Template ABNT para produção de documentos acadêmicos em formato TeX, " +
            "facilitando a criação de trabalhos científicos com formatação adequada.");
        project3.put("technologies", Arrays.asList("LaTeX", "TeX", "ABNT", "Documentação", "Template"));
        project3.put("githubUrl", "https://github.com/gpassos01/tex_template");
        project3.put("liveUrl", "https://github.com/gpassos01/tex_template");
        project3.put("imageUrl", "/images/latex-template.png");
        project3.put("status", "completed");
        projects.add(project3);

        // PROJETO 4: Portfólio Pessoal
        Map<String, Object> project4 = new HashMap<>();
        project4.put("id", 4);
        project4.put("title", "Portfólio Pessoal");
        project4.put("description", 
            "Site portfólio pessoal desenvolvido com React e Spring Boot, " +
            "apresentando projetos, habilidades e informações profissionais com design neon cyberpunk.");
        project4.put("technologies", Arrays.asList("React", "Spring Boot", "Java", "CSS3", "Framer Motion"));
        project4.put("githubUrl", "https://github.com/gpassos01/portfolio_website");
        project4.put("liveUrl", "https://gabriel-passos-portfolio.vercel.app");
        project4.put("imageUrl", "/images/portfolio-website.png");
        project4.put("status", "completed");
        projects.add(project4);

        // PROJETO 5: Projeto "Em Breve" - Placeholder para projetos futuros
        Map<String, Object> project5 = new HashMap<>();
        project5.put("id", 5);
        project5.put("title", "Em Breve...");
        project5.put("description", 
            "Novo projeto em desenvolvimento! Aguarde mais novidades em breve. " +
            "Será algo incrível! 🚀");
        project5.put("technologies", Arrays.asList("React", "Spring Boot", "PostgreSQL", "Docker"));
        project5.put("githubUrl", null); // Ainda não disponível
        project5.put("liveUrl", null);   // Ainda não disponível
        project5.put("imageUrl", null);  // Usa placeholder do frontend
        project5.put("status", "coming-soon");
        projects.add(project5);

        return ResponseEntity.ok(projects);
    }

    /**
     * Endpoint para obter habilidades técnicas categorizadas
     * 
     * Retorna as habilidades organizadas por categoria:
     * - Backend: Linguagens e frameworks servidor
     * - Frontend: Tecnologias client-side
     * - Tools: Ferramentas e tecnologias auxiliares
     * 
     * Cada habilidade tem um nível de proficiência (0-100)
     * 
     * @return ResponseEntity contendo Map com categorias de habilidades
     */
    @GetMapping("/skills")
    public ResponseEntity<Map<String, List<Map<String, Object>>>> getSkills() {
        Map<String, List<Map<String, Object>>> skills = new HashMap<>();
        
        // Linguagens de Programação
        List<Map<String, Object>> languages = new ArrayList<>();
        languages.add(createSkill("C/C++", 90));
        languages.add(createSkill("Python", 70));
        languages.add(createSkill("Java", 40));
        languages.add(createSkill("JavaScript",40));
        skills.put("Linguagens de Programação", languages);

        // Desenvolvimento Web
        List<Map<String, Object>> webDev = new ArrayList<>();
        webDev.add(createSkill("React", 50));
        webDev.add(createSkill("Spring Boot", 45));
        webDev.add(createSkill("HTML/CSS", 55));
        webDev.add(createSkill("Node.js", 45));
        skills.put("Desenvolvimento Web", webDev);

        // IoT & Data Science
        List<Map<String, Object>> iotData = new ArrayList<>();
        iotData.add(createSkill("mySQL", 70));
        iotData.add(createSkill("IoT", 70));
        iotData.add(createSkill("Espressif", 70));
        skills.put("IoT & Data Science", iotData);

        // Ferramentas & Outros
        List<Map<String, Object>> tools = new ArrayList<>();
        tools.add(createSkill("Git & GitHub", 85));
        tools.add(createSkill("Docker", 60));
        tools.add(createSkill("LaTeX", 70));
        tools.add(createSkill("APIs REST", 55));
        skills.put("Ferramentas & Outros", tools);

        return ResponseEntity.ok(skills);
    }

    /**
     * Método auxiliar para criar objetos de habilidade
     * 
     * Centraliza a criação de habilidades com nome e nível,
     * garantindo consistência na estrutura dos dados.
     * 
     * @param name Nome da habilidade (ex: "Java", "React")
     * @param level Nível de proficiência de 0 a 100
     * @return Map contendo name e level da habilidade
     */
    private Map<String, Object> createSkill(String name, int level) {
        Map<String, Object> skill = new HashMap<>();
        skill.put("name", name);
        skill.put("level", level);
        return skill;
    }

    /**
     * Endpoint para processar formulário de contato
     * 
     * Recebe dados do formulário de contato do frontend
     * e processa a mensagem através do EmailService.
     * 
     * Funcionalidades implementadas:
     *    -Envio de email real via SMTP
     *    -Validação de dados de entrada
     *    -Tratamento de erros
     *    -Log de operações
     *    -Resposta adequada para o frontend
     * 
     * @param contactData Map contendo dados do formulário
     *                   Campos esperados: name, email, message
     * @return ResponseEntity com status da operação
     * 
     * Exemplo de request body:
     * {
     *   "name": "João Silva",
     *   "email": "joao@email.com",
     *   "message": "Olá, gostaria de conversar sobre projetos..."
     * }
     */
    @PostMapping("/contact")
    public ResponseEntity<Map<String, String>> sendContact(@RequestBody Map<String, String> contactData) {
        Map<String, String> response = new HashMap<>();
        
        try {
            // Validação básica dos dados recebidos
            String name = contactData.get("name");
            String email = contactData.get("email");
            String message = contactData.get("message");
            
            if (name == null || name.trim().isEmpty()) {
                response.put("status", "error");
                response.put("message", "Nome é obrigatório");
                return ResponseEntity.badRequest().body(response);
            }
            
            if (email == null || email.trim().isEmpty()) {
                response.put("status", "error");
                response.put("message", "Email é obrigatório");
                return ResponseEntity.badRequest().body(response);
            }
            
            if (message == null || message.trim().isEmpty()) {
                response.put("status", "error");
                response.put("message", "Mensagem é obrigatória");
                return ResponseEntity.badRequest().body(response);
            }
            
            // Log das informações recebidas
            System.out.println("=== NOVO CONTATO RECEBIDO ===");
            System.out.println("Nome: " + name);
            System.out.println("Email: " + email);
            System.out.println("Mensagem: " + message.substring(0, Math.min(message.length(), 100)) + "...");
            System.out.println("========================");
            
            // Verificar se o email está configurado
            if (!emailService.isEmailConfigured()) {
                System.err.println("⚠️ Email não configurado. Verifique as variáveis de ambiente.");
                response.put("status", "error");
                response.put("message", "Serviço de email temporariamente indisponível");
                return ResponseEntity.internalServerError().body(response);
            }
            
            // Envio do email através do EmailService
            emailService.sendContactEmail(name.trim(), email.trim(), message.trim());
            
            // Resposta de sucesso para o frontend
            response.put("status", "success");
            response.put("message", "Mensagem enviada com sucesso! Obrigado pelo contato.");
            
            return ResponseEntity.ok(response);
            
        } catch (Exception e) {
            // Log de erro detalhado
            System.err.println("❌ Erro no endpoint de contato: " + e.getMessage());
            e.printStackTrace();
            
            // Resposta de erro para o frontend
            response.put("status", "error");
            response.put("message", "Erro interno do servidor. Tente novamente mais tarde.");
            
            return ResponseEntity.internalServerError().body(response);
        }
    }
} 