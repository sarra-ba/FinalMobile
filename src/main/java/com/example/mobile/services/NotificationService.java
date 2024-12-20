package com.example.mobile.services;

import com.example.mobile.Models.Notification;
import com.example.mobile.Repositories.NotificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NotificationService {

    @Autowired
    private NotificationRepository notificationRepository;

    // Get all notifications
    public List<Notification> getAllNotifications() {
        return notificationRepository.findAll();
    }

    // Add a new notification
    public Notification addNotification(Notification notification) {
        return notificationRepository.save(notification);
    }
}
