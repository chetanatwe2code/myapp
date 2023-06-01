import React, { useState, useEffect } from 'react';
import { Button } from 'react-native';
import { NativeBaseProvider, View, Text, Image, HStack, VStack } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { AuthService } from '../../presenter/auth/AuthService';
import { CommonActions } from '@react-navigation/native';

import { useSelector } from "react-redux";

import { Service } from '../../presenter/user/Service';

const Account = () => {

  useEffect(() => {
    Service.getUserDetails();
  }, []);

  const navigation = useNavigation();


  const user = useSelector((state) => state.data.user);

  return (
    <View >





      <View style={{ marginHorizontal: 20, marginVertical: 15 }}>

        <View style={{ marginTop: 20 }}></View>

        <HStack style={{ alignItems: "center" }}>

          <Image
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 70,
              width: 70,
              borderRadius: 70 / 2
            }}
            source={{ uri: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg' }}
          />
          <View style={{ marginRight: 20 }}></View>
          <VStack>



            <Text style={{ fontWeight: "bold", fontSize: 20 }}>{user.owner_name ?? "User name"} </Text>
            <Text>{user.email} </Text>

          </VStack>



        </HStack>

        <View style={{ marginTop: 50 }}></View>

        <Text style={{ fontWeight: "bold", fontSize: 17 }}>General Info </Text>

        <View style={{ marginTop: 5 }}></View>

        <Text style={{ fontWeight: "700" }}>Phone Number</Text>
        <Text>{user.phone ?? "1234567890"} </Text>

        <View style={{ marginTop: 5 }}></View>

        <Text style={{ fontWeight: "700" }}>Address</Text>
        <Text>{user.shop_address ?? "79-A New Industrial Area Chota Bangarda Road in front of Laxmibai, Anaj Mandi, Indore, Madhya Pradesh 452006"} </Text>

        <View style={{ marginTop: 20 }}></View>


        <Button
          title="Edit Profile"
          onPress={() => {
            // 
          }}
        />

        <View style={{ marginTop: 20 }}></View>


        <Button
          title="Change Password"
          onPress={() => {
            // 
          }}
        />

        <View style={{ marginTop: 20 }}></View>


        <Button
          title="Logout"
          onPress={() => {
            AuthService.signOut().then((response) => {
              if (response) {
                navigation.dispatch(
                  CommonActions.reset({
                    index: 0,
                    routes: [
                      { name: 'Login' },
                    ],
                  })
                );
              }
            })
          }}
        />
      </View>
      {/* <View style={{ marginTop:20 }}></View> */}



    </View>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <Account />
    </NativeBaseProvider>
  )
}