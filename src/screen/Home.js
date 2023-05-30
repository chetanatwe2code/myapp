import React, { useState, useEffect } from 'react';
import { Button, View } from 'react-native';
import { NativeBaseProvider, List, ListItem, Text, Box } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getLoginData = async () => {
try {
  const token = await AsyncStorage.getItem('token');
  const userId = await AsyncStorage.getItem('userId');
  // You can perform any additional processing or validation here
  return { token, userId };
} catch (error) {
  console.error('Error retrieving login data:', error);
  return null;
 }
}


const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const loginData = await getLoginData();
      if (loginData) {
        // Use the retrieved login data
        const { token, userId } = loginData;
        console.log('Token:', token);
        console.log('User ID:', userId);
      }
    };
    fetchData();
  }, []);

  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Box>
        {data.map((item) => (
          <Box key={item.id} py={2}>
            <Text>{item.title}</Text>
          </Box>
        ))}
      </Box>

      <Button title="Go to About" onPress={() => navigation.navigate('About', { data })} />
      
    </View>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <Home />
    </NativeBaseProvider>
  );
};