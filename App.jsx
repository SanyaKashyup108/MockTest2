import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';
import TabNavigator from './navigation/TabNavigator';
import DrawerNavigator from './navigation/DrawerNavigator';

export default function App() {
  return (
    <NavigationContainer>
        {/* <StackNavigator/> */}
      <TabNavigator/>
      {/* <DrawerNavigator/> */}
    </NavigationContainer>
  );
}
