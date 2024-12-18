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
  Modal,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import NavBar from './NavBar';

const MarketPlace = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([
    { id: 1, name: 'Organic Fertilizer', price: '$25', image: require('./assets/fertilizer.png'), date: '2023-01-01' },
    { id: 2, name: 'Nitrogen Boost', price: '$30', image: require('./assets/fertilizer.png'), date: '2023-05-10' },
    { id: 3, name: 'Potassium Mix', price: '$28', image: require('./assets/fertilizer.png'), date: '2023-07-15' },
    { id: 4, name: 'Compost Blend', price: '$20', image: require('./assets/fertilizer.png'), date: '2023-02-20' },
  ]);
  const [sortModalVisible, setSortModalVisible] = useState(false);

  // Handle Add to Cart
  const handleAddToCart = (product) => {
    navigation.navigate('Cart', { product });
  };

  // Filter products based on search input
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  // Handle Sort options
  const handleSortPress = () => {
    setSortModalVisible(true);
  };

  const handleSort = (sortOption) => {
    let sortedProducts = [...products];
    if (sortOption === 'alphabet') {
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'newest') {
      sortedProducts.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortOption === 'oldest') {
      sortedProducts.sort((a, b) => new Date(a.date) - new Date(b.date));
    }
    setProducts(sortedProducts);
    setSortModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Header Background */}
      <ImageBackground source={require('./assets/background1.png')} style={styles.headerBackground}>
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
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Filter')}>
          <Icon name="filter" size={18} color="white" />
          <Text style={styles.buttonText}>Filter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSortPress}>
          <Icon name="sort" size={18} color="white" />
          <Text style={styles.buttonText}>Sort</Text>
        </TouchableOpacity>
      </View>

      {/* Sort Modal */}
      <Modal
        transparent={true}
        visible={sortModalVisible}
        animationType="slide"
        onRequestClose={() => setSortModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Sort By</Text>
            <FlatList
              data={[
                { key: 'Alphabetically', value: 'alphabet' },
                { key: 'Newest', value: 'newest' },
                { key: 'Oldest', value: 'oldest' },
              ]}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.sortOption} onPress={() => handleSort(item.value)}>
                  <Text style={styles.sortOptionText}>{item.key}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.value}
            />
            <TouchableOpacity
              style={styles.closeModalButton}
              onPress={() => setSortModalVisible(false)}
            >
              <Text style={styles.closeModalButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Product List */}
      <ScrollView contentContainerStyle={styles.productList}>
        {filteredProducts.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
            <TouchableOpacity
              style={styles.buyButton}
              onPress={() => handleAddToCart(item)}
            >
              <Text style={styles.buyButtonText}>Add to Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.reviewButton}
              onPress={() => navigation.navigate('Review', { product: item })}
            >
              <Text style={styles.buyButtonText}>Review</Text>
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
    marginBottom: 5,
  },
  buyButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  reviewButton: {
    backgroundColor: '#FFB300',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  sortOption: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  sortOptionText: {
    fontSize: 16,
  },
  closeModalButton: {
    backgroundColor: '#83CE2C',
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 15,
  },
  closeModalButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default MarketPlace;
