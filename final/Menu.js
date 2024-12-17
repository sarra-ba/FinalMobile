import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import NavBar from './NavBar'; // Import the NavBar component

const MenuScreen = () => {
  const navigation = useNavigation(); // Access navigation object

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        {/* Background Image */}
        <ImageBackground
          source={require('./assets/image_2024-12-03_151959045.svg')}
          resizeMode="cover"
          style={styles.image}
        />

        {/* Top Image */}
        <View style={styles.topImage}>
          <Image source={require('./assets/Intersect.png')} style={styles.imageStyle} />
        </View>

        {/* NavBar Component */}
        <NavBar />

        {/* Order Details Button */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('OrderDetail')} // Navigate to OrderDetail
          >
            <Text style={styles.buttonText}>Order Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between', // Ensure spacing for bottom button
  },
  topImage: {
    alignItems: 'center',
  },
  imageStyle: {
    width: 450,
    top: -10,
    resizeMode: 'contain',
  },
  image: {
    justifyContent: 'center',
    color: 'green',
    flex: 1,
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 30, // Add spacing at the bottom
  },
  button: {
    backgroundColor: '#e91e63',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default MenuScreen;
