import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import NavBar from './NavBar';

const MarketPlace = ({ navigation }) => {
  const [search, setSearch] = useState('');

  const products = [
    { id: 1, name: 'Organic Fertilizer', price: '$25', image: require('./assets/fertilizer.png') },
    { id: 2, name: 'Nitrogen Boost', price: '$30', image: require('./assets/fertilizer.png') },
    { id: 3, name: 'Potassium Mix', price: '$28', image: require('./assets/fertilizer.png') },
    { id: 4, name: 'Compost Blend', price: '$20', image: require('./assets/fertilizer.png') },
  ];

  const handleFilterPress = () => {
    navigation.navigate('Filter');
  };

  return (
    <View style={styles.container}>
      {/* Header Background */}
      <ImageBackground
        source={require('./assets/background1.png')}
        style={styles.headerBackground}>
        <Text style={styles.headerTitle}>Marketplace</Text>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="grey" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for fertilizers..."
            value={search}
            onChangeText={setSearch}
          />
        </View>
      </ImageBackground>

      {/* Filter & Sort Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleFilterPress}>
          <Icon name="filter" size={18} color="white" />
          <Text style={styles.buttonText}>Filter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon name="sort" size={18} color="white" />
          <Text style={styles.buttonText}>Sort</Text>
        </TouchableOpacity>
      </View>

      {/* Product List */}
      <ScrollView contentContainerStyle={styles.productList}>
        {products.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyButtonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <NavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  headerBackground: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 25,
    width: '90%',
    paddingHorizontal: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#83CE2C',
    padding: 10,
    borderRadius: 20,
    width: '45%',
    justifyContent: 'center',
  },
  buttonText: {
    marginLeft: 5,
    color: 'white',
    fontWeight: 'bold',
  },
  productList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    width: '45%',
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  productImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    color: '#333',
  },
  productPrice: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10,
  },
  buyButton: {
    backgroundColor: '#83CE2C',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  buyButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default MarketPlace;
