import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 20
  },

  header: {
    height: 200
  },

  bottomHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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

  headerLeft: {
    width: '65%',
    left: 32,
    top: 80
  },

  headerRight: {
    width: '35%',
    top: 55
  },

  productTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },

  productType: {
    fontSize: 18,
    top: 32
  },

  line: {
    borderWidth: 2,
    borderColor: '#000000',
    width: 86,
    top: 16
  },

  details: {
    left: 32
  },

  detailsTitle: {
    fontSize: 24,
    fontWeight: '600'
  },

  detailsItems: {
    top: 10,
    width: '75%'
  },

  item: {
    flexDirection: 'row',
    margin: 10
  },

  itemText: {
    fontSize: 18,
    textAlignVertical: 'center',
    marginRight: 10
  },

  circle: {
    width: 39,
    height: 39,
    borderRadius: 50,
    borderColor: 'black',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20
  }

})