import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const socialLinks = [
  { href: 'https://www.instagram.com/canallaneza/', icon: 'instagram' },
  { href: 'https://www.facebook.com/CANALLANEZA/', icon: 'facebook' },
];

const ContactScreen = () => {
  const currentYear = new Date().getFullYear();

  return (
    <View style={styles.container}>
      
      <View style={styles.socialContainer}>
        {socialLinks.map(({ href, icon }) => (
          <TouchableOpacity
            key={href}
            onPress={() => Linking.openURL(href)}
            style={styles.icon}
          >
            <Icon name={icon} size={30} color="#000" />
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.text}>© {currentYear} Canalla Neza</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 10,
  },
});

export default ContactScreen;
