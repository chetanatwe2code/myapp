import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/home/Home';
import AddProduct from '../screen/product/add-product/AddProduct';
import Account from '../screen/user/Account';

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
       <Tab.Screen name="Add-Product" component={AddProduct} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};