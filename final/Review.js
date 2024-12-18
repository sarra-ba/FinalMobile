import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';

const Review = ({ route, navigation }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const handleSubmit = () => {
    // Here, you would handle the review submission (e.g., save to a database)
    alert(`Review submitted! Rating: ${rating}, Review: ${review}`);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Review {route.params.product.name}</Text>
      <AirbnbRating
        count={5}
        defaultRating={rating}
        size={30}
        onFinishRating={setRating}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Write your review here..."
        value={review}
        onChangeText={setReview}
        multiline
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit Review</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    height: 100,
    marginVertical: 10,
  },
  submitButton: {
    backgroundColor: '#83CE2C',
    padding: 15,
    borderRadius: 25,
    marginTop: 20,
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Review;
