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
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook

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

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation(); // Initialize navigation hook

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleLogin = () => {
    // Add login logic here, then navigate to Dashboard
    navigation.navigate('Dashboard');
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <ImageBackground
          source={require('./assets/image_2024-12-03_151959045.svg')}
          resizeMode="cover"
          style={styles.image}
        />
        <View style={styles.topImage}>
          <Image source={require('./assets/Intersect.png')} style={styles.imageStyle} />
        </View>

        <View style={styles.formContainer}>
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

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <LinearGradient
              colors={['#83CE2C', '#6BA924', '#5C901F', '#426816']}
              style={styles.gradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={styles.loginButtonText}>Log In</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.link}>Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.link}>Don't have an account yet?</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#white',
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
    marginBottom: 70,
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
  loginButton: {
    marginLeft: 70,
    borderRadius: 0,
    marginTop: 20,
    overflow: 'hidden',
    width: '60%',
    height: 90,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 20,
  },
  gradient: {
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 20,
    marginBottom: 25,
  },
  gradientBar: {
    height: 3,
    width: '100%',
    marginTop: 2,
  },
  link: {
    color: '#4caf50',
    marginTop: 10,
    left: 50,
    textDecorationLine: 'underline',
  },
  image: {
    justifyContent: 'center',
    color: 'green',
  },
});

export default LoginScreen;
