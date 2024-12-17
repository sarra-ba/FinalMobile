import React, { useState, useRef } from 'react';
import LinearGradient from 'react-native-linear-gradient'; 
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  Animated,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';
import NavBar from './NavBar';  // Import the NavBar component

const FloatingLabelInput = ({ label, value, onChangeText, secureTextEntry, keyboardType }) => {
  const [isFocused, setIsFocused] = useState(false);
  const animatedLabelPosition = useRef(new Animated.Value(value ? -10 : 15)).current;
  const animatedLabelFontSize = useRef(new Animated.Value(value ? 15 : 15)).current;

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(animatedLabelPosition, {
      toValue: -20,
      duration: 200,
      useNativeDriver: false,
    }).start();
    Animated.timing(animatedLabelFontSize, {
      toValue: 16,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    if (!value) {
      setIsFocused(false);
      Animated.timing(animatedLabelPosition, {
        toValue: 15,
        duration: 200,
        useNativeDriver: false,
      }).start();
      Animated.timing(animatedLabelFontSize, {
        toValue: 16,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <View style={styles.inputContainer}>
      <Animated.Text
        style={[styles.label, {
          top: animatedLabelPosition,
          fontSize: animatedLabelFontSize,
          color: isFocused || value ? 'white' : 'white',
        }]}>
        {label}
      </Animated.Text>
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </View>
  );
};

const ProfileScreen = () => {
  const [username, changeUsername] = useState('');
  const [email, changeEmail] = useState('');
  const [password, changePassword] = useState('');
  const [location, changeLocation] = useState('');

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <ImageBackground
            source={require('./assets/background1.png)')}
            style={styles.image}
          imageStyle={styles.roundedBorder}>
          
          {/* Profile Image and Name */}
          <View style={styles.profileContainer}>
            <Image
              source={require('./assets/user1.png')} // Add user's profile picture
              style={styles.profileImage}
            />
            <Text style={styles.profileName}>John Doe</Text>  {/* Replace with actual username */}
            <Text style={styles.profileAddress}>1234 Street Name, City, Country</Text>  {/* Replace with actual address */}
          </View>
          
          <View style={styles.formContainer}>
            <FloatingLabelInput
              label="Username"
              value={username}
              onChangeText={changeUsername}
            />
            <FloatingLabelInput
              label="Email"
              value={email}
              onChangeText={changeEmail}
              keyboardType="email-address"
            />
            <FloatingLabelInput
              label="Password"
              value={password}
              onChangeText={changePassword}
              secureTextEntry
            />
            <FloatingLabelInput
              label="Location"
              value={location}
              onChangeText={changeLocation}
            />
            <TouchableOpacity style={styles.confirmButton}>
              <Text style={styles.confirmButtonText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        {/* Use NavBar Component */}
        <NavBar /> {/* This replaces the navbar code */}
      </View>
    </TouchableWithoutFeedback>
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
  profileContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60, // Circular image
    borderWidth: 4,
    borderColor: '#fff',
  },
  profileName: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 10,
  },
  profileAddress: {
    fontSize: 16,
    color: '#fff',
    marginTop: 5,
  },
  headerContainer: {
    alignItems: 'center',
  },
  headerText: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    top: 13,
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
  formContainer: {
    width: '100%',
    backgroundColor: 'transparent',
    padding: 20,
    marginTop: 20,
  },
  inputContainer: {
    marginBottom: 50,
  },
  label: {
    position: 'absolute',
    left: 10,
    color: 'white',
  },
  textInput: {
    top: 20,
    borderBottomWidth: 3,
    borderBottomColor: 'white',
    paddingVertical: 10,
    fontSize: 15,
  },
  confirmButton: {
    marginTop: 20,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#426816',
    height: 44,
    width: 130,
    left: 210,
    top: 60,
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 9,
    marginLeft: 30,
  },
});

export default ProfileScreen;
