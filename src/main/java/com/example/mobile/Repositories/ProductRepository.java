package com.example.mobile.Repositories;

import com.example.mobile.Models.Product;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends MongoRepository<Product, String> {
    // You can define custom query methods here if needed
}
