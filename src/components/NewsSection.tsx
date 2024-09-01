import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';


const news = [
  { id: '1', title: 'Noticia 1', description: 'Descripción de la noticia 1' },
  { id: '2', title: 'Noticia 2', description: 'Descripción de la noticia 2' },
  { id: '3', title: 'Noticia 3', description: 'Descripción de la noticia 3' },
];

const NewsSection = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={news}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.newsItem}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  newsItem: {
    marginBottom: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  description: {
    fontSize: 14,
    color: 'gray',
  },
});

export default NewsSection;
