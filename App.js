import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import PerfilScreen from './screens/PerfilScreen';
import HabilidadesScreen from './screens/HabilidadesScreen';

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'PerfilTab') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Habilidades') {
              iconName = focused ? 'code-slash' : 'code-slash-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },

          tabBarActiveTintColor: '#e65599',
          tabBarInactiveTintColor: 'gray'
        })}>
        <Tab.Screen
          name="PerfilTab"
          component={PerfilScreen}
          options={{ title: 'Perfil', headerShown: false }}>
        </Tab.Screen>
        <Tab.Screen name="Habilidades" component={HabilidadesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}