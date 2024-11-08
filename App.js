import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './Screens/HomeScreen';
import DetailScreen from './Screens/DetailScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerTitle: "Business"}}>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Detail' component={DetailScreen}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
