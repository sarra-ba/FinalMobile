import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import NavBar from './NavBar';  // Import the NavBar component

const Notifications = () => {
  // Example notifications array
  const notifications = [
    { id: 1, title: 'Delivery Update', message: 'Your fertilizer is out for delivery.', time: '2h ago' },
    { id: 2, title: 'Order Shipped', message: 'Your order #1234 has been shipped.', time: '1 day ago' },
    { id: 3, title: 'New Fertilizer', message: 'Check out our new organic fertilizers!', time: '2 days ago' },
    { id: 4, title: 'System Alert', message: 'Your account details were updated.', time: '3 days ago' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Notifications</Text>
      </View>

      {/* Scrollable Notifications */}
      <ScrollView style={styles.notificationsList}>
        {notifications.map((notification) => (
          <TouchableOpacity key={notification.id} style={styles.notificationCard}>
            <View style={styles.notificationContent}>
              <Image
                source={require('./assets/bell.png')} // Replace with an appropriate icon
                style={styles.icon}
              />
              <View style={styles.textContainer}>
                <Text style={styles.notificationTitle}>{notification.title}</Text>
                <Text style={styles.notificationMessage}>{notification.message}</Text>
                <Text style={styles.notificationTime}>{notification.time}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* NavBar */}
      <NavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  headerContainer: {
    backgroundColor: '#4CAF50',
    paddingVertical: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 5,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  notificationsList: {
    marginVertical: 10,
    paddingHorizontal: 15,
  },
  notificationCard: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  notificationContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  notificationMessage: {
    fontSize: 14,
    color: '#666',
    marginVertical: 3,
  },
  notificationTime: {
    fontSize: 12,
    color: '#999',
  },
});

export default Notifications;
