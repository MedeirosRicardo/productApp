import React, { useEffect, useState } from 'react';
import { View, Image, Text, FlatList, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function ProductList() {

    const navigation = useNavigation();

    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    function navigateBack() {
        navigation.goBack();
    }

    function navigateToDetails(product) {
        navigation.navigate('ProductDetails', { product });
    }

    async function loadProducts() {
        if (loading) {
            return;
        }

        setLoading(true);

        try {
            const data = await fetch(`https://arnin-test.herokuapp.com/products?page=${page}`);
            const productList = await data.json();

            setProducts([...products, ...productList]);
            setPage(page + 1);
            setLoading(false)
        } catch {
            console.error(error);
        }
    }

    useEffect(() => {
        loadProducts();
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
                keyExtractor={product => product._id}
                showsVerticalScrollIndicator={false}
                onEndReached={loadProducts}
                onEndReachedThreshold={0.5}
                renderItem={({ item: product }) => (
                    <View style={styles.productContainer}>
                        <View style={styles.productLeft}>
                            <View style={{ ...styles.productLeftSquare, backgroundColor: product.color }}></View>
                            <Image
                                style={styles.productLeftImage}
                                source={{ uri: `https://arnin-test.herokuapp.com/images/${product.imageBottle}` }}
                                fadeDuration={0}
                            />
                        </View>
                        <View style={styles.productRight}>
                            <Text style={styles.productTitle}>{product.title}</Text>
                            <View style={styles.line}></View>
                            <Text style={styles.productText}>{product.type}</Text>
                            <TouchableOpacity
                                style={styles.productButton}
                                onPress={() => navigateToDetails(product)}
                            >
                                <Text style={styles.productButtonText}>SAIBA MAIS</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />

        </View>

    );
}