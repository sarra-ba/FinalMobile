// Filter.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ImageBackground, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook
import NavBar from './NavBar'; // Import the NavBar component

const Filter = () => {
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [customerReview, setCustomerReview] = useState('');

  const navigation = useNavigation(); // Hook to access navigation

  const handleApplyFilters = () => {
    // You can log or save the filters if necessary
    console.log('Filters Applied:', { category, priceRange, customerReview });

    // Navigate to the Marketplace screen after applying filters
    navigation.navigate('Marketplace', { category, priceRange, customerReview });
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/image_2024-12-03_151959045.svg')}
        resizeMode="cover"
        style={styles.image}
      />
      <View style={styles.topImage}>
        <Image source={require('./assets/Intersect.png')} style={styles.imageStyle} />
      </View>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton}>
          <Text style={styles.headerText}>Cancel</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Filter</Text>
        <TouchableOpacity style={styles.headerButton}>
          <Text style={styles.headerText}>Clear All</Text>
        </TouchableOpacity>
      </View>

      {/* Filter Options */}
      <ScrollView style={styles.filterContainer}>
        <View style={styles.filterOption}>
          <Text style={styles.filterLabel}>Category</Text>
          <Picker
            selectedValue={category}
            style={styles.picker}
            onValueChange={(itemValue) => setCategory(itemValue)}
          >
            <Picker.Item label="Select Category" value="" />
            <Picker.Item label="Fertilizer" value="fertilizer" />
            <Picker.Item label="Soil Enrichers" value="soil" />
            <Picker.Item label="Compost" value="compost" />
          </Picker>
        </View>

        <View style={styles.filterOption}>
          <Text style={styles.filterLabel}>Price Range</Text>
          <Picker
            selectedValue={priceRange}
            style={styles.picker}
            onValueChange={(itemValue) => setPriceRange(itemValue)}
          >
            <Picker.Item label="Select Price Range" value="" />
            <Picker.Item label="$0 - $50" value="0-50" />
            <Picker.Item label="$50 - $100" value="50-100" />
            <Picker.Item label="$100+" value="100+" />
          </Picker>
        </View>

        <View style={styles.filterOption}>
          <Text style={styles.filterLabel}>Customer Review</Text>
          <Picker
            selectedValue={customerReview}
            style={styles.picker}
            onValueChange={(itemValue) => setCustomerReview(itemValue)}
          >
            <Picker.Item label="Select Rating" value="" />
            <Picker.Item label="1 Star & above" value="1" />
            <Picker.Item label="2 Stars & above" value="2" />
            <Picker.Item label="3 Stars & above" value="3" />
            <Picker.Item label="4 Stars & above" value="4" />
            <Picker.Item label="5 Stars" value="5" />
          </Picker>
        </View>
      </ScrollView>

      {/* Apply Filters Button */}
      <TouchableOpacity style={styles.applyButton} onPress={handleApplyFilters}>
        <LinearGradient
          colors={['#83CE2C', '#6BA924', '#5C901F', '#426816']}
          style={styles.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <Text style={styles.applyButtonText}>Apply Filters</Text>
        </LinearGradient>
      </TouchableOpacity>

      {/* Use the NavBar component here */}
      <NavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  topImage: {
    alignItems: 'center',
  },
  imageStyle: {
    width: 450,
    top: -30,
    resizeMode: 'contain',
  },
  image: {
    justifyContent: 'center',
    color: 'green',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 10,
    backgroundColor: 'white',
    bordecolor: '#83CE2C',
    paddingTop: 10,
    top: 30,
  },
  headerButton: {
    padding: 10,
  },
  headerText: {
    fontSize: 16,
    color: 'grey',
  },
  filterContainer: {
    paddingHorizontal: 16,
    top: 100,
  },
  filterOption: {
    marginBottom: 20,
  },
  filterLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  picker: {
    height: 50,
    borderColor: '#83CE2C',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 8,
  },
  applyButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  gradient: {
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 20,
    marginBottom: 25,
    width: 200,
    left: 110,
    bottom: 120,
  },
});

export default Filter;
