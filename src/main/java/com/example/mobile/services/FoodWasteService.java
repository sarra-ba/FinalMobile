package com.example.mobile.services;

import com.example.mobile.Models.FoodWaste;
import com.example.mobile.Repositories.FoodWasteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FoodWasteService {

    @Autowired
    private FoodWasteRepository foodWasteRepository;

    // Add FoodWaste method
    public FoodWaste addFoodWaste(FoodWaste foodWaste) {
        return foodWasteRepository.save(foodWaste);
    }

    // Delete FoodWaste method
    public boolean deleteFoodWaste(String id) {
        if (foodWasteRepository.existsById(id)) {
            foodWasteRepository.deleteById(id);
            return true;
        }
        return false;
    }

    // Update FoodWaste method
    public FoodWaste updateFoodWaste(String id, FoodWaste updatedFoodWaste) {
        if (foodWasteRepository.existsById(id)) {
            updatedFoodWaste.setId(id); // Set the id to the existing one to update it
            return foodWasteRepository.save(updatedFoodWaste); // Save the updated food waste
        }
        return null; // Return null if food waste with the given id doesn't exist
    }
}
