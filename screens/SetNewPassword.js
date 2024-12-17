import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; // Importing LinearGradient component

export default function SetNewPassword({ navigation }) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordUpdate = () => {
    if (password === confirmPassword) {
      // Proceed with password update logic
      navigation.navigate('Success');
    } else {
      alert("Passwords do not match.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Set a new password</Text>
      <TextInput
        style={[styles.input, { color: 'black' }]}
        placeholder="Password"
        placeholderTextColor="#999"
        secureTextEntry
        onChangeText={setPassword}
      />
      <TextInput
        style={[styles.input, { color: 'black' }]}
        placeholder="Confirm Password"
        placeholderTextColor="#999"
        secureTextEntry
        onChangeText={setConfirmPassword}
      />

      {/* Linear Gradient Button */}
      <LinearGradient
        colors={['#83CE2C', '#426816']}
        style={styles.button}
      >
        <TouchableOpacity onPress={handlePasswordUpdate}>
          <Text style={styles.buttonText}>Update Password</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { width: '90%', height: 50, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, paddingHorizontal: 10, marginBottom: 10 },
  button: { marginTop: 20, paddingVertical: 12, width: '90%', borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: 16 },
});
