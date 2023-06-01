import React from 'react';
import { Button, View } from 'react-native';
import { NativeBaseProvider, List, ListItem, Text, Box } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { AuthService } from '../../presenter/auth/AuthService';
import { CommonActions } from '@react-navigation/native';

import { useSelector } from "react-redux";

const Account = () => {

  const navigation = useNavigation();

  //const token = useSelector((state) => state.data);

  return (
    <View >



      <View style={{ marginHorizontal:20,marginVertical:15 }}>

      {/* <Text> {{ token }} </Text> */}
        
      
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