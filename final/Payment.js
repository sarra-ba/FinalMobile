import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Payment = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment</Text>

      {/* Payment Options */}
      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardText}>PayPal</Text>
        <Text>2121 6352 8465 ****</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardText}>VISA</Text>
        <Text>2121 6352 8465 ****</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardText}>Payoneer</Text>
        <Text>2121 6352 8465 ****</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  card: {
    padding: 15,
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: '#f5e6d7',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  cardText: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
});

export default Payment;
