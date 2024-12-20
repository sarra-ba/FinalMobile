package com.example.mobile.services;

import com.example.mobile.Models.User;
import com.example.mobile.Repositories.UserRepository;
import com.example.mobile.dto.UpdateProfileRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.util.StringUtils;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import java.io.IOException;
import java.nio.file.*;

@Service
public class UserProfileService {

    @Autowired
    private UserRepository userRepository;

    // Define the directory where files will be stored (if storing locally)
    private final String uploadDir = "uploads/";

    public User updateUserProfile(String userId, UpdateProfileRequest updateProfileRequest, MultipartFile profilePicture) {
        // Assuming userId is an email, use findByEmail instead of findById
        User user = userRepository.findByEmail(userId).orElse(null); // Use findByEmail if userId is email
        
        if (user == null) {
            return null;  // User not found
        }

        // Update the user fields
        if (updateProfileRequest.getUsername() != null) {
            user.setUsername(updateProfileRequest.getUsername());  // Use setName instead of setUsername
        }
        if (updateProfileRequest.getEmail() != null) {
            user.setEmail(updateProfileRequest.getEmail());
        }
        if (updateProfileRequest.getPhoneNumber() != null) {
            user.setPhoneNumber(updateProfileRequest.getPhoneNumber());
        }
        if (updateProfileRequest.getPassword() != null) {
            // Hash the new password before saving
            user.setPassword(updateProfileRequest.getPassword());  // Assuming password is already hashed
        }

        // Handle the profile picture file upload
        if (profilePicture != null && !profilePicture.isEmpty()) {
            String fileName = StringUtils.cleanPath(profilePicture.getOriginalFilename());
            try {
                // Save the file locally (you can change this to store in a cloud storage if needed)
                Path targetLocation = Paths.get(uploadDir).resolve(fileName);
                Files.copy(profilePicture.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);

                // Optionally, create a URL to access the uploaded file
                String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                        .path("/uploads/")  // This assumes the file is accessible from this path
                        .path(fileName)
                        .toUriString();

                user.setProfilePicture(fileDownloadUri);  // Save the file URL to the user profile
            } catch (IOException e) {
                e.printStackTrace();
                // Handle file upload error
                return null;
            }
        }

        // Save the updated user
        return userRepository.save(user);
    }
}
