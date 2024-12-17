import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Success = ({ navigation }) => {
  // Automatically navigate after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 2000); // 2000 ms = 2 seconds
    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.successMessage}>Password reset successful!</Text>
      <Text style={styles.subMessage}>Redirecting to Login...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  successMessage: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4caf50',
    marginBottom: 20,
  },
  subMessage: {
    fontSize: 16,
    color: '#666',
  },
});

export default Success;
