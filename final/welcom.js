import React, { useState, useEffect } from 'react';
import {
StyleSheet,
ImageBackground,
SafeAreaView} from 'react-native';

const WelcomeScreen = () => {
    return(

            <SafeAreaView style={styles.container} edges={['left', 'right']}>
              <ImageBackground
              source={require('./assets/welcome1.png')}
              resizeMode="cover" style={styles.image}>
              </ImageBackground>
            </SafeAreaView>

    );
 };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default WelcomeScreen;



