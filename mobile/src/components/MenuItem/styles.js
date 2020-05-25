import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    menuItem: {
        flex: 4,
        width: '100%',
        height: '100%',
    },
    
    image: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        right: 0
    },
    
    menuText: {
        color: '#fff',
        fontSize: 28,
        textTransform: 'uppercase',
        position: 'absolute',
        bottom: 20,
        right: 20
    }
});