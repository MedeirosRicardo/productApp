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

    bottomContainer: {
        marginTop: 20
    },

    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 5,
        paddingTop: 5
    },

    title: {
        fontSize: 28,
        fontWeight: 'bold'
    },

    leftArrow: {
        position: 'absolute',
        top: 35,
        left: 20
    },

    productContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 40
    },

    productLeft: {
        width: '25%',
        marginTop: 15

    },

    productLeftSquare: {
        height: 225,
        width: 70,
        position: 'absolute',
        bottom: 30
    },

    productLeftImage: {
        width: 254,
        height: 238,
        marginLeft: -57
    },

    productRight: {
        width: '65%'
    },

    productTitle: {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#000000',
        lineHeight: 28,
        paddingBottom: 30
    },

    productText: {
        fontSize: 18,
        color: '#000000',
        paddingBottom: 70
    },

    productButton: {
        width: 150,
        height: 60,
        borderStyle: 'solid',
        borderColor: '#000000',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        left: 25
    },

    productButtonText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#000000',
    }
});