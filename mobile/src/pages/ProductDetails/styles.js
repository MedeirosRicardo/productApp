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
    fontWeight: '500'
  },

  detailsItems: {
    top: 10,
    width: '75%'
  },

  item: {
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 10,
    width: '65%'
  },

  itemText: {
    fontSize: 18,
    textAlignVertical: 'center',
    marginRight: 10
  },

  unitItem: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  unitItemText: {
    fontSize: 18
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
  },

  description: {
    flex: 1,
    left: 32,
    top: 10,
    marginBottom: 20
  },

  descriptionTitle: {
    fontSize: 24,
    top: 15,
    marginBottom: 15,
    fontWeight: '500'
  },

  descriptionText: {
    fontSize: 14,
    lineHeight: 18,
    top: 10,
    width: '80%',
    textAlign: 'justify',
    paddingBottom: 10
  }

})