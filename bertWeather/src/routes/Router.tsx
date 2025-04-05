import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import InitialScreen from '../screens/Initial/InitialScreen.screen';
import HomeScreen from '../screens/Home/HomeScreen.screen';

export type RootStackParamList = {
  Initial: undefined;
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Initial"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Initial" component={InitialScreen} options={{}} />
        <Stack.Screen name="Home" component={HomeScreen} options={{}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
