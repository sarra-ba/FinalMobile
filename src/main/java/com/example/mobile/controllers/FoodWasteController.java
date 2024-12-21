package com.example.mobile.controllers;

import com.example.mobile.Models.FoodWaste;
import com.example.mobile.services.FoodWasteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/foodwaste")
public class FoodWasteController {

    @Autowired
    private FoodWasteService foodWasteService;

    // Add FoodWaste method
    @PostMapping("/add")
    public ResponseEntity<FoodWaste> addFoodWaste(@RequestBody FoodWaste foodWaste) {
        FoodWaste addedFoodWaste = foodWasteService.addFoodWaste(foodWaste);
        return ResponseEntity.ok(addedFoodWaste);
    }

    // Delete FoodWaste method
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteFoodWaste(@PathVariable String id) {
        boolean isDeleted = foodWasteService.deleteFoodWaste(id);
        
        if (isDeleted) {
            return ResponseEntity.ok("Food waste deleted successfully");
        } else {
            return ResponseEntity.status(404).body("Food waste not found");
        }
    }

    // Update FoodWaste method
    @PutMapping("/update/{id}")
    public ResponseEntity<String> updateFoodWaste(@PathVariable String id, @RequestBody FoodWaste updatedFoodWaste) {
        FoodWaste updated = foodWasteService.updateFoodWaste(id, updatedFoodWaste);
        
        if (updated != null) {
            return ResponseEntity.ok("Food waste updated successfully");
        } else {
            return ResponseEntity.status(404).body("Food waste not found");
        }
    }
}
