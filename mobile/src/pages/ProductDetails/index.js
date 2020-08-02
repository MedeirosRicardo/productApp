import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';


export default function ProductDetails() {
  const navigation = useNavigation();
  const route = useRoute();

  const product = route.params.product;

  function navigateBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.leftArrow}
          onPress={navigateBack}
        >
          <Feather name="arrow-left" size={28} color="#000000" />
        </TouchableOpacity>

        <View style={styles.bottomHeader}>
          <View style={styles.headerLeft}>
            <Text style={styles.productTitle}>{product.title}</Text>
            <View style={styles.line}></View>
            <Text style={styles.productType}>{product.type}</Text>
          </View>

          <View style={styles.headerRight}>
            <Image
              style={styles.logo}
              source={require('../../assets/logo.png')}
            />
          </View>
        </View>       
      </View>

      <View style={styles.details}>
        <Text style={styles.detailsTitle}>Detalhes</Text>
        <View style={styles.detailsItems}>
            <Text>Test 1</Text>
            <Text>Test 1</Text>
        </View>
      </View>

    </View>
  );
}