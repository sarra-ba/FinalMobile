import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // For icons (install via npm/yarn)

const ProfileScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Header */}
      <View style={styles.header}>
        <Image
          source={require('./assets/user1.png')} // User profile picture
          style={styles.profileImage}
        />
        <Text style={styles.username}>John Doe</Text>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => navigation.navigate('EditProfile')}
        >
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Account Settings Section */}
      <View style={styles.settingContainer}>
        <Text style={styles.sectionTitle}>Account Settings</Text>

        <TouchableOpacity style={styles.settingItem}>
          <Icon name="notifications-outline" size={20} color="#6DBE45" />
          <Text style={styles.settingText}>Notifications</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <Icon name="cart-outline" size={20} color="#6DBE45" />
          <Text style={styles.settingText}>Order</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <Icon name="stats-chart-outline" size={20} color="#6DBE45" />
          <Text style={styles.settingText}>Dashboard</Text>
        </TouchableOpacity>
      </View>

      {/* Preferences Section */}
      <View style={styles.settingContainer}>
        <Text style={styles.sectionTitle}>Preferences</Text>

        <TouchableOpacity style={styles.settingItem}>
          <Icon name="language-outline" size={20} color="#6DBE45" />
          <Text style={styles.settingText}>Language</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <Icon name="moon-outline" size={20} color="#6DBE45" />
          <Text style={styles.settingText}>Dark Mode</Text>
        </TouchableOpacity>
      </View>

      {/* Logout Button */}
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => navigation.navigate('LogoutConfirmation')}
      >
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F6F6F6',
    paddingVertical: 20,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 10, // Reduced padding to move it up
    marginBottom: 10, // Adjust margin for compact layout
  },
  profileImage: {
    width: 100, // Adjust size for compactness
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#fff',
    marginBottom: 5, // Reduced margin to move image up
  },
  username: {
    fontSize: 20, // Slightly smaller font for compact layout
    color: '#333', // Changed text color to dark for better visibility
    fontWeight: 'bold',
    marginBottom: 5, // Reduced margin for compact layout
  },
  editButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 5, // Reduced padding for compactness
    borderRadius: 10,
    marginTop: 5, // Reduced margin to keep button closer to the text
  },
  editButtonText: {
    color: '#6DBE45',
    fontWeight: 'bold',
  },
  settingContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 12,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  settingText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 15,
  },
  logoutButton: {
    backgroundColor: '#F44336',
    marginHorizontal: 20,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 30,
  },
  logoutText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
