package com.example.mobile.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class RegisterRequest {

    public enum UserType {
        FARMER,
        RESTAURANT;
    }

    @NotBlank
    private String username;

    @NotBlank
    @Email
    private String email;

    @NotBlank
    @Size(min = 8, message = "Password must be at least 8 characters long")
    private String password;

    @NotBlank
    private String userType; // Keep it as String to accept values like "FARMER" or "RESTAURANT"

    // Getters and Setters
    public String getUsername() { 
        return username; 
    }

    public void setUsername(String username) { 
        this.username = username; 
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUserType() {
        return userType;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }

    // Convert userType String to UserType Enum
    public UserType getUserTypeEnum() {
        return UserType.valueOf(userType.toUpperCase()); // Convert string to enum
    }
}
