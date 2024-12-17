import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Shipping = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shipping</Text>

      {/* Order Location */}
      <View style={styles.section}>
        <Text style={styles.label}>Order Location</Text>
        <Text style={styles.info}>8502 Preston Rd, Inglewood</Text>
      </View>

      {/* Deliver To */}
      <View style={styles.section}>
        <Text style={styles.label}>Deliver To</Text>
        <Text style={styles.info}>4517 Washinton Ave, Manchester</Text>
        <TouchableOpacity>
          <Text style={styles.editText}>Set Location</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff', flex: 1 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  section: { marginBottom: 20 },
  label: { fontSize: 16, color: '#555' },
  info: { fontSize: 18, marginVertical: 5 },
  editText: { color: '#e91e63', fontWeight: 'bold' },
});

export default Shipping;
