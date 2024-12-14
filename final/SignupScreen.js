import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Animated,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; 

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
        style={[
          styles.label,
          {
            top: animatedLabelPosition,
            fontSize: animatedLabelFontSize,
            color: isFocused || value ? 'black' : 'grey',
          },
        ]}
      >
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
      {isFocused && (
        <LinearGradient
          colors={['#83CE2C', '#426816']} 
          style={styles.gradientBar}
        />
      )}
    </View>
  );
};

const SignupScreen = () => {
  const [username, setUsername]= useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/image_2024-12-03_151959045.svg')}
        resizeMode="cover" style={styles.image}>
      </ImageBackground>

      <View style={styles.topImage}>
        <Image source={require('./assets/Intersect.png')} style={styles.imageStyle} />
        <View style={styles.container} edges={['left', 'right']}>
        </View>
      </View>

      <View style={styles.formContainer}>
        <FloatingLabelInput
          label="Username"
          value={username}
          onChangeText={setUsername}
        />

        <FloatingLabelInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <FloatingLabelInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.signupButton}>
          <LinearGradient
            colors={['#83CE2C', '#6BA924', '#5C901F', '#426816']}
            style={styles.gradient} start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }} >
            <Text style={styles.SignupButtonText}>Sign Up</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  topImage: {
    alignItems: 'center',
  },
  imageStyle: {
    width: 450,
    top: -10,
    resizeMode: 'contain',
  },
  formContainer: {
    marginTop: 120,
    paddingHorizontal: 40,
  },
  inputContainer: {
    marginBottom: 50,
    position: 'relative',
    borderColor: 'white',
    borderRadius: 10,
    backgroundColor: 'white',
    height: 50,
    justifyContent: 'center',
  },
  label: {
    position: 'absolute',
    left: 15,
    fontSize: 16,
    color: 'grey',
    zIndex: 1,
  },
  textInput: {
    borderBottomWidth: 4,
    borderColor: 'transparent', 
    paddingBottom: 10,
    fontSize: 16,
  },
 
  gradientBar: {
    height: 2,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  signupButton: {
    marginLeft: 70,
    borderRadius: 0,
    marginTop: 20,
    overflow: 'hidden', 
    width: '60%',
    height: 90,
  },
  gradient: {
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 20,
    marginBottom : 25,
  },
  SignupButtonText: {

    color: 'white',
    fontSize: 20,
    alignItems: 'center',
    fontWeight: 10,
  },
});

export default SignupScreen; 