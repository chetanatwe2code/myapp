import React from 'react';
import { Button, View } from 'react-native';
import { NativeBaseProvider, List, ListItem, Text, Box } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

const About = () => {
  const route = useRoute();
  const { data } = route.params;
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

      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
        <About />
    </NativeBaseProvider>
  )
}