import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; // Importing LinearGradient component

export default function PasswordReset({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Password reset</Text>
      <Text style={styles.subtitle}>
        Your password has been successfully reset. Click confirm to set a new password.
      </Text>

      {/* Linear Gradient Button */}
      <LinearGradient
        colors={['#83CE2C', '#426816']} // Gradient colors
        style={styles.button} // Apply gradient styles to the button
      >
        <TouchableOpacity onPress={() => navigation.navigate('SetNewPassword')}>
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 16, color: '#666', marginBottom: 20, textAlign: 'center' },
  button: { marginTop: 20, paddingVertical: 12, width: '90%', borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: 16 },
});
