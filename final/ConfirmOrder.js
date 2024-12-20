import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ConfirmOrder = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.title}>Confirm Order</Text>

      {/* Delivery Section */}
      <View style={styles.section}>
        <Text style={styles.label}>Deliver to</Text>
        <View style={styles.row}>
          <Text style={styles.info}>Manchester, Kentucky 39495</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SetLocation')}>
            <Text style={styles.edit}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Payment Section */}
      <View style={styles.section}>
        <Text style={styles.label}>Payment Method</Text>
        <View style={styles.row}>
          <Text style={styles.info}>PayPal - 2121 6352 8465 ******</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Payment')}>
            <Text style={styles.edit}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Order Summary */}
      <View style={styles.summary}> 

        
        <View style={styles.row}>
          <Text style={styles.summaryText}>Subtotal:</Text>
          <Text style={styles.summaryValue}>$96.00</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.summaryText}>Delivery:</Text>
          <Text style={styles.summaryValue}>$2.00</Text>
        </View>
        <View style={[styles.row, styles.totalRow]}>
          <Text style={styles.totalLabel}>Total:</Text>
          <Text style={styles.totalValue}>$98.00</Text>
        </View>
      </View>

      {/* Place Order Button */}
      <TouchableOpacity
        style={styles.placeOrderButton}
        onPress={() => navigation.navigate('TrackOrder')}
      >
        <Text style={styles.buttonText}>Place Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    elevation: 3,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#777',
    marginBottom: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  info: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  edit: {
    color: '#83CE2C',
    fontWeight: 'bold',
    fontSize: 14,
  },
  summary: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    elevation: 3,
  },
  summaryText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#777',
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  totalRow: {
    marginTop: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
    paddingTop: 10,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#83CE2C',
  },
  placeOrderButton: {
    backgroundColor: '#83CE2C',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: '#000',
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ConfirmOrder;
