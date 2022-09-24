import React from 'react';
import {View, Text, TextInput} from 'react-native';
import Splash from './Splash';
import Login from './Login';
import SelectPlace from './SelectPlace';
import Upload from './Upload';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SelectPlace" component={SelectPlace} />
        <Stack.Screen name="Upload" component={Upload} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
