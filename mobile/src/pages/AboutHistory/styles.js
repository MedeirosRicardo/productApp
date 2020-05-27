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

    bottomContainer: {
        height: '80%',
        alignItems: 'center'
    },

    titleContainer: {
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 15
    },

    title: {
        fontSize: 28,
        fontWeight: 'bold'
    },

    textContainer: {
        width: '85%'
    },
    
    text: {
        fontSize: 14,
        textAlign: 'justify',
        lineHeight: 20,
        paddingBottom: 10
    }
});