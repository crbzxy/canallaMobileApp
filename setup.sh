#!/bin/bash

# Función para crear directorios y archivos con contenido
create_structure_and_content() {
  base_dir="src"

  # Crear directorios
  mkdir -p "$base_dir/components"
  mkdir -p "$base_dir/screens/Home"
  mkdir -p "$base_dir/screens/Map"
  mkdir -p "$base_dir/screens/Contact"
  mkdir -p "$base_dir/utils"

  # Crear archivos con contenido
  cat > "$base_dir/AppNavigator.tsx" <<EOL
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
EOL

  # Contenido para los componentes
  cat > "$base_dir/components/Button.tsx" <<EOL
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Button;
EOL

  cat > "$base_dir/components/Icon.tsx" <<EOL
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IconProps {
  name: string;
  size?: number;
  color?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 24, color = 'black' }) => {
  return <Ionicons name={name} size={size} color={color} />;
};

export default Icon;
EOL

  # Contenido para las pantallas
  cat > "$base_dir/screens/Home/CanallaScreen.tsx" <<EOL
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
  },
});

export default CanallaScreen;
EOL

  cat > "$base_dir/screens/Map/MapScreen.tsx" <<EOL
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Map Screen</Text>
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
  },
});

export default MapScreen;
EOL

  cat > "$base_dir/screens/Contact/ContactScreen.tsx" <<EOL
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ContactScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contact Screen</Text>
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
  },
});

export default ContactScreen;
EOL

  # Contenido para los utilitarios
  cat > "$base_dir/utils/formatDate.ts" <<EOL
export const formatDate = (date: Date): string => {
  return date.toISOString().split('T')[0];
};
EOL

  cat > "$base_dir/utils/constants.ts" <<EOL
export const API_URL = 'https://api.example.com';
EOL

  cat > "$base_dir/utils/api.ts" <<EOL
import { API_URL } from './constants';

export const fetchData = async (endpoint: string) => {
  const response = await fetch(\`\${API_URL}/\${endpoint}\`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
EOL

  echo "Estructura de carpetas, archivos y contenido creado correctamente."
}

# Ejecutar la función
create_structure_and_content
