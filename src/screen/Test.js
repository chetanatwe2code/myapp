import React from 'react';
import { Button, TextInput, View , Alert} from 'react-native';
import { NativeBaseProvider, Input, ListItem, Text, Box } from 'native-base';
import useValidation from '../util/Validator';

// Define your validation functions
const validators = {
    name: [(value) => (value.trim() ? null : 'Name is required')],
    email: [
      (value) => (value.trim() ? null : 'Email is required'),
      (value) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? null : 'Invalid email format',
    ],
    phone: [
      (value) => (value.trim() ? null : 'Phone is required'),
      (value) =>
        /^[0-9]{10}$/.test(value) ? null : 'Invalid phone number format',
    ],
  };

const Test = () => {

    const { state, onInputChange, errors, validate } = useValidation(
        { name: '', email: '', phone: '' },
        validators
      );
    
      const handleSubmit = () => {
        const isValid = validate();
    
        if (isValid) {
          // Perform your desired actions
          console.log('Form is valid:', state);
        } 
      };
    
      return (
        <View>
          <TextInput
            placeholder="Name"
            value={state.name}
            onChangeText={(value) => onInputChange('name', value)}
          />
          {errors.name && <Text>{errors.name[0]}</Text>}
    
          <TextInput
            placeholder="Email"
            value={state.email}
            onChangeText={(value) => onInputChange('email', value)}
          />
          {errors.email && <Text>{errors.email[0]}</Text>}
    
          <TextInput
            placeholder="Phone"
            value={state.phone}
            onChangeText={(value) => onInputChange('phone', value)}
          />
          {errors.phone && <Text>{errors.phone[0]}</Text>}
    
          <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};

export default () => {
    return (
        <NativeBaseProvider>
            <Test />
        </NativeBaseProvider>
    )
}