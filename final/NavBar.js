import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NavBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navBar}>
      <TouchableOpacity 
        style={styles.navItem} 
        onPress={() => navigation.navigate('Marketplace')}
      >
        <Image source={require('./assets/fertilizer.png')} style={styles.icon} />
        <Text style={styles.navText}>Marketplace</Text>  {/* Optional label */}
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.navItem} 
        onPress={() => navigation.navigate('Notifications')}
      >
        <Image source={require('./assets/bell.png')} style={styles.icon} />
        <Text style={styles.navText}>Notifications</Text>  {/* Optional label */}
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.navItem} 
        onPress={() => navigation.navigate('Dashboard')}
      >
        <Image source={require('./assets/recycle-sign1.png')} style={styles.icon} />
        <Text style={styles.navText}>Dashboard</Text>  {/* Optional label */}
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.navItem} 
        onPress={() => navigation.navigate('Profile')}
      >
        <Image source={require('./assets/user1.png')} style={styles.icon} />
        <Text style={styles.navText}>Profile</Text>  {/* Optional label */}
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.navItem} 
        onPress={() => navigation.navigate('Menu')}
      >
        <Image source={require('./assets/menu.png')} style={styles.icon} />
        <Text style={styles.navText}>Menu</Text>  {/* Optional label */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 10,
    position: 'absolute', // Position it at the bottom of the screen
    bottom: 0,  // This ensures the bar stays at the bottom
    width: '100%', // Ensure the bar spans the full width
    borderTopWidth: 1,
    borderTopColor: '#ddd', // Optional: adds a subtle line on top of the nav bar
  },
  navItem: {
    padding: 10,
    alignItems: 'center',  // Ensures that the image and text are vertically aligned
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  navText: {
    fontSize: 10,  // Adjust the font size as needed
    color: '#333',  // Use a dark color for the text
  },
});

export default NavBar;
