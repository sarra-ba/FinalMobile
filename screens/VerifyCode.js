import React, { useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; // Importing the LinearGradient component
import LottieView from 'lottie-react-native';  // Import Lottie

export default function VerifyCode({ navigation }) {
  const inputs = useRef([]);

  const handleInputChange = (text, index) => {
    if (text.length === 1 && index < 4) {
      inputs.current[index + 1].focus();
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

      <Text style={styles.title}>Check your email</Text>
      <Text style={styles.subtitle}>
        We sent a reset link to your email. Enter the 5-digit code mentioned in the email.
      </Text>

      <View style={styles.codeContainer}>
        {[...Array(5)].map((_, i) => (
          <TextInput
            key={i}
            style={[styles.codeInput, { color: 'black' }]} // Set text color to black
            maxLength={1}
            keyboardType="number-pad"
            ref={(el) => (inputs.current[i] = el)} // Store reference to each input
            onChangeText={(text) => handleInputChange(text, i)} // Handle input change
          />
        ))}
      </View>

      {/* Linear Gradient Button */}
      <LinearGradient
        colors={['#83CE2C', '#426816']} // Gradient colors
        style={styles.button} // Apply gradient styles to the button
      >
        <TouchableOpacity onPress={() => navigation.navigate('PasswordReset')}>
          <Text style={styles.buttonText}>Verify Code</Text>
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
  codeContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '90%',
    marginBottom: 20, // Space between the code input and the button
  },
  codeInput: { 
    width: 50, 
    height: 50, 
    borderWidth: 1, 
    borderColor: '#81CE2C', // Light green border
    borderRadius: 8, 
    textAlign: 'center', 
    fontSize: 18, 
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
