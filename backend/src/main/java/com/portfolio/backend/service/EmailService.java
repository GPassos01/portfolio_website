package com.portfolio.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

/**
 * Serviço de Envio de Email
 * 
 * Responsável por gerenciar o envio de emails do formulário de contato.
 * Utiliza o Spring Boot Mail para configuração SMTP e envio.
 * 
 * Funcionalidades:
 * - Envio de email de contato para o proprietário do portfólio
 * - Formatação adequada da mensagem
 * - Tratamento de erros
 * - Log de operações
 * 
 * @author Gabriel Passos
 * @version 1.0
 * @since 2025
 */
@Service
public class EmailService {

    @Autowired
    private JavaMailSender javaMailSender;

    /**
     * Email do destinatário (proprietário do portfólio)
     * Configurado via application.properties
     */
    @Value("${app.email.recipient}")
    private String recipientEmail;

    /**
     * Envia email de contato do portfólio
     * 
     * Recebe os dados do formulário de contato e envia um email
     * formatado para o proprietário do portfólio com todas as
     * informações necessárias para resposta.
     * 
     * @param name Nome da pessoa que está entrando em contato
     * @param email Email da pessoa para resposta
     * @param message Mensagem enviada através do formulário
     * @throws Exception Se houver erro no envio do email
     */
    public void sendContactEmail(String name, String email, String message) throws Exception {
        try {
            // Criação da mensagem de email
            SimpleMailMessage mailMessage = new SimpleMailMessage();
            
            // Configurações básicas
            mailMessage.setTo(recipientEmail);
            mailMessage.setSubject("📧 Nova Mensagem do Portfólio - " + name);
            mailMessage.setReplyTo(email); // Permite resposta direta
            
            // Formatação do corpo do email
            String emailBody = formatEmailBody(name, email, message);
            mailMessage.setText(emailBody);
            
            // Envio do email
            javaMailSender.send(mailMessage);
            
            // Log de sucesso
            System.out.println("✅ Email enviado com sucesso para: " + recipientEmail);
            System.out.println("📤 Remetente: " + name + " (" + email + ")");
            
        } catch (Exception e) {
            // Log de erro
            System.err.println("❌ Erro ao enviar email: " + e.getMessage());
            throw new Exception("Falha ao enviar email: " + e.getMessage());
        }
    }

    /**
     * Formata o corpo do email de contato
     * 
     * Cria uma mensagem bem estruturada e profissional
     * com todas as informações necessárias.
     * 
     * @param name Nome do remetente
     * @param email Email do remetente
     * @param message Mensagem original
     * @return String formatada para o corpo do email
     */
    private String formatEmailBody(String name, String email, String message) {
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
        
        return String.format("""
            🚀 NOVA MENSAGEM DO PORTFÓLIO
            
            ═══════════════════════════════════════
            
            👤 INFORMAÇÕES DO CONTATO:
            • Nome: %s
            • Email: %s
            • Data/Hora: %s
            
            ═══════════════════════════════════════
            
            💬 MENSAGEM:
            
            %s
            
            ═══════════════════════════════════════
            
            📝 INSTRUÇÕES PARA RESPOSTA:
            • Responda diretamente este email
            • O email será enviado automaticamente para: %s
            • Ou copie o email para resposta manual
            
            ═══════════════════════════════════════
            
            🤖 Este email foi enviado automaticamente através do 
               sistema de contato do portfólio de Gabriel Passos.
            
            """, 
            name, 
            email, 
            now.format(formatter), 
            message, 
            email
        );
    }

    /**
     * Valida se o serviço de email está configurado corretamente
     * 
     * @return true se as configurações estão corretas
     */
    public boolean isEmailConfigured() {
        return recipientEmail != null && !recipientEmail.isEmpty();
    }
} 