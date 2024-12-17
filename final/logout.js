import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';

const LogoutConfirmation = ({ navigation }) => {
  const [visible, setVisible] = useState(true);

  const handleLogout = () => {
    // Handle logout logic here (e.g., clearing tokens, redirecting to login screen)
    navigation.navigate('Login'); // Navigate to the Login screen after logout
  };

  return (
    <Modal transparent visible={visible}>
      <View style={styles.overlay}>
        <View style={styles.popup}>
          <Text style={styles.message}>Are you sure you want to log out?</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.noButton} onPress={() => setVisible(false)}>
              <Text style={styles.buttonText}>No</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.yesButton} onPress={handleLogout}>
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
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  message: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  noButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  yesButton: {
    backgroundColor: '#6DBE45',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
  },
});

export default LogoutConfirmation;
