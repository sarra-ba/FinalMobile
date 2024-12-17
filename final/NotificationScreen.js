import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import NavBar from './NavBar';  // Import the NavBar component

const Notifications = () => {
  return (
    <View style={styles.container}>
      
      <ImageBackground
        source={require('./assets/background1.png')}
        style={styles.image}
        imageStyle={styles.roundedBorder}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Notifications</Text>
        </View>
        <Image
          source={require('./assets/leaf-removebg-preview1.png')}
          style={styles.leaf}
        />
      </ImageBackground>
      {/* Use NavBar Component */}
      <NavBar /> {/* This replaces the navbar code */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width: 411,
    height: 720,
    top: 130,
    borderRadius: 30,
  },
  roundedBorder: {
    borderRadius: 50,
  },
  headerContainer: {
    alignItems: 'center',
  },
  headerText: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    top: 20,
    fontFamily: 'notoserif', // Ensure the font is installed and linked correctly
  },
  leaf: {
    position: 'absolute',
    top: -90,
    right: -8,
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
});

export default Notifications;
