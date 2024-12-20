package com.example.mobile.controllers;

import com.example.mobile.Models.Notification;
import com.example.mobile.services.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/notifications")
public class NotificationController {

    @Autowired
    private NotificationService notificationService;

    // Get all notifications
    @GetMapping
    public List<Notification> getAllNotifications() {
        return notificationService.getAllNotifications();
    }

    // Add a new notification
    @PostMapping
    public Notification addNotification(@RequestBody Notification notification) {
        return notificationService.addNotification(notification);
    }
}
