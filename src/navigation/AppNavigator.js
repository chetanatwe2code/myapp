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
import AddProduct from '../screen/product/add-product/AddProduct';
import Test from '../screen/Test';
import BottomTabNavigator from './BottomTabNavigator';
import { useDispatch } from "react-redux";
//import DrawerNavigator from './DrawerNavigator';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { update_token } from '../presenter/user/Action';

/// if user logged in then i need to initialRouteName is Home so how can do this
function ApplicationNavigator() {

    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState('');


    useEffect(() => {
        checkLoginStatus();
      }, []);
    
      const checkLoginStatus = async () => {
        try {
            // setIsLoggedIn(false);
            // return;
          const token = await AsyncStorage.getItem('token');
          setToken(token);
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

      if(isLoggedIn){
        dispatch(update_token(token));
      }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={isLoggedIn ? 'Base' : 'Login'} >
                <Stack.Screen name="Base" component={BottomTabNavigator} options={{ headerShown: false }}/>
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
                <Stack.Screen name="Forgot" component={Forgot} options={{ headerShown: false }}/>
                <Stack.Screen name="Verification" component={Verification} options={{ headerShown: false }}/>
                <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
                <Stack.Screen name="About" component={About} />
                <Stack.Screen name="AddProduct" component={AddProduct} />
                <Stack.Screen name="Test" component={Test} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default ApplicationNavigator;
