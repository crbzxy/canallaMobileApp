import React from 'react';
import {View, Image, StyleSheet, Dimensions, Text} from 'react-native';
import Swiper from 'react-native-swiper';

// Importa las imágenes locales usando rutas relativas
import canalla1 from '../../assets/canalla/canalla1.jpg';
import canalla2 from '../../assets/canalla/canalla2.jpg';
import canalla3 from '../../assets/canalla/canalla3.jpg';

const {width, height} = Dimensions.get('window');

const images = [
  {id: '1', source: canalla1},
  {id: '2', source: canalla2},
  {id: '3', source: canalla3},
];

const CustomCarousel = () => {
  return (
    <Swiper
      style={styles.wrapper}
      showsButtons={true}
      autoplay={true}
      loop={true}
      dotColor="white" // Color de los puntos inactivos
      activeDotColor="black" // Color del punto activo
      nextButton={<Text style={styles.buttonText}>›</Text>} // Personaliza el botón "next"
      prevButton={<Text style={styles.buttonText}>‹</Text>} // Personaliza el botón "prev"
      buttonWrapperStyle={styles.buttonWrapper} // Estilo del contenedor de botones
    >
      {images.map(image => (
        <View style={styles.imageContainer} key={image.id}>
          <Image source={image.source} style={styles.image} />
        </View>
      ))}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 200,
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    padding: 2,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  buttonWrapper: {
    backgroundColor: 'transparent', // Fondo transparente para botones
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  buttonText: {
    color: 'white', // Color de los botones, cambiar a 'black' si lo prefieres
    fontSize: 50,
    fontWeight: 'bold',
  },
});

export default CustomCarousel;
