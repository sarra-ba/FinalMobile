import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook

const OrderDetail = () => {
  const navigation = useNavigation(); // Use the navigation object

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Order Detail</Text>

      {/* Food Item */}
      <View style={styles.item}>
        <Image source={{ uri: 'https://via.placeholder.com/60' }} style={styles.image} />
        <View style={styles.itemDetails}>
          <Text style={styles.price}>$52.00</Text>
          <Text style={styles.itemName}>Fertilizer</Text>
        </View>
        <TextInput style={styles.input} keyboardType="numeric" value="2" />
      </View>

      {/* Summary */}
      <View style={styles.summary}>
        <Text style={styles.summaryText}>Subtotal: $96.00</Text>
        <Text style={styles.summaryText}>Delivery: $2.00</Text>
        <Text style={styles.total}>Total: $98.00</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ConfirmOrder')} // Navigate to ConfirmOrder
        >
          <Text style={styles.buttonText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  item: { flexDirection: 'row', marginBottom: 15, alignItems: 'center' },
  image: { width: 60, height: 60, borderRadius: 10 },
  itemDetails: { marginLeft: 10, flex: 1 },
  price: { color: '#e74c3c', fontWeight: 'bold', fontSize: 16 },
  itemName: { fontSize: 16, fontWeight: '600' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 5, width: 50, textAlign: 'center' },
  summary: { marginTop: 20, padding: 10, borderRadius: 5, backgroundColor: '#f8f8f8' },
  summaryText: { fontSize: 16, marginBottom: 5 },
  total: { fontSize: 18, fontWeight: 'bold' },
  button: { marginTop: 10, backgroundColor: '#e91e63', padding: 10, borderRadius: 5 },
  buttonText: { color: '#fff', textAlign: 'center', fontSize: 16, fontWeight: 'bold' },
});

export default OrderDetail;
