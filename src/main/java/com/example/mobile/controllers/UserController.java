package com.example.mobile.controllers;

import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import com.example.mobile.Repositories.UserRepository;
import com.example.mobile.Models.User;
import com.example.mobile.dto.RegisterRequest;
import com.example.mobile.services.UserProfileService;
import com.example.mobile.dto.LoginRequest;
import com.example.mobile.dto.UpdateProfileRequest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import jakarta.validation.Valid;
import java.nio.file.Files;
import java.nio.file.StandardCopyOption;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import org.springframework.web.multipart.MultipartFile;
import java.io.File;
import java.io.IOException;
import java.nio.file.Path;

import com.example.mobile.dto.Enums.UserType;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserProfileService userProfileService;  // Injecting the service layer
    
    private static final String UPLOAD_DIR = "uploads/";  // Directory to save images

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    // Method to save the profile image
    private String saveProfileImage(MultipartFile profileImage) {
        // Generate a unique file name for the image
        String fileName = System.currentTimeMillis() + "-" + profileImage.getOriginalFilename();
        Path targetLocation = Path.of(UPLOAD_DIR, fileName);

        // Create the upload directory if it doesn't exist
        File directory = new File(UPLOAD_DIR);
        if (!directory.exists()) {
            directory.mkdirs();
        }

        try {
            // Copy the file to the target location
            Files.copy(profileImage.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);
        } catch (IOException e) {
            e.printStackTrace();
            return null;  // Return null if there was an error
        }

        return targetLocation.toString();  // Return the file path or URL
    }

    // Register User
    @PostMapping("/register")
    public ResponseEntity<Map<String, String>> register(@Valid @RequestBody RegisterRequest registerRequest) {
        Map<String, String> response = new HashMap<>();
    
        // Check if a user with the given email exists
        Optional<User> existingUserByEmail = userRepository.findByEmail(registerRequest.getEmail());
        if (existingUserByEmail.isPresent()) {
            response.put("message", "Email already exists!");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }
    
        // Map RegisterRequest to User entity
        User newUser = new User();
        newUser.setUsername(registerRequest.getUsername());
        newUser.setEmail(registerRequest.getEmail());
    
        // Hash the password before saving
        String hashedPassword = passwordEncoder.encode(registerRequest.getPassword());
        newUser.setPassword(hashedPassword);
    
        // Map userType from String to UserType enum
        UserType userType = UserType.valueOf(registerRequest.getUserType().toUpperCase()); // Converts string to enum
        newUser.setUserType(userType); // Set the userType
    
        // Save the new user
        userRepository.save(newUser);
        response.put("message", "User registered successfully!");
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
    
    // Login User
    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> login(@Valid @RequestBody LoginRequest loginRequest) {
        Optional<User> existingUser = userRepository.findByEmail(loginRequest.getEmail());
        Map<String, Object> response = new HashMap<>();
        
        if (existingUser.isEmpty() || !passwordEncoder.matches(loginRequest.getPassword(), existingUser.get().getPassword())) {
            response.put("message", "Invalid credentials!");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }
        
        // Add the userId, phoneNumber, profilePicture, and userType to the response
        User user = existingUser.get();
        response.put("message", "Login successful!");
        response.put("userId", user.getId()); // Add userId to the response
        response.put("phoneNumber", user.getPhoneNumber()); // Add phone number
        response.put("profilePicture", user.getProfilePicture()); // Add profile picture
        response.put("userType", user.getUserType()); // Add userType to the response (adjust this based on your User entity)

        return ResponseEntity.ok(response);
    }

    // Update Profile
    @PutMapping("/updateProfile")
    public ResponseEntity<Map<String, String>> updateProfile(
            @RequestParam String userId,
            @RequestParam(required = false) MultipartFile profileImage,
            @RequestParam(required = false) String username,
            @RequestParam(required = false) String email,
            @RequestParam(required = false) String phoneNumber,
            @RequestParam(required = false) String password) {
        Map<String, String> response = new HashMap<>();

        // Fetch user by userId
        Optional<User> userOptional = userRepository.findById(userId);

        if (userOptional.isEmpty()) {
            response.put("message", "User not found!");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        }

        User user = userOptional.get();

        // Update fields if provided
        if (username != null) {
            user.setUsername(username);
        }
        if (email != null) {
            user.setEmail(email);
        }
        if (phoneNumber != null) {
            user.setPhoneNumber(phoneNumber);
        }
        if (password != null) {
            user.setPassword(passwordEncoder.encode(password));
        }

        // Handle profile image upload
        if (profileImage != null && !profileImage.isEmpty()) {
            String imagePath = saveProfileImage(profileImage); // Implement this method
            if (imagePath != null) {
                user.setProfilePicture(imagePath);  // Set the image path in the user entity
            } else {
                response.put("message", "Error saving profile image!");
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
            }
        }

        // Save updated user
        userRepository.save(user);

        response.put("message", "Profile updated successfully!");
        return ResponseEntity.ok(response);
    }

    // Logout endpoint
    @PostMapping("/logout")
    public ResponseEntity<Map<String, String>> logout(HttpSession session) {
        Map<String, String> response = new HashMap<>();
        
        // Invalidate the session to log the user out
        session.invalidate();
        
        response.put("message", "Logout successful!");
        return ResponseEntity.ok(response);
    }
}
