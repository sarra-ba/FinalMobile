import React, { useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; // Importing the LinearGradient component

export default function VerifyCode({ navigation }) {
  const inputs = useRef([]);

  const handleInputChange = (text, index) => {
    if (text.length === 1 && index < 4) {
      inputs.current[index + 1].focus();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Check your email</Text>
      <Text style={styles.subtitle}>We sent a reset link to your email. Enter the 5-digit code mentioned in the email.</Text>

      <View style={styles.codeContainer}>
        {[...Array(5)].map((_, i) => (
          <TextInput
            key={i}
            style={[styles.codeInput, { color: 'black' }]} // Set text color to black
            maxLength={1}
            keyboardType="number-pad"
            ref={(el) => (inputs.current[i] = el)} // Store reference to each input
            onChangeText={(text) => handleInputChange(text, i)} // Handle input change
          />
        ))}
      </View>

      {/* Linear Gradient Button */}
      <LinearGradient
        colors={['#83CE2C', '#426816']} // Gradient colors
        style={styles.button} // Apply gradient styles to the button
      >
        <TouchableOpacity onPress={() => navigation.navigate('PasswordReset')}>
          <Text style={styles.buttonText}>Verify Code</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 16, color: '#666', marginBottom: 20, textAlign: 'center' },
  codeContainer: { flexDirection: 'row', justifyContent: 'space-between', width: '90%' },
  codeInput: { width: 50, height: 50, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, textAlign: 'center', fontSize: 18 },
  button: { marginTop: 20, paddingVertical: 12, width: '90%', borderRadius: 8, alignItems: 'center' }, // Adjusted button style to fit gradient
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: 16 },
});
