import React, { useState } from 'react';
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
import LinearGradient from 'react-native-linear-gradient';

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        {/* Background Image */}
        <ImageBackground
          source={require('../final/assets/image_2024-12-03_151959045.svg')}
          resizeMode="cover"
          style={styles.image}
        />
        
        {/* Top Image (Green Bar) */}
        <View style={styles.topImage}>
          <Image source={require('../final/assets/Intersect.png')} style={styles.imageStyle} />
        </View>

        {/* Form */}
        <View style={styles.formContainer}>
          <Text style={styles.title}>Forgot Password</Text>
          <Text style={styles.subtitle}>Please enter your email to reset the password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Email"
            placeholderTextColor="#999"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          {/* Reset Password Button */}
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => {
              // You can add a check for email format or other validation here
              navigation.navigate('PasswordReset');
            }}
          >
            <LinearGradient
              colors={['#83CE2C', '#426816']}
              style={styles.gradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={styles.loginButtonText}>Reset Password</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Back to Login */}
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
    backgroundColor: '#fff',
  },
  topImage: {
    alignItems: 'center',
    marginTop: -50, // Aligns the green bar similarly to Login
  },
  imageStyle: {
    width: 450,
    top: -10,
    resizeMode: 'contain',
  },
  formContainer: {
    marginTop: 100, // Adjusted to maintain spacing consistency
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    color: '#000',
    marginBottom: 20,
  },
  loginButton: {
    marginTop: 20,
    borderRadius: 8,
    overflow: 'hidden',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  gradient: {
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 8,
  },
  link: {
    color: '#4caf50',
    marginTop: 15,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  image: {
    justifyContent: 'center',
  },
});

export default ForgotPassword;
