import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NavBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navBar}>
    
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Marketplace')}>
        <Image source={require('./assets/fertilizer.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Notifications')}>
        <Image source={require('./assets/bell.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Dashboard')}>
        <Image source={require('./assets/recycle-sign1.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
        <Image source={require('./assets/user1.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Menu')}>
        <Image source={require('./assets/menu.png')} style={styles.icon} />
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

export default NavBar;
