import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NavBar from './NavBar'; // Import the NavBar component

const DashboardScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <ImageBackground
        source={require('./assets/background1.png')}
        style={styles.image}
        imageStyle={styles.roundedBorder}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Farmer's Dashboard</Text>
        </View>
       
      </ImageBackground>

      {/* Content Section */}
      <ScrollView style={styles.contentContainer}>
        {/* Order Tracking */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Order Tracking</Text>
          <View style={styles.orderCard}>
            <Text style={styles.orderText}>Fertilizer Delivery: In Transit</Text>
            <Text style={styles.orderStatus}>Estimated Arrival: 2 Days</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('TrackOrder')}>
            <Text style={styles.viewMore}>View More</Text>
          </TouchableOpacity>
        </View>

        {/* Your Orders */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Orders</Text>
          <View style={styles.orderCard}>
            <Text style={styles.orderText}>Recent Order: Organic Fertilizer</Text>
            <Text style={styles.orderStatus}>Delivered: Yesterday</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Text style={styles.viewMore}>View More</Text>
          </TouchableOpacity>
        </View>

        {/* New Fertilizers */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>New Fertilizers Available</Text>
          <View style={styles.cardRow}>
            <View style={styles.card}>
              <Image
                source={require('./assets/fertilizer.png')}
                style={styles.cardIcon}
              />
              <Text style={styles.cardTitle}>Organic Mix</Text>
              <Text style={styles.cardDescription}>Boost yield naturally.</Text>
            </View>
            <View style={styles.card}>
              <Image
                source={require('./assets/fertilizer.png')}
                style={styles.cardIcon}
              />
              <Text style={styles.cardTitle}>Nitrogen Boost</Text>
              <Text style={styles.cardDescription}>Available now!</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Marketplace')}>
            <Text style={styles.viewMore}>View More</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Navigation Bar */}
      <NavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: 200, // Adjusted height to bring the background up
    borderRadius: 30,
  },
  
  headerContainer: {
    alignItems: 'center',
    marginTop: 69, // Adjusted to bring the header up
  },
  headerText: {
    fontSize: 36,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'notoserif',
  },

  contentContainer: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 10, // Adjusted margin to bring content higher
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  orderCard: {
    backgroundColor: '#e0f7fa',
    borderRadius: 10,
    padding: 15,
    elevation: 3,
  },
  orderText: {
    fontSize: 16,
    color: '#00796b',
  },
  orderStatus: {
    fontSize: 14,
    color: '#004d40',
    marginTop: 5,
  },
  viewMore: {
    color: '#007BFF',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'right',
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 15,
    width: '48%',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  cardIcon: {
    width: 50,
    height: 50,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 12,
    color: '#777',
    textAlign: 'center',
  },
});

export default DashboardScreen;
