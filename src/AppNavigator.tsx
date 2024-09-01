import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
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
      return 'home';
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
              <Icon
                name={iconName}
                type="ionicon" // Si quieres usar los mismos íconos de Ionicons
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
