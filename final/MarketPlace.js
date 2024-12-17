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
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import NavBar from './NavBar'; // Import NavBar component
import LinearGradient from 'react-native-linear-gradient';

const MarketPlace = ({ navigation }) => {
  const [search, setSearch] = useState('');

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleFilterPress = () => {
    navigation.navigate('Filter'); // Navigate to FilterPage
  };

  const handleSortPress = () => {
    console.log("Sort pressed");
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

        {/* searchbar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Icon name="search" size={20} color="grey" />
            <TextInput
              style={styles.searchInput}
              placeholder="Type your product..."
              value={search}
              onChangeText={setSearch}
            />
          </View>
        </View>

        {/* Filter and Sort buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleFilterPress}>
            <View style={styles.iconTextContainer}>
              <Icon name="filter" size={15} color="#83CE2C" style={styles.miniicon} />
              <Text style={styles.buttonText}>Filter</Text> {/* Text wrapped correctly */}
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleSortPress}>
            <View style={styles.iconTextContainer}>
              <Icon name="sort" size={15} color="#83CE2C" style={styles.miniicon} />
              <Text style={styles.buttonText}>Sort</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* navbar */}
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

        {/* Navbar Component */}
        <NavBar /> {/* Ensure NavBar component returns valid JSX */}

      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    borderTopColor: '#83CE2C',
  },
  navItem: {
    padding: 10,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: -40,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 8,
    height: 40,
    top: 90,
    borderWidth: 1,
    borderColor: '#83CE2C',
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
  },
  miniicon: {
    width: 20,
    height: 20,
    marginRight: 2,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    padding: 10,
    top: 120,
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#83CE2C",
  },
  buttonText: {
    color: 'gray',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default MarketPlace;
