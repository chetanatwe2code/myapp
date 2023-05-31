import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Input, NativeBaseProvider, Button, Icon, Box, Image, ScrollView } from 'native-base';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthService } from "../../presenter/auth/AuthService";
import { CommonActions } from '@react-navigation/native';
import { styles } from '../../css/AuthStyles';

function Forgot() {
    const route = useRoute();
    const user_email = route?.params?.email ?? "";
    //const email_otp = route.params.otp;

    const [VisibleOTP, setVisibleOTP] = useState(false)
    const [VisiblePassword, setVisiblePassword] = useState(false)

    const navigation = useNavigation();

    const [otpError, setOTPError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [apiError, setApiError] = useState('');

    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const [token, setToken] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const [email, setEmail] = useState(user_email);
    const [otp, setOTP] = useState('');

    const getOtp = async => {

        setEmailError('');
        setOTPError('');
        setApiError('');

        setOTP('');

        if (email.trim() === '') {
            setEmailError('Email is required');
            return;
        }

        AuthService.forgotPassword({
            "email": email,
        }).then((response) => {
            if (response.status == true) {
                setVisibleOTP(true);
            } else {
                setApiError(`${response.response}`);
            }
            console.log(`MY_Responce:: ${response}`);
        });
    };

    const changePassword = async => {

        setApiError('');

        if (token.trim() === '') {
            setApiError('Something wrong');
            return;
        }

        if (password.trim() === '') {
            setEmailError('password is required');
            return;
        }

        if (confirmPassword.trim() === '') {
            setEmailError('confirm Password is required');
            return;
        }

        AuthService.changeForgotPassword({
            "password": password,
            'user_token': token
        },).then((response) => {
            if (response.success == true) {
                navigation.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [
                            { name: 'Login' },
                        ],
                    })
                );
            } else {
                setApiError(`Something wrong`);
            }
            console.log(`MY_Responce:: ${response}`);
        });
    };

    const verifyOtp = async => {

        setEmailError('');
        setOTPError('');
        setApiError('');

        // Validate the input fields
        if (otp.trim() === '') {
            setOTPError('Otp is required');
            return;
        }

        if (email.trim() === '') {
            setEmailError('Email is required');
            return;
        }

        AuthService.verifyOTP({
            "otp": otp,
            "email": email,
        }).then((response) => {
            if (response.status == true || response.success) {
                setToken(response.token);
                setVisiblePassword(true);
                // setApiError(`token:: ${response.token}`);
                // saveSignupData(response.token, navigation);
            } else {
                setApiError(`${response.response}`);
            }
            console.log(`MY_Responce:: ${response}`);
        });
    };

    // // After successful login
    // const saveSignupData = async (token, navigation) => {
    //     try {
    //         await AsyncStorage.setItem('token', token);
    //         // Any other data you want to store
    //         console.log('Login data saved successfully');
    //         //  navigation.navigate('Home');
    //         navigation.dispatch(
    //             CommonActions.reset({
    //                 index: 0,
    //                 routes: [
    //                     { name: 'Home' },
    //                 ],
    //             })
    //         );
    //     } catch (error) {
    //         console.log('Error saving login data:', error);
    //     }
    // };

    return (
        <View style={styles.loginContainer}>

            <View style={styles.formContainer}>

                <View style={styles.Middle}>
                    <Text style={styles.LoginText}>Verification</Text>
                </View>

                {
                    !VisiblePassword ? (
                        <View style={styles.buttonStyleX}>
                            <View style={styles.emailInput}>
                                <Input
                                    value={email}
                                    editable={VisibleOTP == false}
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
                    ) : null
                }



                <View style={styles.space}></View>

                {
                    VisibleOTP && !VisiblePassword ? (
                        <View style={styles.buttonStyleX}>
                            <View style={styles.emailInput}>
                                <Input
                                    value={otp}
                                    onChangeText={(text) => setOTP(text)}
                                    InputLeftElement={
                                        <Icon
                                            as={<MaterialCommunityIcons name="otp" />}
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
                                    placeholder="Enter otp"
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
                    ) : null
                }



                {
                    VisiblePassword ? (
                        <View >
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

                            {/* Confirm Password Input Field */}
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
                        </View>
                    ) : null
                }


                <View style={styles.space}></View>
                <View style={styles.space}></View>

                {apiError !== '' && <Text style={styles.errorText}>{apiError}</Text>}

                {/* Button */}
                <View style={styles.buttonStyle}>
                    <Button onPress={() => {
                        if (!VisibleOTP) {
                            getOtp();
                        } else if (VisiblePassword) {
                            changePassword();
                        } else if (VisibleOTP) {
                            verifyOtp();
                        }
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
                    <Text>Do you have remember? </Text>
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
            <Forgot />
        </NativeBaseProvider>
    )
}