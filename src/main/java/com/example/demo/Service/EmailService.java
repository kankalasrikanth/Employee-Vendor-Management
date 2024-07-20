package com.example.demo.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.Model.SentEmail;

@Service
public class EmailService {
    private List<SentEmail> sentEmails = new ArrayList<>();

    public SentEmail sendEmail(String recipient, String message) {
        SentEmail email = new SentEmail();
        sentEmails.add(email);
        System.out.println("Sending email to: " + recipient + "\nMessage: " + message);
        return email;
    }

    public List<SentEmail> getAllSentEmails() {
        return sentEmails;
    }
}