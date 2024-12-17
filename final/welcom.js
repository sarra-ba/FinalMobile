import React, { useEffect } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation(); // Initialize navigation

  useEffect(() => {
    // Set a timer to navigate to Login screen after 2500ms
    const timer = setTimeout(() => {
      navigation.navigate('Login'); // Navigate to Login
    }, 2500);

    // Cleanup the timer if the component unmounts before the timeout
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right']}>
      <ImageBackground
        source={require('./assets/welcome1.png')}
        resizeMode="cover"
        style={styles.image}
      />
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
