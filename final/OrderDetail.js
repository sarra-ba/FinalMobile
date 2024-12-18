import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const OrderDetail = ({ route, navigation }) => {
  const { items } = route.params;

  const calculateSubtotal = () =>
    items.reduce((sum, item) => sum + parseFloat(item.price.slice(1)) * item.quantity, 0);

  const subtotal = calculateSubtotal();
  const deliveryFee = 2.0; // Fixed delivery fee
  const total = subtotal + deliveryFee;

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Order Details</Text>
      <ScrollView contentContainerStyle={styles.itemsContainer}>
        {items.map((item) => (
          <View key={item.id} style={styles.itemCard}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>${item.price}</Text>
              <Text>Qty: {item.quantity}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>Subtotal: ${subtotal.toFixed(2)}</Text>
        <Text style={styles.summaryText}>Delivery: ${deliveryFee.toFixed(2)}</Text>
        <Text style={styles.totalText}>Total: ${total.toFixed(2)}</Text>
      </View>
      <TouchableOpacity
        style={styles.checkoutButton}
        onPress={() => navigation.navigate('ConfirmOrder')}>
        <Text style={styles.checkoutText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9', padding: 20 },
  headerTitle: { fontSize: 28, fontWeight: 'bold', marginBottom: 20, color: '#333', textAlign: 'center' },
  itemsContainer: { paddingVertical: 10 },
  itemCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    shadowColor: '#000',
    elevation: 3,
  },
  itemImage: { width: 60, height: 60, marginRight: 10 },
  itemDetails: { flex: 1, justifyContent: 'center' },
  itemName: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  itemPrice: { color: '#777' },
  summaryContainer: { marginTop: 10, padding: 10, borderTopWidth: 1, borderColor: '#ddd' },
  summaryText: { fontSize: 16, marginBottom: 5 },
  totalText: { fontSize: 18, fontWeight: 'bold' },
  checkoutButton: {
    backgroundColor: '#83CE2C',
    borderRadius: 20,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  checkoutText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
});

export default OrderDetail;
