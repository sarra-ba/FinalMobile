import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Payment = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Payment</Text>

      <TouchableOpacity style={styles.paymentOption}>
        <Icon name="paypal" size={30} color="#3b7bbf" />
        <Text style={styles.paymentText}>PayPal</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.paymentOption}>
        <Icon name="credit-card" size={30} color="#3b7bbf" />
        <Text style={styles.paymentText}>Visa</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.paymentOption}>
        <Icon name="bank" size={30} color="#3b7bbf" />
        <Text style={styles.paymentText}>Payoneer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f9f9f9' },
  headerTitle: { fontSize: 28, fontWeight: 'bold', marginBottom: 20, color: '#333', textAlign: 'center' },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    elevation: 3,
  },
  paymentText: { marginLeft: 10, fontSize: 18, color: '#333' },
});

export default Payment;
