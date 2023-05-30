import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Input, NativeBaseProvider, Button, Icon, Box, Image, AspectRatio } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {UserAction} from "../presenter/Reducer/user/action";
import {useDispatch, useSelector} from 'react-redux';

function Login() {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [apiError, setApiError] = useState('');

   

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async => {

      setUsernameError('');
      setPasswordError('');
      setApiError('');

      // Validate the input fields
    if (username.trim() === '') {
      setUsernameError('Username or Email is required');
      return;
    }

    if (password.trim() === '') {
      setPasswordError('Password is required');
      return;
    }

      dispatch(UserAction.signIn({ "email" : username , "password" : password })).then((response) => {
        if(response.res_code == '001'){
          saveLoginData(response.token);
        }else{
          setApiError('Your login credentials do not match');
          console.log(`MY_Responce:: Your login credentials do not match`);
        }
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.Middle}>
        <Text style={styles.LoginText}>Login</Text>
      </View>

      {/* Username or Email Input Field */}
      <View style={styles.buttonStyle}>
        
        <View style={styles.emailInput}>
          <Input
           onChangeText={(text) => setUsername(text)}
            InputLeftElement={
              <Icon
                as={<FontAwesome5 name="user-secret" />}
                size="sm"
                m={2}
                _light={{
                  color: "black",
                }}
                _dark={{
                  color: "gray.300",
                }}
              />
            }
            variant="outline"
            placeholder="Username or Email"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}

          />
        </View>
        {/* Display username error message */}
        {usernameError !== '' && <Text style={styles.errorText}>{usernameError}</Text>}
      </View>

      {/* Password Input Field */}
      <View style={styles.buttonStyleX}>
        
        <View style={styles.emailInput}>
          <Input
            onChangeText={(text) => setPassword(text)}
            InputLeftElement={
              <Icon
                as={<FontAwesome5 name="key" />}
                size="sm"
                m={2}
                _light={{
                  color: "black",
                }}
                _dark={{
                  color: "gray.300",
                }}
              />
            }
            variant="outline"
            secureTextEntry={true}
            placeholder="Password"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
          />
        </View>
        {/* Display password error message */}
        {passwordError !== '' && <Text style={styles.errorText}>{passwordError}</Text>}
      </View>

      <View style={styles.space}></View>
      <View style={styles.space}></View>

      {apiError !== '' && <Text style={styles.errorText}>{apiError}</Text>}

      {/* Button */}
      <View style={styles.buttonStyle}>
      <Button onPress={() => {
          onSubmit();
        }} style={styles.buttonDesign}>
          LOGIN
        </Button>

      </View>

      {/* OR */}

      <View style={styles.lineStyle}>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        <View>
          <Text style={{width: 50, textAlign: 'center'}}>Or</Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
      </View>

      <View style={styles.space}></View>

      <View style={styles.text2}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")} ><Text style={styles.signupText}> Sign up</Text></TouchableOpacity>
      </View>

    </View>
  );
}

// After successful login
const saveLoginData = async (token) => {
  try {
    await AsyncStorage.setItem('token', token);
    // Any other data you want to store
    console.log('Login data saved successfully');
    useNavigation.navigate('Home');
  } catch (error) {
    console.log('Error saving login data:', error);
  }
};


export default () => {
  return (
    <NativeBaseProvider>
     
        <Login />
      
    </NativeBaseProvider>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  LoginText: {
    marginTop:100,
    fontSize:30,
    fontWeight:'bold',
  },
  Middle:{
    alignItems:'center',
    justifyContent:'center',
  },
  text2:{
    flexDirection:'row',
    justifyContent:'center',
    paddingTop:5
  },
  signupText:{
    fontWeight:'bold'
  },
  emailField:{
    marginTop:30,
    marginLeft:15
  },
  emailInput:{
    marginTop:10,
    marginRight:5
  },
  buttonStyle:{
    marginTop:30,
    marginLeft:15,
    marginRight:15
  },
  buttonStyleX:{
    marginTop:12,
    marginLeft:15,
    marginRight:15
  },
  buttonDesign:{
    backgroundColor:'#026efd'
  },
  lineStyle:{
    flexDirection:'row',
    marginTop:30,
    marginLeft:15,
    marginRight:15,
    alignItems:'center'
  },
  imageStyle:{
    width:80,
    height:80,
    marginLeft:20,
  },
  boxStyle:{
    flexDirection:'row',
    marginTop:30,
    marginLeft:15,
    marginRight:15,
    justifyContent:'space-around'
  },
  space: {
    height: 20, // Add desired space height
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
  },
});