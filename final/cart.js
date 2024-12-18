import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation for navigation

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Organic Fertilizer', price: '$25', image: require('./assets/fertilizer.png') },
    { id: 2, name: 'Nitrogen Boost', price: '$30', image: require('./assets/fertilizer.png') },
    { id: 3, name: 'Fertilizer1', price: '$25', image: require('./assets/fertilizer.png') },
    { id: 4, name: 'Fertilizer2', price: '$30', image: require('./assets/fertilizer.png') },
  ]);

  const navigation = useNavigation(); // Initialize navigation

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleConfirmOrder = () => {
    navigation.navigate('OrderDetail', { items: cartItems });
  };

  const handleGoToMarketPlace = () => {
    navigation.navigate('Marketplace'); // Navigate to MarketPlace screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <LottieView
          source={require('./assets/cart.json')}
          autoPlay
          loop
          style={styles.lottieAnimation}
        />
      </View>

      {cartItems.length > 0 ? (
        <ScrollView contentContainerStyle={styles.cartList}>
          {cartItems.map((item) => (
            <View key={item.id} style={styles.cartItem}>
              <Image source={item.image} style={styles.productImage} />
              <View style={styles.itemDetails}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>{item.price}</Text>
              </View>
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => handleRemoveItem(item.id)}>
                <Icon name="trash" size={18} color="white" />
              </TouchableOpacity>

              {/* + Button below the cart item on the right */}
              <TouchableOpacity
                style={[styles.floatingButton, { top: 90 }]}  // Adjust the 'top' to position it below the item
                onPress={handleGoToMarketPlace}>
                <Icon name="plus" size={20} color="white" />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      ) : (
        <Text style={styles.emptyText}>Your cart is empty</Text>
      )}

      {cartItems.length > 0 && (
        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmOrder}>
          <Text style={styles.confirmButtonText}>Confirm Order</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  lottieAnimation: {
    width: 200,
    height: 200,
  },
  cartList: {
    paddingVertical: 10,
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    position: 'relative', // To allow absolute positioning of the "+" button
  },
  productImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  productPrice: {
    fontSize: 14,
    color: '#777',
  },
  removeButton: {
    backgroundColor: '#FF3B30',
    borderRadius: 20,
    padding: 10,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#777',
    marginTop: 50,
  },
  confirmButton: {
    backgroundColor: '#83CE2C',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  floatingButton: {
    position: 'absolute',
    right: 10,
    backgroundColor: '#83CE2C',
    borderRadius: 20,
    padding: 5,
    elevation: 5,
  },
});

export default Cart;
