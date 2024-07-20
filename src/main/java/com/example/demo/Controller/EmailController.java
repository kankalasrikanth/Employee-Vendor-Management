package com.example.demo.Controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.SentEmail;
import com.example.demo.Model.Vendor;
import com.example.demo.Service.EmailService;
import com.example.demo.Service.VendorService;

@RestController
@RequestMapping("/api/emails")
public class EmailController {
    @Autowired
    private EmailService emailService;
    @Autowired
    private VendorService vendorService;

    @PostMapping
    public SentEmail sendEmail(@RequestBody Map<String, Object> payload) {
        String recipient = (String) payload.get("recipient");
        Vendor vendor = vendorService.getAllVendors().stream()
            .filter(v -> v.getEmail().equals(recipient))
            .findFirst()
            .orElseThrow(() -> new IllegalArgumentException("Vendor not found"));
        String message = "Sending payments to vendor " + vendor.getName() + " at UPI " + vendor.getUpi();
        return emailService.sendEmail(recipient, message);
    }

    @GetMapping
    public List<SentEmail> getAllSentEmails() {
        return emailService.getAllSentEmails();
    }
}
