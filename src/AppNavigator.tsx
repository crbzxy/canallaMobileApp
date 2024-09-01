import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CanallaScreen from './screens/Home/CanallaScreen';
import MapScreen from './screens/Map/MapScreen';
import ContactScreen from './screens/Contact/ContactScreen';

const Tab = createBottomTabNavigator();

const getIconName = (routeName: string): string => {
  switch (routeName) {
    case 'Canalla':
      return 'home';
    case 'Map':
      return 'map';
    case 'Contact':
      return 'call';
    default:
      return 'home'; // Valor por defecto en caso de que no coincida con ninguna ruta
  }
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = getIconName(route.name);

            return (
              <Ionicons
                name={iconName}
                size={size}
                color={focused ? 'black' : color}
              />
            );
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            paddingBottom: 10,
            height: 60,
          },
        })}
      >
        <Tab.Screen name="Canalla" component={CanallaScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Contact" component={ContactScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
