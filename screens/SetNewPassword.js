import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; // Importing LinearGradient component
import LottieView from 'lottie-react-native';  // Import Lottie

export default function SetNewPassword({ navigation }) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordUpdate = () => {
    if (password === confirmPassword) {
      // Proceed with password update logic
      navigation.navigate('Success');
    } else {
      alert("Passwords do not match.");
    }
  };

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

      <Text style={styles.title}>Set a new password</Text>

      <TextInput
        style={[styles.input, { color: 'black' }]}
        placeholder="Password"
        placeholderTextColor="#999"
        secureTextEntry
        onChangeText={setPassword}
      />
      <TextInput
        style={[styles.input, { color: 'black' }]}
        placeholder="Confirm Password"
        placeholderTextColor="#999"
        secureTextEntry
        onChangeText={setConfirmPassword}
      />

      {/* Linear Gradient Button */}
      <LinearGradient
        colors={['#83CE2C', '#426816']} // Gradient colors
        style={styles.button} // Apply gradient styles to the button
      >
        <TouchableOpacity onPress={handlePasswordUpdate}>
          <Text style={styles.buttonText}>Update Password</Text>
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
    paddingTop: 60, // Padding at the top to match other screens
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
  input: { 
    width: '90%', 
    height: 50, 
    borderWidth: 1, 
    borderColor: '#81CE2C', // Light green border for inputs
    borderRadius: 8, 
    paddingHorizontal: 10, 
    marginBottom: 10, 
    backgroundColor: '#F5F5F5', // Light grey background for inputs
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
