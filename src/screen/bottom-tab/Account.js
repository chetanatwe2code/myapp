import React from 'react';
import { Button, View } from 'react-native';
import { NativeBaseProvider, List, ListItem, Text, Box } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { AuthService } from '../../presenter/auth/AuthService';
import { CommonActions } from '@react-navigation/native';

const Account = () => {
  const navigation = useNavigation();
  return (
    <View >
      

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
  );
};

export default () => {
  return (
    <NativeBaseProvider>
        <Account />
    </NativeBaseProvider>
  )
}