import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; // Importing LinearGradient component
import LottieView from 'lottie-react-native';  // Import Lottie

export default function PasswordReset({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Lottie Animation at the Top */}
      <View style={styles.animationContainer}>
        <LottieView
          source={require('../final/assets/thinking.json')} // Path to your Lottie animation file
          autoPlay
          loop
          style={styles.animatedIcon}
          speed={2} // Speed up the animation
        />
      </View>

      <Text style={styles.title}>Password reset</Text>
      <Text style={styles.subtitle}>
        Your password has been successfully reset. Click confirm to set a new password.
      </Text>

      {/* Linear Gradient Button */}
      <LinearGradient
        colors={['#72C21B', '#81CE2C', '#426816']} // Gradient colors
        style={styles.button} // Apply gradient styles to the button
      >
        <TouchableOpacity onPress={() => navigation.navigate('SetNewPassword')}>
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff', // White background for consistency
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    paddingTop: 60, // Padding at the top to match ForgotPassword screen
  },
  animationContainer: {
    height: 200,  // Adjusted height for the Lottie animation
    width: 200,   // Adjusted width for the Lottie animation
    marginBottom: 20, // Space between animation and title
  },
  animatedIcon: {
    width: 200,
    height: 200, // Adjusted size of the animation
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#426816', // Dark green for title text
    marginBottom: 20, // Adjusted space between title and form
  },
  subtitle: { 
    fontSize: 16, 
    color: '#666', 
    marginBottom: 20, 
    textAlign: 'center' 
  },
  button: { 
    marginTop: 20, 
    paddingVertical: 12, 
    width: '90%', 
    borderRadius: 8, 
    alignItems: 'center' 
  },
  buttonText: { 
    color: '#fff', 
    textAlign: 'center', 
    fontWeight: 'bold', 
    fontSize: 16 
  },
});
