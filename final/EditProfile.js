import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';  // For the "+" icon
import { launchImageLibrary } from 'react-native-image-picker';  // Image picker library
import AsyncStorage from '@react-native-async-storage/async-storage';  // For storing and retrieving user data

const EditProfileScreen = () => {
  const [username, setUsername] = useState('JohnDoe');
  const [email, setEmail] = useState('johndoe@gmail.com');
  const [phoneNumber, setPhoneNumber] = useState('123-456-7890');
  const [password, setPassword] = useState('********');
  const [profileImage, setProfileImage] = useState(require('./assets/user1.png'));  // Default profile picture
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Retrieve userId from AsyncStorage (or other storage method)
    const fetchUserId = async () => {
      const storedUserId = await AsyncStorage.getItem('userId');
      if (storedUserId) {
        setUserId(storedUserId);
      }
    };

    fetchUserId();
  }, []);

  // Function to handle image picking
  const handleImagePick = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
      },
      (response) => {
        if (response.didCancel) {
          console.log('User canceled image picker');
        } else if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorMessage);
        } else {
          // Update profile picture with selected image
          setProfileImage({ uri: response.assets[0].uri });
        }
      }
    );
  };

  // Function to handle profile update
  const handleProfileUpdate = async () => {
    if (!userId) {
      alert('User ID is missing');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('profileImage', {
        uri: profileImage.uri,
        type: 'image/jpeg',  // Adjust the type based on the selected image
        name: 'profile-image.jpg',
      });
      formData.append('username', username);
      formData.append('email', email);
      formData.append('phoneNumber', phoneNumber);
      formData.append('password', password);
      formData.append('userId', userId);  // Include userId in the form data

      const response = await fetch('http:///localhost:8080/updateProfile', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        alert('Profile updated successfully!');
      } else {
        alert('Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Error updating profile');
    }
  };

  return (
    <View style={styles.container}>
      {/* Header with background image */}
      <ImageBackground
        source={require('./assets/background1.png')}  // Background image
        style={styles.headerBackground}>
        
        {/* Search Bar */}
        
      </ImageBackground>

      {/* Profile Image */}
      <View style={styles.imageContainer}>
        <Image source={profileImage} style={styles.profileImage} />
        {/* "+" Icon for changing profile picture */}
        <TouchableOpacity style={styles.changeImageButton} onPress={handleImagePick}>
          <Icon name="add-circle" size={40} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Input Fields */}
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#777"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#777"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          placeholderTextColor="#777"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#777"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      {/* Update Button */}
      <TouchableOpacity style={styles.updateButton} onPress={handleProfileUpdate}>
        <Text style={styles.updateButtonText}>Update</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFC',
    alignItems: 'center',
  },
  headerBackground: {
    width: '100%',
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
  imageContainer: {
    backgroundColor: '#E0F2F1',
    borderRadius: 100,
    padding: 8,
    marginTop: -100,
    elevation: 10,
    position: 'relative',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  changeImageButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#8BC34A',
    borderRadius: 30,
    padding: 10,
    elevation: 5,
  },
  formContainer: {
    marginTop: 20,
    width: '90%',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 15,
    fontSize: 16,
    color: '#333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  updateButton: {
    backgroundColor: '#6DBE45',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 30,
    width: '90%',
    alignItems: 'center',
    marginTop: 10,
    elevation: 5,
  },
  updateButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default EditProfileScreen;
