import { BottomTabNavigator } from './BottomTabNavigator';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();


  export default () => {
    return (
        <Stack.Navigator
          initialRouteName="BaseScreen"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
        </Stack.Navigator>
      );
  };