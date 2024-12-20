import React, { useState, useEffect } from 'react';
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
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import NavBar from './NavBar';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MarketPlace = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [sortModalVisible, setSortModalVisible] = useState(false);
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [filter, setFilter] = useState({
    category: '',
    priceRange: '',
    rating: '',
  });
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8080/products'); 
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Handle Add to Cart
  const handleAddToCart = async (product) => {
    try {
      const userId = await AsyncStorage.getItem('userId'); // Retrieve userId from AsyncStorage
      if (userId) {
        // Send the userId and product details to the backend
        const response = await fetch('http://localhost:8080/api/orders/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId,
            productId: product.id,
          }),
        });

        if (response.ok) {
          console.log('Product added to order successfully');
          // Optionally navigate to the Cart page or show a success message
          navigation.navigate('Cart', { product });
        } else {
          console.error('Failed to add product to order');
        }
      } else {
        console.error('User not logged in');
      }
    } catch (error) {
      console.error('Error adding product to order:', error);
    }
  };

  // Filter products based on search input and filters
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = filter.category ? product.category === filter.category : true;
    const matchesPrice = filter.priceRange
      ? parseInt(product.price) >= parseInt(filter.priceRange[0]) &&
        parseInt(product.price) <= parseInt(filter.priceRange[1])
      : true;
    const matchesRating = filter.rating ? product.rating >= filter.rating : true;
    return matchesSearch && matchesCategory && matchesPrice && matchesRating;
  });

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
    } else if (sortOption === 'price-asc') {
      sortedProducts.sort((a, b) => parseInt(a.price) - parseInt(b.price));
    } else if (sortOption === 'price-desc') {
      sortedProducts.sort((a, b) => parseInt(b.price) - parseInt(a.price));
    }
    setProducts(sortedProducts);
    setSortModalVisible(false);
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading products...</Text>
      </View>
    );
  }

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
            placeholder="Search for products..."
            value={search}
            onChangeText={setSearch}
          />
        </View>
      </ImageBackground>

      {/* Filter & Sort Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => setFilterModalVisible(true)}>
          <Icon name="filter" size={18} color="white" />
          <Text style={styles.buttonText}>Filter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSortPress}>
          <Icon name="sort" size={18} color="white" />
          <Text style={styles.buttonText}>Sort</Text>
        </TouchableOpacity>
      </View>

      {/* Product List */}
      <ScrollView contentContainerStyle={styles.productList}>
        {filteredProducts.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>${item.price}</Text>
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
  filterOption: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  filterOptionText: {
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
