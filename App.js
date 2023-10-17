import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import { ModalPortal } from "react-native-modals";


function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
      <ModalPortal />
    </NavigationContainer>
  );
}

export default App;
