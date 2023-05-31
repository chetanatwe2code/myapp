import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/bottom-tab/Home';
import Cart from '../screen/bottom-tab/Cart';
import Account from '../screen/bottom-tab/Account';
import { ResponsiveUtil } from '../util/ResponsiveUtil';
import { StyleSheet } from 'react-native';


const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator
    tabBarOptions={{
      tabBarStyle: { width: 200 }, // Set the desired width here
    }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    height: ResponsiveUtil.height(60),
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  menuContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingLeft: ResponsiveUtil.width(23),
    paddingRight: ResponsiveUtil.width(23),
    height: ResponsiveUtil.height(60),
    alignItems: 'center',
  },
  menuItem: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    height: ResponsiveUtil.height(40),
    flexDirection: 'row',
    borderRadius: ResponsiveUtil.width(30),
    paddingLeft: ResponsiveUtil.width(8),
    paddingRight: ResponsiveUtil.width(8),
  },
  menuIcon: {
    width: ResponsiveUtil.width(24),
    height: ResponsiveUtil.height(24),
  },
  cartContainer: {
    height: ResponsiveUtil.height(56),
    width: ResponsiveUtil.width(116),
    position: 'absolute',
    top: ResponsiveUtil.height(0),
    right: 0,
  },
});