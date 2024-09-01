import React from 'react';
import {SectionList, View, Text, StyleSheet, Dimensions} from 'react-native';
import CustomCarousel from '../../components/Carousel';
import NewsSection from '../../components/NewsSection';

const {height} = Dimensions.get('window');

const CanallaScreen = () => {
  const sections = [
    {
      title: 'Carousel',
      data: [{}],
      renderItem: () => (
        <View style={styles.container}>
          <CustomCarousel />
          <Text style={styles.text}>Canalla Home Screen</Text>
        </View>
      ),
    },
    {title: 'News', data: [{}], renderItem: () => <NewsSection />},
  ];

  return (
    <SectionList
      sections={sections}
      keyExtractor={(item, index) => `section-${index}`}
      contentContainerStyle={styles.scrollContainer}
    />
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 0,
  },
  container: {
    height: height * 0.7, // Ocupa el 100% de la altura de la pantalla
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default CanallaScreen;
