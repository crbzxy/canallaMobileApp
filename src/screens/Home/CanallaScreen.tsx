import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CanallaScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Canalla Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'black',
  },
});

export default CanallaScreen;
