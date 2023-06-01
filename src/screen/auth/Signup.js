import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Input, NativeBaseProvider, Button, Icon,  HStack, Spinner, Heading } from 'native-base';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { AuthService } from "../../presenter/auth/AuthService";
import { styles } from '../../css/AuthStyles';
import useValidation from '../../util/Validator';




function Signup() {
  const navigation = useNavigation();

  const validators = {
    name: [(value) => (value.trim() ? null : 'Name is required')],
    email: [
      (value) => (value.trim() ? null : 'Email is required'),
      (value) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? null : 'Invalid email format',
    ],
    password: [
      (value) => (value.trim() ? null : 'Password is required'),
      (value) => (value.trim().length >= 8 ? null : 'Password must be at least 8 characters long'),
    ],
    confirmPassword: [
      (value) => (value.trim() ? null : 'Confirm Password is required'),
      (value) => (value.trim().length >= 8 ? null : 'Confirm Password must be at least 8 characters long'),
      (value) => (value === state.password ? null : 'Confirm Password must be same as Password'),
    ],
  };

  const { state, onInputChange, errors, validate } = useValidation(
    //{ name : "" , email: ' ', password: '' , confirmPassword: '' },
    { name : "Chetan" , email: 'chetan.barod.we2code@gmail.com', password: '12345@abcd' , confirmPassword: '12345@abcd' },
    validators
  );

  const [apiError, setApiError] = useState('');
  const [signUpProcess, setSignUpProcess] = useState(false);

  const onSubmit = () => {
  
    setApiError('');
    if (!validate()) return;
    setSignUpProcess(true);

    AuthService.signUp({
      "name": state.name,
      "email": state.email,
      "password": state.password
    }).then((response) => {
      setSignUpProcess(false);
      if (response.res_code == '001') {
        navigation.navigate("Verification", { email: state.email, 'otp': response.otp });
        setApiError(`${response.res_code}`);
      } else {
        setApiError(`${response.response}`);
      }
      console.log(`MY_Responce:: ${response.response}`);
    });
  };

  return (
    <View style={styles.loginContainer}>
      <View style={styles.formContainer}>
        <View style={styles.Middle}>
          <Text style={styles.LoginText}>Signup</Text>
        </View>

        {/* Username or Email Input Field */}
        <View style={styles.buttonStyle}>

          <View style={styles.emailInput}>
            <Input
              value={state.name}
              onChangeText={(value) => onInputChange('name', value)}
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
          {errors.name && <Text style={styles.errorText}>{errors.name[0]}</Text>}
        </View>

        {/* Username or Email Input Field */}
        <View style={styles.buttonStyleX}>

          <View style={styles.emailInput}>
            <Input
              value={state.email}
              onChangeText={(value) => onInputChange('email', value)}
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
          {errors.email && <Text style={styles.errorText}>{errors.email[0]}</Text>}
        </View>

        {/* Password Input Field */}
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
          {errors.password && <Text style={styles.errorText}>{errors.password[0]}</Text>}
        </View>

        {/* Password Input Field */}
        <View style={styles.buttonStyleX}>

          <View style={styles.emailInput}>
            <Input
              value={state.confirmPassword}
              onChangeText={(value) => onInputChange('confirmPassword', value)}
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
          {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword[0]}</Text>}
        </View>

        <View style={styles.space}></View>
        <View style={styles.space}></View>

        {apiError !== '' && <Text style={styles.errorText}>{apiError}</Text>}

        {/* Button */}
        {/* <View style={styles.buttonStyle}>
          <Button onPress={() => {
            onSubmit();
          }} style={styles.buttonDesign}>
            
          </Button>
        </View> */}

        {
          signUpProcess ? (
            
              <HStack space={5} justifyContent="center">
              <Spinner accessibilityLabel="Loading posts" />
              <Heading color="primary.500" fontSize="md">
                In-Process
              </Heading>
            </HStack>
          ) : (
            <Button onPress={() => {
               onSubmit();
            }} style={styles.buttonDesign}>
              REGISTER NOW
            </Button>
          )
        }

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
          <TouchableOpacity onPress={() => navigation.replace("Login")} ><Text style={styles.signupText}> Login </Text></TouchableOpacity>
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
      <Signup />
    </NativeBaseProvider>
  )
}