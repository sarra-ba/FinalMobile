import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground,  TouchableOpacity,} from 'react-native';

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/background1.png')}
        style={styles.image}
        imageStyle={styles.roundedBorder}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Profile</Text>
        </View>
        {/* The leaf icon should be placed within the ImageBackground */}
        <Image
          source={require('./assets/leaf-removebg-preview1.png')}
          style={styles.leaf}
        />
      </ImageBackground>
  {/* Bottom navigation bar */}
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require('./assets/fertilizer.png')} // Replace with your icon path
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require('./assets/bell.png')} // Replace with your icon path
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require('./assets/recycle-sign1.png')} // Replace with your icon path
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require('./assets/user1.png')} // Replace with your icon path
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require('./assets/menu.png')} // Replace with your icon path
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width: 411,
    height: 720,
    top:130,
    borderRadius: 30,
  },
  roundedBorder: {
    borderRadius: 50,
  },
  headerContainer: {
    alignItems: 'center',
  },
  headerText: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    top: 130,
    fontFamily: 'notoserif', // Ensure the font is installed and linked correctly
  },
  leaf: {
    position: 'absolute', 
    top: -90, 
    right: -8, 
    width: 120, 
    height: 120, 
    resizeMode: 'contain', 
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 5,
    top : 45,
  },
  navItem: {
    padding: 10,
  },
  icon: {
    width: 30, 
    height: 30, 
    resizeMode: 'contain',
  },

});

export default DashboardScreen;
