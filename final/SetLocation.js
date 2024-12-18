import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { Marker, UrlTile } from 'react-native-maps';

const SetLocation = ({ navigation }) => {
  const [region, setRegion] = useState({
    latitude: 37.78825, // Default Latitude
    longitude: -122.4324, // Default Longitude
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });

  const [marker, setMarker] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });

  const handleMapPress = (e) => {
    const { latitude, longitude } = e.nativeEvent.coordinate;
    setRegion({
      latitude,
      longitude,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    });
    setMarker({
      latitude,
      longitude,
    });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.headerTitle}>Find Location</Text>

      {/* MapView with OpenStreetMap */}
      <MapView
        style={styles.map}
        region={region}
        onRegionChangeComplete={(reg) => setRegion(reg)}
        onPress={handleMapPress}
        provider={null} // Disable Google Maps provider
      >
        {/* Use OpenStreetMap Tiles */}
        <UrlTile
          /**
           * OpenStreetMap tile URL
           * You can switch to other public tiles as well
           */
          urlTemplate="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
          maximumZ={19}
          flipY={false}
        />

        {/* Marker */}
        <Marker coordinate={marker} />
      </MapView>

      {/* Set Location Button */}
      <TouchableOpacity style={styles.setButton} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Set Location</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 10,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  map: {
    flex: 1,
    borderRadius: 10,
    marginVertical: 10,
  },
  setButton: {
    backgroundColor: '#83CE2C',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SetLocation;
