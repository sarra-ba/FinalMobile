package com.example.mobile.services;

import com.example.mobile.Models.Product;
import com.example.mobile.Repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    // Get all products
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    // Add a new product
    public Product addProduct(Product product) {
        return productRepository.save(product);
    }
}
