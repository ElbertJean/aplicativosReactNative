import React, {JSX} from 'react';
import {View, Text} from 'react-native';
import InitialScreen from './src/screens/Initial/InitialScreen.screen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Router from './src/routes/Router';

function App(): JSX.Element {
  return (
    <GestureHandlerRootView>
      <Router />
    </GestureHandlerRootView>
  );
}

export default App;
