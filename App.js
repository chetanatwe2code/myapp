import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import About from './src/screen/About';
import Home from './src/screen/Home';
import Login from './src/screen/Login';
import Signup from './src/screen/Signup';

import {Provider} from 'react-redux';
import RootStore from './src/presenter/RootStore';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={RootStore}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
