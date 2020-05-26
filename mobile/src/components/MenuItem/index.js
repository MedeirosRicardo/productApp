import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function MenuItem(props) {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate(props.itemRoute)}
        >
            <Image
                source={props.itemImage}
                style={styles.image}
            />
            <Text style={styles.menuText}>{props.itemText}</Text>
        </TouchableOpacity>
    );
}
