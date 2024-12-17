import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

const SetLocation = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find Location</Text>

      {/* Search Input */}
      <TextInput
        style={styles.input}
        placeholder="Find your location"
        placeholderTextColor="#aaa"
      />

      {/* Map Placeholder */}
      <Image
        source={{ uri: 'https://via.placeholder.com/300x200' }}
        style={styles.map}
      />

      {/* Selected Location */}
      <Text style={styles.info}>Your Location: Manchester, Kentucky 39495</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Set Location</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff', flex: 1 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  map: { width: '100%', height: 200, borderRadius: 10, marginBottom: 20 },
  info: { fontSize: 16, marginBottom: 10 },
  button: { backgroundColor: '#e91e63', padding: 10, borderRadius: 5 },
  buttonText: { color: '#fff', textAlign: 'center', fontSize: 16, fontWeight: 'bold' },
});

export default SetLocation;
