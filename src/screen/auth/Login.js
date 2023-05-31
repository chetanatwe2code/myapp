import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Input, NativeBaseProvider, Button, Icon, HStack, Spinner, Heading } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthService } from "../../presenter/auth/AuthService";
import { CommonActions } from '@react-navigation/native';
import { styles } from '../../css/AuthStyles';

function Login() {
  const navigation = useNavigation();

  const [loginProcess, setloginProcess] = useState(false);

  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [apiError, setApiError] = useState('');

  const [username, setUsername] = useState('chetan.barod.we2code@gmail.com');
  const [password, setPassword] = useState('12345@abcd');

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

    setloginProcess(true);

    AuthService.signIn({ "email": username, "password": password }).then((response) => {
      if (response.res_code == '001') {
        setloginProcess(false);
        saveLoginData(response.token, navigation);
      } else {
        setloginProcess(false);
        setApiError('Your login credentials do not match');
        console.log(`MY_Responce:: Your login credentials do not match`);
      }
    });
  };

  return (
    <View style={styles.loginContainer}>
      <View style={styles.formContainer}>
        <View style={styles.Middle}>
          <Text style={styles.LoginText}>Login</Text>
        </View>

        {/* email view */}
        <View style={styles.buttonStyle}>

          <View style={styles.emailInput}>
            <Input
              value={username}
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
              placeholder="Email"
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

        {/* Password view */}
        <View style={styles.buttonStyleX}>

          <View style={styles.emailInput}>
            <Input
              value={password}
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

        <TouchableOpacity
          style={styles.toRight}
          onPress={() => navigation.replace("Forgot", { email: username })}>
          <Text style={styles.signupText}>Forgot</Text>
        </TouchableOpacity>

        {apiError !== '' && <Text style={styles.errorText}>{apiError}</Text>}

        {/* Button */}
       
        <View style={styles.buttonStyle}>

        {
          loginProcess ? (
            
              <HStack space={5} justifyContent="center">
              <Spinner accessibilityLabel="Loading posts" />
              <Heading color="primary.500" fontSize="md">
                Login
              </Heading>
            </HStack>
          ) : (
            <Button onPress={() => {
               
               onSubmit();
            }} style={styles.buttonDesign}>
              LOGIN
            </Button>
          )
        }
      

        </View>

        {/* OR */}

        <View style={styles.lineStyle}>
          <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
          <View>
            <Text style={{ width: 50, textAlign: 'center' }}>Or</Text>
          </View>
          <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
        </View>

        <View style={styles.space}></View>

        <View style={styles.text2}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.replace("Signup")} ><Text style={styles.signupText}> Sign up</Text></TouchableOpacity>
        </View>

      </View>
    </View>
  );
}

// After successful login
const saveLoginData = async (token, navigation) => {
  try {
    await AsyncStorage.setItem('token', token);
    // Any other data you want to store
    console.log('Login data saved successfully');
    //navigation.navigate('Home');
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          { name: 'Base' },
        ],
      })
    );
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