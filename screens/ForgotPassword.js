import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';  // Import Lottie

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  // Dismiss the keyboard when tapping outside input fields
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  // Validate email format and proceed with password reset
  const validateAndResetPassword = () => {
    if (!email) {
      Alert.alert('Validation Error', 'Please enter your email address.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Validation Error', 'Please provide a valid email address.');
      return;
    }
    // Navigate to Password Reset Screen after successful validation
    navigation.navigate('VerifyCode');
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
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

        {/* Page Title */}
        <Text style={styles.title}>Forgot Password</Text>

        {/* Form Inputs */}
        <View style={styles.formContainer}>
          <Text style={styles.label}>Email Address</Text>
          <TextInput
            style={styles.textInput}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email address"
            placeholderTextColor="#aaa"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          {/* Reset Password Button */}
          <TouchableOpacity style={styles.loginButton} onPress={validateAndResetPassword}>
            <LinearGradient
              colors={['#72C21B', '#81CE2C', '#426816']} // Gradient for button
              style={styles.loginButtonGradient}
            >
              <Text style={styles.loginButtonText}>Reset Password</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Back to Login Link */}
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Set background color to white
    justifyContent: 'flex-start', // Align content at the top with a little space
    alignItems: 'center',
    paddingTop: 60, // Increased padding to move the content down
  },
  animationContainer: {
    height: 200,  // Adjusted height to make it smaller
    width: 200,   // Adjusted width to make it smaller
    marginBottom: 20, // Reduced the space between animation and title
  },
  animatedIcon: {
    width: 200,
    height: 200, // Adjusted size of the animation
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#426816', // Dark green for title text
    marginBottom: 20, // Reduced space between title and form
  },
  formContainer: {
    width: '85%',
    marginTop: 10, // Adjusted margin for form container
  },
  label: {
    fontSize: 16,
    color: '#426816', // Dark green for labels
    marginBottom: 5,
  },
  textInput: {
    height: 50,
    borderWidth: 1,
    borderColor: '#81CE2C', // Light green border for inputs
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#426816', // Dark green for input text
    backgroundColor: '#F5F5F5', // Light grey background for input fields
    marginBottom: 15, // Reduced space between input and button
  },
  loginButton: {
    marginTop: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
  loginButtonGradient: {
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 10,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 20,
    fontSize: 14,
    color: '#426816', // Dark green for links
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});

export default ForgotPassword;
