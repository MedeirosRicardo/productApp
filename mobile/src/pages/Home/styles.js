import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 20
    },

    header: {
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    menuContainer: {
        height: '80%',
        justifyContent: 'space-between'
    }
});