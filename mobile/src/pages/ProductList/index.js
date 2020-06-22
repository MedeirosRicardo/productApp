import React, { useEffect, useState } from 'react';
import { View, Image, Text, FlatList, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function ProductList() {

    const navigation = useNavigation();

    const [products, setProducts] = useState([]);

    function navigateBack() {
        navigation.goBack();
    }

    useEffect(() => {
        fetch('https://arnin-test.herokuapp.com/products')
            .then(response => response.json())
            .then(json => setProducts(json))
            .catch(error => console.error(error))
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../assets/logo.png')} />
                <TouchableOpacity
                    style={styles.leftArrow}
                    onPress={navigateBack}
                >
                    <Feather name="arrow-left" size={28} color="#000000" />
                </TouchableOpacity>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>CERVEJAS</Text>
                </View>
            </View>

            <FlatList
                style={styles.bottomContainer}
                data={products}
                keyExtractor={product => product.id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: product }) => (
                    <View style={styles.productContainer}>
                        <View style={styles.productLeft}>
                            <View style={{ ...styles.productLeftSquare, backgroundColor: product.color }}></View>
                            <Image
                                style={styles.productLeftImage}
                                source={{ uri: `https://arnin-test.herokuapp.com/images/${product.imageBottle}` }}
                            />
                        </View>
                        <View style={styles.productRight}>
                            <Text style={styles.productTitle}>{product.title}</Text>
                            <Text style={styles.productText}>{product.type}</Text>
                            <TouchableOpacity style={styles.productButton}>
                                <Text style={styles.productButtonText}>SAIBA MAIS</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />

        </View>

    );
}