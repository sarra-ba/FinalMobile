import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ConfirmOrder = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirm Order</Text>

      {/* Delivery Section */}
      <View style={styles.section}>
        <Text style={styles.label}>Deliver to</Text>
        <Text style={styles.info}>Manchester, Kentucky 39495</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SetLocation')}>
          <Text style={styles.edit}>Edit</Text>
        </TouchableOpacity>
      </View>

      {/* Payment Section */}
      <View style={styles.section}>
        <Text style={styles.label}>Payment Method</Text>
        <Text style={styles.info}>PayPal - 2121 6352 8465 ******</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Payment')}>
          <Text style={styles.edit}>Edit</Text>
        </TouchableOpacity>
      </View>

      {/* Order Summary */}
      <View style={styles.summary}>
        <Text style={styles.summaryText}>Subtotal: $96.00</Text>
        <Text style={styles.summaryText}>Delivery: $2.00</Text>
        <Text style={styles.total}>Total: $98.00</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('TrackOrder')} // Navigate to TrackOrder
        >
          <Text style={styles.buttonText}>Place Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff', flex: 1 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  section: { marginBottom: 20 },
  label: { fontSize: 16, color: '#555' },
  info: { fontSize: 18, marginVertical: 5 },
  edit: { color: '#e91e63', fontWeight: 'bold' },
  summary: { marginTop: 20, padding: 10, borderRadius: 5, backgroundColor: '#f8f8f8' },
  summaryText: { fontSize: 16, marginBottom: 5 },
  total: { fontSize: 18, fontWeight: 'bold' },
  button: { marginTop: 10, backgroundColor: '#e91e63', padding: 10, borderRadius: 5 },
  buttonText: { color: '#fff', textAlign: 'center', fontSize: 16, fontWeight: 'bold' },
});

export default ConfirmOrder;
