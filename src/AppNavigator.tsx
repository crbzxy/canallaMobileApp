import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import CanallaScreen from './screens/Home/CanallaScreen';
import MapScreen from './screens/Map/MapScreen';
import ContactScreen from './screens/Contact/ContactScreen';
import logo from '../assets/logo.png';

const Tab = createBottomTabNavigator();

const LogoTitle = () => {
  return (
    <Image
      source={logo}
      style={{width: 120, height: 40}}
      resizeMode="contain"
    />
  );
};

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
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            const iconName = getIconName(route.name);

            return (
              <Icon
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
          headerTitle: () => <LogoTitle />,
          headerTitleAlign: 'center',
        })}>
        <Tab.Screen name="Canalla" component={CanallaScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Contact" component={ContactScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
//src\AppNavigator.tsx
