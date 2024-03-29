import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import About from '../screen/About';
import Login from '../screen/auth/Login';
import Signup from '../screen/auth/Signup';
import Verification from '../screen/auth/Verification';
import Forgot from '../screen/auth/Forgot';
import BaseNavigator from './BaseNavigator';

import AsyncStorage from '@react-native-async-storage/async-storage';

/// if user logged in then i need to initialRouteName is Home so how can do this
function ApplicationNavigator() {
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    useEffect(() => {
        checkLoginStatus();
      }, []);
    
      const checkLoginStatus = async () => {
        try {
            // setIsLoggedIn(false);
            // return;
          const token = await AsyncStorage.getItem('token');
          setIsLoggedIn(token !== null && token !== '');
        } catch (error) {
          console.error('Error retrieving login data:', error);
        } finally {
          setIsLoading(false);
        }
      };

      if (isLoading) {
        return (
            <ActivityIndicator size="large" color="blue" />
        );
      }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={isLoggedIn ? 'Base' : 'Login'} >
                <Stack.Screen name="Base" component={BaseNavigator} options={{ headerShown: false }}/>
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
                <Stack.Screen name="Forgot" component={Forgot} options={{ headerShown: false }}/>
                <Stack.Screen name="Verification" component={Verification} options={{ headerShown: false }}/>
                <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
                <Stack.Screen name="About" component={About} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default ApplicationNavigator;
