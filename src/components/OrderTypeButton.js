import React from "react";
import { View, Text} from "native-base";
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';


export default class OrderTypeButton extends React.Component { 
    constructor(props) {
        super(props);
      }

    render() { 
      return (
        <View style={styles.boxStyle}> 
        <Text style={{color: 'Black'}}>{this.props.title}</Text>
        <Text style={{color: 'Black',fontWeight: 'bold'}}>{this.props.count}</Text>
        </View> 
      );
    }
  }

  OrderTypeButton.PropTypes = {
     count: PropTypes.string.isRequired, 
     title: PropTypes.string.isRequired, 
     onPress: PropTypes.func.isRequired
 };


  export const styles = StyleSheet.create({
    boxStyle: {
      marginLeft: 5,
      marginRight: 5,
      padding:10,
      backgroundColor: '#fff',
      flex: 1,
      alignItems:"center",
      flexDirection: 'column',
    },
    toRight: {
      alignItems: 'flex-end',
      marginRight: 20,
    },
    space: {
      height: 20, // Add desired space height
    },
  });