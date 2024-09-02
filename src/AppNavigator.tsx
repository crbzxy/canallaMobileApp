import React, { useMemo } from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/core';
import Icon from 'react-native-vector-icons/Ionicons';
import CanallaScreen from './screens/Home/CanallaScreen';
import MapScreen from './screens/Map/MapScreen';
import ContactScreen from './screens/Contact/ContactScreen';
import logo from '../assets/logo.png';

type RouteName = 'Canalla' | 'Mapa' | 'Contacto';

type RootStackParamList = {
  Canalla: undefined;
  Mapa: undefined;
  Contacto: undefined;
};

const Tab = createBottomTabNavigator<RootStackParamList>();

const LogoTitle: React.FC = () => (
  <Image
    source={logo}
    style={{ width: 120, height: 40 }}
    resizeMode="contain"
  />
);

const getIconName = (routeName: RouteName): string => {
  switch (routeName) {
    case 'Canalla':
      return 'home';
    case 'Mapa':
      return 'map';
    case 'Contacto':
      return 'call';
    default:
      return 'home';
  }
};

const AppNavigator: React.FC = () => {
  const screenOptions = ({
    route,
  }: {
    route: RouteProp<RootStackParamList, keyof RootStackParamList>;
  }): BottomTabNavigationOptions => {
    const iconName = useMemo(() => getIconName(route.name as RouteName), [route.name]);

    return {
      tabBarIcon: ({
        focused,
        color,
        size,
      }: {
        focused: boolean;
        color: string;
        size: number;
      }) => (
        <Icon name={iconName} size={size} color={focused ? 'black' : color} />
      ),
      tabBarActiveTintColor: 'black',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: {
        paddingBottom: 10,
        height: 60,
      },
      headerTitle: () => <LogoTitle />,
      headerTitleAlign: 'center',
    };
  };

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Canalla" component={CanallaScreen} />
        <Tab.Screen name="Mapa" component={MapScreen} />
        <Tab.Screen name="Contacto" component={ContactScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
