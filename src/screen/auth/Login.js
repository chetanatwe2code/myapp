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
import useValidation from '../../util/Validator';

// Define your validation functions
const validators = {
  email: [
    (value) => (value.trim() ? null : 'Email is required'),
    (value) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? null : 'Invalid email format',
  ],
  password: [
    (value) => (value.trim() ? null : 'Password is required'),
    (value) => (value.trim().length >= 8 ? null : 'Password must be at least 8 characters long'),
  ],
};

function Login() {
  const navigation = useNavigation();

  const [loginProcess, setloginProcess] = useState(false);
  const [apiError, setApiError] = useState('');

  const { state, onInputChange, errors, validate } = useValidation(
    { email: 'chetan.barod.we2code@gmail.com', password: '12345@abcd' },
    validators
  );

  const onSubmit = () => {

    setApiError('');
    if (!validate()) return;
    setloginProcess(true);

    AuthService.signIn({ "email": state.email, "password": state.password }).then((response) => {
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
              value={state.email}
              onChangeText={(value) => onInputChange('email', value)}
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

          {errors.email && <Text style={styles.errorText}>{errors.email[0]}</Text>}
        </View>

        {/* Password view */}
        <View style={styles.buttonStyleX}>

          <View style={styles.emailInput}>
            <Input
              value={state.password}
              onChangeText={(value) => onInputChange('password', value)}
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
          {errors.password && <Text style={styles.errorText}>{errors.password[0]}</Text>}
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