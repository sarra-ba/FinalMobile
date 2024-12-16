import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; 


const MarketPlace = () => {

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <ImageBackground
          source={require('./assets/image_2024-12-03_151959045.svg')}
          resizeMode="cover" 
          style={styles.image}
        />
        <View style={styles.topImage}>
          <Image source={require('./assets/Intersect.png')} style={styles.imageStyle} />
        </View>  
        <View style={styles.navBar}>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require('./assets/fertilizer.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require('./assets/bell.png')} 
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require('./assets/recycle-sign1.png')} 
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require('./assets/user1.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require('./assets/menu.png')} 
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#white',
  },
  topImage: {
    alignItems: 'center',
  },
  imageStyle: {
    width: 450,
    top: -10,
    resizeMode: 'contain',
  },
  image: {
    justifyContent: 'center',
    color: 'green',
  },
  navBar: {
    position: 'absolute', 
    bottom: 0,           
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
    backgroundColor: 'white',
    borderTopWidth: 1,    
    borderTopColor: 'green', 
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

export default MarketPlace;
