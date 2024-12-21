package com.example.mobile.Models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "food_waste")
public class FoodWaste {

    @Id
    private String id;
    private String name;
    private String quantity;
    private double price;
    private String category;
    private String source;
    private String disposalMethod;
    private String date;

    // Default Constructor
    public FoodWaste() {
    }

    // Parameterized Constructor
    public FoodWaste(String id, String name, String quantity, double price, String category, String source, String disposalMethod, String date) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.category = category;
        this.source = source;
        this.disposalMethod = disposalMethod;
        this.date = date;
    }

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getQuantity() {
        return quantity;
    }

    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }

    public String getDisposalMethod() {
        return disposalMethod;
    }

    public void setDisposalMethod(String disposalMethod) {
        this.disposalMethod = disposalMethod;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "FoodWaste{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", quantity='" + quantity + '\'' +
                ", price=" + price +
                ", category='" + category + '\'' +
                ", source='" + source + '\'' +
                ", disposalMethod='" + disposalMethod + '\'' +
                ", date='" + date + '\'' +
                '}';
    }
}
