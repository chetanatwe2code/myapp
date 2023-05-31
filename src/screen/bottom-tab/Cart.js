import React from 'react';
import { Button, View } from 'react-native';
import { NativeBaseProvider, List, ListItem, Text, Box } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { AuthService } from '../../presenter/auth/AuthService';
import { CommonActions } from '@react-navigation/native';

const Cart = () => {
  const navigation = useNavigation();
  return (
    <View >
      

      <Button
        title="Home"
      />
    </View>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
        <Cart />
    </NativeBaseProvider>
  )
}