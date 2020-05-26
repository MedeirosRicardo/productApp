import React from 'react';
import { View, Image } from 'react-native';

import styles from './styles';
import MenuItem from '../../components/MenuItem';

export default function Menu() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../assets/logo.png')} />
            </View>
            <View style={styles.menuContainer }>
                <MenuItem
                    itemImage={require('../../assets/menu1.png')}
                    itemText={'CERVEJAS'}
                    itemRoute={'Cervejas'}
                />
                <MenuItem
                    itemImage={require('../../assets/menu2.png')}
                    itemText={'HISTÓRIA'}
                    itemRoute={'Cervejas'}
                />
                <MenuItem
                    itemImage={require('../../assets/menu3.png')}
                    itemText={'FÁBRICA'}
                    itemRoute={'Cervejas'}
                />
                <MenuItem
                    itemImage={require('../../assets/menu4.png')}
                    itemText={'LOJA'}
                    itemRoute={'Cervejas'}
                />
            </View>
        </View>
    )
}