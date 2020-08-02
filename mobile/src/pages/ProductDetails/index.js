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
        <View style={styles.bottomContainer}>

          <View style={styles.headerLeft}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{product.title}</Text>
            </View>
            <View style={styles.typeContainer}>
              <Text style={styles.type}>{product.type}</Text>
            </View>

          </View>

          <View style={styles.headerRight}>
            <Image
              style={styles.logo}
              source={require('../../assets/logo.png')}
            />
          </View>

        </View>
      </View>
    </View>
  );
}