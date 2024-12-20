package com.example.mobile.controllers;

import com.example.mobile.Models.Order;
import com.example.mobile.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    // Endpoint to add an order
    @PostMapping("/add")
    public Order addOrder(@RequestParam String userId, 
                          @RequestParam String productId) {
        return orderService.addOrder(userId, productId);
    }

    // Endpoint to fetch orders by userId
    @GetMapping("/user/{userId}")
    public List<Order> getOrdersByUserId(@PathVariable String userId) {
        return orderService.getOrdersByUserId(userId);
    }
}
