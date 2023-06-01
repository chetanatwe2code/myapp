import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  imageStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  boxStyle: {
    marginLeft: 5,
    marginRight: 5,
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
  errorText: {
    color: 'red',
    fontSize: 14,
    marginLeft: 20,
  },
});