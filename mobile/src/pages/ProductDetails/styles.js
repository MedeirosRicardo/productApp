import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 20
  },

  header: {
    height: 160,
        alignItems: 'center',
        justifyContent: 'space-around'
  },

  leftArrow: {
    position: 'absolute',
    top: 35,
    left: 20
  },

  logo: {
    width: 82,
    height: 77
  },

})