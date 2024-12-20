import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import LottieView from 'lottie-react-native';  // Import LottieView component
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

const LogoutConfirmation = ({ navigation }) => {
  const [visible, setVisible] = useState(true);

  const handleLogout = async () => {
    try {
      // Make an API call to the backend to log the user out
      const response = await fetch('http://localhost:8080/api/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Ensure cookies or session data are included in the request
      });

      const result = await response.json();

      if (result.success) {
        // Clear user-related data from AsyncStorage
        await AsyncStorage.removeItem('userId');  // Remove userId if stored

        // Navigate to the login screen
        navigation.navigate('Login');
      } else {
        alert('Logout failed. Please try again.');
      }
    } catch (error) {
      console.error('Error logging out:', error);
      alert('An error occurred while logging out.');
    }
  };

  const handleCancel = () => {
    // Navigate to the Dashboard screen when "No" is clicked
    navigation.navigate('Dashboard'); // Adjust the screen name if necessary
  };

  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.popup}>
          {/* Lottie Animation instead of icon */}
          <View style={styles.iconContainer}>
            <LottieView
              source={require('./assets/logout_animation.json')}  // Your Lottie animation file
              autoPlay
              loop
              style={styles.icon}
            />
          </View>

          {/* Logout Message */}
          <Text style={styles.message}>Are you really logging out?</Text>

          {/* Button Container */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.noButton]}
              onPress={handleCancel} // Call handleCancel on "No" button press
            >
              <Text style={styles.buttonText}>No</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.yesButton]}
              onPress={handleLogout} // Call handleLogout on "Yes" button press
            >
              <Text style={styles.buttonText}>Yes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popup: {
    backgroundColor: '#8BC34A', // Green background color
    borderRadius: 15,
    padding: 25,
    width: '80%',
    alignItems: 'center',
    elevation: 10,
  },
  iconContainer: {
    marginBottom: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 50,
    padding: 15,
  },
  icon: {
    width: 80,  // Adjust the size of your animation
    height: 80,
  },
  message: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    elevation: 5,
  },
  noButton: {
    backgroundColor: '#2E7D32',
  },
  yesButton: {
    backgroundColor: '#1B5E20',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LogoutConfirmation;
