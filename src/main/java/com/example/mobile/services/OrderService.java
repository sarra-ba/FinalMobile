package com.example.mobile.services;

import com.example.mobile.Models.Order;
import com.example.mobile.Models.Product;
import com.example.mobile.Repositories.OrderRepository;
import com.example.mobile.Repositories.ProductRepository;  // Assuming you have a ProductRepository
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final ProductRepository productRepository;  // Inject ProductRepository

    @Autowired
    public OrderService(OrderRepository orderRepository, ProductRepository productRepository) {
        this.orderRepository = orderRepository;
        this.productRepository = productRepository;
    }

    // Method to add an order
    public Order addOrder(String userId, String productId) {
        // Fetch the product by its ID
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        // Create a new order object
        Order order = new Order();
        order.setName(product.getName());
        order.setPrice(product.getPrice());
        order.setUserId(userId);  // Set the userId for the order
        
        // Save the order to the database
        return orderRepository.save(order);
    }

    // Method to fetch orders by userId
    public List<Order> getOrdersByUserId(String userId) {
        return orderRepository.findByUserId(userId);  // Assuming the method exists in the repository
    }
}
