import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Input, NativeBaseProvider, Button, Icon, Box, Image, AspectRatio ,ScrollView } from 'native-base';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {UserAction} from "../presenter/Reducer/user/action";


function Signup() {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [apiError, setApiError] = useState('');

    const [name, setName] = useState('Chetan');
    const [email, setEmail] = useState('Chetan.barod.we2code@gmail.com');
    const [password, setPassword] = useState('12345@abcd');
    const [confirmPassword, setConfirmPassword] = useState('12345@abcd');

    const onSubmit = async => {

      setNameError('');
      setEmailError('');
      setPasswordError('');
      setConfirmPasswordError('');
      setApiError('');

      // Validate the input fields
    if (name.trim() === '') {
      setNameError('Email is required');
      return;
    }

    if (email.trim() === '') {
      setEmailError('Email is required');
      return;
    }

    if (password.trim() === '') {
      setPasswordError('Password is required');
      return;
    }

    if (confirmPassword.trim() === '') {
      setConfirmPasswordError('Password is required');
      return;
    }

      dispatch(UserAction.signUp({
         "name" : name , 
         "email" : email , 
         "password" : password 
        })).then((response) => {
        if(response.res_code == '001'){
          setApiError(`${response.res_code}`); 
        }else{
          setApiError(`${response.response}`);
        }
        console.log(`MY_Responce:: ${response}`);
      });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.Middle}>
        <Text style={styles.LoginText}>Signup</Text>
      </View>

      {/* Username or Email Input Field */}
      <View style={styles.buttonStyle}>
        
        <View style={styles.emailInput}>
          <Input
           value={name}
            onChangeText={(text) => setName(text)}
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
            placeholder="Enter Your Name"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}

          />
        </View>
          {/* Display confirmPasswordError error message */}
          {nameError !== '' && <Text style={styles.errorText}>{nameError}</Text>}
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
            placeholder="Enter Password"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
          />
        </View>
        {/* Display confirmPasswordError error message */}
        {passwordError !== '' && <Text style={styles.errorText}>{passwordError}</Text>}
      </View>

      {/* Password Input Field */}
      <View style={styles.buttonStyleX}>
        
        <View style={styles.emailInput}>
          <Input
           value={confirmPassword}
           onChangeText={(text) => setConfirmPassword(text)}
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
            placeholder="Confirm Password"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
          />
        </View>
             {/* Display confirmPasswordError error message */}
             {confirmPasswordError !== '' && <Text style={styles.errorText}>{confirmPasswordError}</Text>}
      </View>

      <View style={styles.space}></View>
      <View style={styles.space}></View>

      {apiError !== '' && <Text style={styles.errorText}>{apiError}</Text>}

      {/* Button */}
      <View style={styles.buttonStyle}>
        <Button onPress={() => {
          onSubmit();
        }} style={styles.buttonDesign}>
            REGISTER NOW
        </Button>
      </View>

      {/* Line */}
      <View style={styles.lineStyle}>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        <View>
          <Text style={{width: 50, textAlign: 'center'}}>Or</Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
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

    </ScrollView>
  );
}

// After successful login
const saveSignupData = async (token,navigation) => {
  try {
    await AsyncStorage.setItem('token', token);
    // Any other data you want to store
    console.log('Login data saved successfully');
    navigation.navigate('Home');
  } catch (error) {
    console.log('Error saving login data:', error);
  }
};

export default () => {
  return (
    <NativeBaseProvider>
        <Signup />
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