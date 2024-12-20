package com.example.mobile.Repositories;

import com.example.mobile.Models.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository // Add this annotation for clarity
public interface UserRepository extends MongoRepository<User, String> { 
    Optional<User> findByEmail(String email); // Custom query method to find user by email
}
