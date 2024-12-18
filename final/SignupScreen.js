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
import LottieView from 'lottie-react-native';
import CheckBox from 'react-native-checkbox';

const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isFarmer, setIsFarmer] = useState(false); // State for 'Farmer' checkbox
  const [isRestaurant, setIsRestaurant] = useState(false); // State for 'Restaurant/Hotel' checkbox
  const navigation = useNavigation();

  // Function to dismiss the keyboard when tapping outside input fields
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  // Function to validate inputs and proceed with signup
  const validateAndSignup = () => {
    if (!name) {
      Alert.alert('Validation Error', 'Name is required.');
      return;
    }
    if (!email) {
      Alert.alert('Validation Error', 'Email is required.');
      return;
    }
    if (!password) {
      Alert.alert('Validation Error', 'Password is required.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      Alert.alert('Validation Error', 'Invalid email format.');
      return;
    }
    if (!isFarmer && !isRestaurant) {
      Alert.alert('Validation Error', 'Please select your type (Farmer or Restaurant/Hotel).');
      return;
    }
    // Navigate to Login after successful validation
    navigation.navigate('Login');
  };

  // Function to handle checkbox selection to ensure only one is selected at a time
  const handleFarmerChange = (value) => {
    setIsFarmer(value);
    if (value) {
      setIsRestaurant(false); // Deselect Restaurant/Hotel if Farmer is selected
    }
  };

  const handleRestaurantChange = (value) => {
    setIsRestaurant(value);
    if (value) {
      setIsFarmer(false); // Deselect Farmer if Restaurant/Hotel is selected
    }
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        {/* Animated Icon */}
        <View style={styles.animationContainer}>
          <LottieView
            source={require('./assets/wel.json')} // Animated asset for visual appeal
            autoPlay
            loop
            style={styles.animatedIcon}
          />
        </View>

        {/* Page Title */}
        <Text style={styles.title}>Create an Account</Text>

        {/* Form Inputs */}
        <View style={styles.formContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={setName}
            placeholder="Enter your Name"
            placeholderTextColor="#aaa"
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.textInput}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            placeholderTextColor="#aaa"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.textInput}
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
            placeholderTextColor="#aaa"
            secureTextEntry
          />

          {/* Farmer / Restaurant / Hotel Selection on Same Line */}
          <View style={styles.checkboxContainer}>
            <View style={styles.checkboxRow}>
              <CheckBox
                value={isFarmer}
                onValueChange={handleFarmerChange}
                style={styles.checkbox}
              />
              <Text style={styles.checkbox}>Farmer</Text>
              <CheckBox
                value={isRestaurant}
                onValueChange={handleRestaurantChange}
                style={styles.checkbox}
              />
              <Text style={styles.checkbox}>Restaurant/Hotel</Text>
            </View>
          </View>

          {/* Sign Up Button */}
          <TouchableOpacity style={styles.signupButton} onPress={validateAndSignup}>
            <LinearGradient
              colors={['#72C21B', '#81CE2C', '#426816']} // Gradient for button
              style={styles.signupButtonGradient}
            >
              <Text style={styles.signupButtonText}>Sign Up</Text>
            </LinearGradient>
          </TouchableOpacity>

          {/* Already have an account link */}
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.link}>Already have an account? Log In</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  animationContainer: {
    height: 150,
    width: 150,
    marginBottom: 20,
  },
  animatedIcon: {
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#426816',
    marginBottom: 30,
  },
  formContainer: {
    width: '85%',
  },
  label: {
    fontSize: 16,
    color: '#426816',
    marginBottom: 5,
  },
  textInput: {
    height: 50,
    borderWidth: 1,
    borderColor: '#81CE2C',
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#426816',
    backgroundColor: '#F5F5F5',
    marginBottom: 20,
  },
  signupButton: {
    marginTop: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  signupButtonGradient: {
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 10,
  },
  signupButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    fontSize: 14,
    color: '#426816',
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  checkboxContainer: {
    marginTop: 20,
    marginBottom: 30,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',  // Ensures both checkboxes are spaced evenly
  },
  checkbox: {
    marginRight: 10,
  },
  checkbox: {
    fontSize: 16,
    color: '#426816',
  },
});

export default SignupScreen;
