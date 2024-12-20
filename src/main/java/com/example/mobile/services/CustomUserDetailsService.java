package com.example.mobile.services;

import com.example.mobile.Models.User; // Import your custom User class
import com.example.mobile.dto.Enums.UserType; // Import the UserType enum
import com.example.mobile.Repositories.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.core.userdetails.User.UserBuilder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    public CustomUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        // Retrieve the user from the repository using the email
        Optional<User> userOptional = userRepository.findByEmail(email);
        
        // If the user is found, create a UserDetails object for Spring Security
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            
            // Dynamically assign roles based on userType
            String[] roles = new String[] { mapUserTypeToRole(user.getUserType()) };
            
            // Return the UserDetails object
            UserBuilder userBuilder = org.springframework.security.core.userdetails.User.withUsername(user.getEmail())  // Use email as username
                    .password(user.getPassword())  // Use the stored password
                    .roles(roles);  // Assign roles dynamically
            
            return userBuilder.build();
        } else {
            throw new UsernameNotFoundException("User not found with email: " + email);
        }
    }

    // Helper method to map userType to Spring Security roles
    private String mapUserTypeToRole(UserType userType) {
        switch (userType) {
            case FARMER:
                return "FARMER";  // Example role for farmer
            case RESTAURANT:
                return "RESTAURANT";  // Example role for restaurant
            default:
                return "USER";  // Default role
        }
    }
}
