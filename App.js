import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Door from './Components/Door';
import BirthdayCard from './Components/BirthdayCard';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Door" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Door" component={Door} />
        <Stack.Screen name="BirthdayCard" component={BirthdayCard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

