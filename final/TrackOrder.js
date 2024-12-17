import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TrackOrder = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Track Order</Text>
      <Text style={styles.orderId}>Order ID: 4544882266</Text>

      {/* Timeline */}
      <View style={styles.timeline}>
        <Text>04:30 PM - Confirmed</Text>
        <Text>04:38 PM - Processing</Text>
        <Text>04:42 PM - On the way</Text>
        <Text>04:46 PM - Delivered</Text>
      </View>

      {/* Rider Information */}
      <View style={styles.riderCard}>
        <Text style={styles.riderName}>mr rider</Text>
        <Text>25 minutes on the way</Text>
        <TouchableOpacity style={styles.callButton}>
          <Text style={styles.callText}>Call</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff', flex: 1 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  orderId: { fontSize: 16, marginBottom: 20 },
  timeline: { marginBottom: 20 },
  riderCard: { padding: 15, borderRadius: 5, backgroundColor: '#f8f8f8' },
  riderName: { fontWeight: 'bold', fontSize: 18, marginBottom: 5 },
  callButton: { marginTop: 10, backgroundColor: '#e91e63', padding: 10, borderRadius: 5 },
  callText: { color: '#fff', textAlign: 'center', fontSize: 16 },
});

export default TrackOrder;
