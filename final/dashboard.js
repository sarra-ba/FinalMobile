import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NavBar from './NavBar'; // Import the NavBar component

const DashboardScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Ensure ImageBackground is not overlapping too much with other content */}
      <ImageBackground
        source={require('./assets/background1.png')}
        style={styles.image}
        imageStyle={styles.roundedBorder}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Dashboard</Text>
        </View>
        <Image
          source={require('./assets/leaf-removebg-preview1.png')}
          style={styles.leaf}
        />
      </ImageBackground>

      {/* Use the NavBar component here */}
      <NavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', // Ensure space for the bottom bar
  },
  image: {
    width: '100%',
    height: 720,
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
    top: 130,
    fontFamily: 'notoserif',
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

export default DashboardScreen;
