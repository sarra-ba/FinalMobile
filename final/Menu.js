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
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import LinearGradient from 'react-native-linear-gradient'; 
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
  },
  image: {
    justifyContent: 'center',
    color: 'green',
  },
  topImage: {
    alignItems: 'center',
  },
  imageStyle: {
    width: 450,
    top: -10,
    resizeMode: 'contain',
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#426816',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default MenuScreen;
