package com.example.mobile.Repositories;

import com.example.mobile.Models.FoodWaste;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FoodWasteRepository extends MongoRepository<FoodWaste, String> {
}
