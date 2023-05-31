import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Input, NativeBaseProvider, Button, Icon, Box, Image, ScrollView } from 'native-base';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { UserAction } from "../../presenter/Reducer/user/action";
import { useDispatch, useSelector } from 'react-redux';
import { useRoute, CommonActions } from '@react-navigation/native';
import { styles } from '../../css/AuthStyles';

function Verification() {

  const route = useRoute();
  const user_email = route.params.email;
  const email_otp = route.params.otp;

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [otpError, setOTPError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [apiError, setApiError] = useState('');


  const [email, setEmail] = useState(user_email);
  const [otp, setOTP] = useState(email_otp.toString());

  const onSubmit = async => {

    setEmailError('');
    setOTPError('');
    setApiError('');

    // Validate the input fields
    if (otp.trim() === '') {
      setNameError('OTP is required');
      return;
    }

    if (email.trim() === '') {
      setEmailError('Email is required');
      return;
    }

    dispatch(UserAction.verifyOTP({
      "otp": otp,
      "email": email,
    })).then((response) => {
      if (response.status == true || response.success) {
        setApiError(`token:: ${response.token}`);
        saveSignupData(response.token, navigation);
      } else {
        setApiError(`${response.response}`);
      }
      console.log(`MY_Responce:: ${response}`);
    });
  };

  // After successful login
  const saveSignupData = async (token, navigation) => {
    try {
      await AsyncStorage.setItem('token', token);
      // Any other data you want to store
      console.log('Login data saved successfully');
      //  navigation.navigate('Home');
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            { name: 'Home' },
          ],
        })
      );
    } catch (error) {
      console.log('Error saving login data:', error);
    }
  };

  return (
    <View style={styles.loginContainer}>
      <View style={styles.formContainer}>

        <View style={styles.Middle}>
          <Text style={styles.LoginText}>Verification</Text>
        </View>

        {/* Username or Email Input Field */}
        <View style={styles.buttonStyleX}>

          <View style={styles.emailInput}>
            <Input
              value={email}
              onChangeText={(text) => setEmail(text)}
              InputLeftElement={
                <Icon
                  as={<MaterialCommunityIcons name="email" />}
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
              placeholder="Enter Your Email"
              _light={{
                placeholderTextColor: "blueGray.400",
              }}
              _dark={{
                placeholderTextColor: "blueGray.50",
              }}

            />
          </View>
          {/* Display confirmPasswordError error message */}
          {emailError !== '' && <Text style={styles.errorText}>{emailError}</Text>}
        </View>

        {/* Password Input Field */}
        <View style={styles.buttonStyleX}>

          <View style={styles.emailInput}>
            <Input
              value={otp}
              onChangeText={(text) => setOTP(text)}
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
              // secureTextEntry={true}
              placeholder="Enter OTP"
              _light={{
                placeholderTextColor: "blueGray.400",
              }}
              _dark={{
                placeholderTextColor: "blueGray.50",
              }}
            />
          </View>
          {/* Display confirmPasswordError error message */}
          {otpError !== '' && <Text style={styles.errorText}>{otpError}</Text>}
        </View>

        <View style={styles.space}></View>
        <View style={styles.space}></View>

        {apiError !== '' && <Text style={styles.errorText}>{apiError}</Text>}

        {/* Button */}
        <View style={styles.buttonStyle}>
          <Button onPress={() => {
            onSubmit();
          }} style={styles.buttonDesign}>
            Verify Otp
          </Button>
        </View>

        {/* Line */}
        <View style={styles.lineStyle}>
          <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
          <View>
            <Text style={{ width: 50, textAlign: 'center' }}>Or</Text>
          </View>
          <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
        </View>

        {/* Box */}
        <View style={styles.boxStyle}>
        </View>
        <View style={styles.text2}>
          <Text>Already have account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")} ><Text style={styles.signupText}> Login </Text></TouchableOpacity>
        </View>

        <View style={styles.space}></View>
        <View style={styles.space}></View>

      </View>

    </View>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
      <Verification />
    </NativeBaseProvider>
  )
}