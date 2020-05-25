import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default class MenuItem extends React.Component {
    render() {
        return (
            <TouchableOpacity style={styles.menuItem}>
                <Image
                    source={this.props.itemImage}
                    style={styles.image}
                />
                <Text style={styles.menuText}>{this.props.itemText}</Text>
            </TouchableOpacity>
        );
    }
}