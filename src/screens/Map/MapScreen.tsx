import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
  ActivityIndicator,
} from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps';
import Modal from 'react-native-modal';
import locationsData from '../../../locations.json'; // Importa el archivo JSON local

// Definir el tipo de datos para una ubicación
interface Location {
  title: string;
  subtitle: string;
  imageKey: string;
  latitude: number;
  longitude: number;
}

const imageMap: { [key: string]: any } = {
  canalla_fachada: require('../../../assets/canalla/fachadas/canalla_fachada.jpeg'),
  lolita_fachada: require('../../../assets/canalla/fachadas/lolita_fachada.jpg'),
  ubicacion3_fachada: require('../../../assets/canalla/fachadas/canalla_fachada.jpeg'),
  ubicacion4_fachada: require('../../../assets/canalla/fachadas/canalla_fachada.jpeg'),
  ubicacion5_fachada: require('../../../assets/canalla/fachadas/canalla_fachada.jpeg'),
  ubicacion6_fachada: require('../../../assets/canalla/fachadas/canalla_fachada.jpeg'),
};


const getImageSource = (imageKey: string) => {
  return imageMap[imageKey];
};

const MapScreen: React.FC = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const mapRef = useRef<MapView | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Cargar los datos del archivo JSON local
    setLocations(locationsData);
    setLoading(false);
  }, []);

  const openModal = (location: Location) => {
    setSelectedLocation(location);
    setModalVisible(true);
  };

  const centerMapOnLocation = (location: Location) => {
    if (mapRef.current) {
      const region: Region = {
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.0422,
        longitudeDelta: 0.0221,
      };
      mapRef.current.animateToRegion(region, 1000);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: locations[0]?.latitude || 0,
          longitude: locations[0]?.longitude || 0,
          latitudeDelta: 0.0422,
          longitudeDelta: 0.0221,
        }}>
        {locations.map((location) => (
          <Marker
            key={location.title}
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            onPress={() => openModal(location)}
          />
        ))}
      </MapView>

      <ScrollView
        horizontal
        contentContainerStyle={styles.cardContainer}
        style={styles.scrollView}>
        {locations.map((location) => (
          <TouchableOpacity
            key={location.title}
            style={styles.card}
            onPress={() => {
              centerMapOnLocation(location);
              openModal(location);
            }}>
            <Image
              source={getImageSource(location.imageKey)}
              style={styles.cardImage}
            />
            <Text style={styles.cardTitle}>{location.title}</Text>
            <Text style={styles.cardSubtitle}>{location.subtitle}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
        onSwipeComplete={() => setModalVisible(false)}
        swipeDirection="down"
        backdropOpacity={0.7}
        animationIn="zoomInUp"
        animationOut="zoomOutUp"
        style={styles.modalContainer}>
        <View style={styles.modalView}>
          {selectedLocation && (
            <>
              <Text style={styles.calloutTitle}>{selectedLocation.title}</Text>
              <Text style={styles.calloutSubtitle}>
                {selectedLocation.subtitle}
              </Text>
              <Image
                style={styles.calloutImage}
                source={getImageSource(selectedLocation.imageKey)}
              />
            </>
          )}
          <Button title="Cerrar" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  scrollView: {
    position: 'absolute',
    bottom: 20,
  },
  cardContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  card: {
    width: 200,
    marginRight: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: 100,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    margin: 10,
    color: 'black',
  },
  cardSubtitle: {
    fontSize: 14,
    marginHorizontal: 10,
    marginBottom: 10,
    color: 'gray',
  },
  modalContainer: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
  },
  calloutTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
    color: 'black',
  },
  calloutSubtitle: {
    fontSize: 14,
    marginBottom: 10,
    color: 'black',
  },
  calloutImage: {
    width: 260,
    height: 130,
    borderRadius: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MapScreen;
