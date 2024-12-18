import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';  // Import Lottie

const Success = ({ navigation }) => {
  // Automatically navigate after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 2000); // 2000 ms = 2 seconds
    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Lottie Animation */}
      <View style={styles.animationContainer}>
        <LottieView
          source={require('../final/assets/s.json')} // Path to your Lottie animation file
          autoPlay
          loop={false}
          style={styles.animatedIcon}
        />
      </View>

      <Text style={styles.successMessage}>Password reset successful!</Text>
      <Text style={styles.subMessage}>Redirecting to Login...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // White background for consistency
    paddingTop: 60, // Padding at the top for spacing
  },
  animationContainer: {
    height: 200,  // Adjusted height for Lottie animation
    width: 200,   // Adjusted width for Lottie animation
    marginBottom: 30, // Space between animation and text
  },
  animatedIcon: {
    width: 200,
    height: 200, // Size of the animation
  },
  successMessage: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#83CE2C',
    marginBottom: 20, // Space between message and sub-message
  },
  subMessage: {
    fontSize: 16,
    color: '#70BE19'
  },
});

export default Success;
