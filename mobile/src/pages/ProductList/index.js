import React from 'react';
import { View, Image, Text, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function ProductList() {

    const navigation = useNavigation();

    function navigateBack() {
        navigation.goBack();
    }

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
            <ScrollView style={styles.bottomContainer} >

            <View style={styles.productContainer}>
                    <View style={styles.productLeft}>
                        <View style={{...styles.productLeftSquare, backgroundColor: '#27AE60'}}></View>
                        <Image
                            style={styles.productLeftImage}
                            source={require('../../assets/american-lager-355.png')}
                        />
                    </View>
                    <View style={styles.productRight}>
                        <Text style={styles.productTitle}>American Lager</Text>
                        <Text style={styles.productText}>American Premium Lager</Text>
                        <TouchableOpacity style={styles.productButton}>
                            <Text style={styles.productButtonText}>SAIBA MAIS</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.productContainer}>
                    <View style={styles.productLeft}>
                        <View style={{...styles.productLeftSquare, backgroundColor: '#a3a3a3'}}></View>
                        <Image
                            style={styles.productLeftImage}
                            source={require('../../assets/american-lager-355.png')}
                        />
                    </View>
                    <View style={styles.productRight}>
                        <Text style={styles.productTitle}>American Lager</Text>
                        <Text style={styles.productText}>American Premium Lager</Text>
                        <TouchableOpacity style={styles.productButton}>
                            <Text style={styles.productButtonText}>SAIBA MAIS</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.productContainer}>
                    <View style={styles.productLeft}>
                        <View style={{...styles.productLeftSquare, backgroundColor: '#f5a460'}}></View>
                        <Image
                            style={styles.productLeftImage}
                            source={require('../../assets/american-lager-355.png')}
                        />
                    </View>
                    <View style={styles.productRight}>
                        <Text style={styles.productTitle}>American Lager</Text>
                        <Text style={styles.productText}>American Premium Lager</Text>
                        <TouchableOpacity style={styles.productButton}>
                            <Text style={styles.productButtonText}>SAIBA MAIS</Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </ScrollView>

        </View>

    );
}