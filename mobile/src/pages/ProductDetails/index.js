import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

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

          <View style={styles.item}>
            <View style={styles.circle}>
              <Feather name="percent" size={22} />
            </View>
            <Text style={styles.itemText}>ABV:</Text>
            <Text style={styles.itemText}>{product.abv}%</Text>
          </View>
          <View style={styles.item}>
            <View style={styles.circle}>
              <MaterialCommunityIcons name="flask-outline" size={35, 25} />
            </View>
            <Text style={styles.itemText}>IBU's:</Text>
            <Text style={styles.itemText}>{product.ibu}</Text>
          </View>
          <View style={styles.item}>
            <View style={styles.circle}>
              <Entypo name="flow-tree" size={20} />
            </View>
            <Text style={styles.itemText}>Família:</Text>
            <Text style={styles.itemText}>{product.family}</Text>
          </View>

          <View style={styles.item}>
            <View style={styles.circle}>
              <MaterialCommunityIcons name="flower-outline" size={35, 25} />
            </View>
            <View>
              <Text style={styles.itemText}>Maltes:</Text>
            </View>
            <View style={styles.unitItem}>
              {product.malts.map((malt, index) => (
                <Text style={styles.unitItemText} key={index}>{malt}{index === product.malts.length -1 ? '' : ', '}</Text>
              ))}
            </View>
          </View>

          <View style={styles.item}>
            <View style={styles.circle}>
              <MaterialCommunityIcons name="hops" size={35, 25} />
            </View>  
            <View>
              <Text style={styles.itemText}>Lúpulos:</Text>
            </View>
            <View style={styles.unitItem}>
              {product.hops.map((hop, index) => (
                <Text style={styles.unitItemText} key={index}>{hop}{index === product.hops.length - 1 ? '' : ', '}</Text>
              ))}
            </View>
          </View>

        </View>
      </View>

      <View style={styles.description}>
        <Text style={styles.descriptionTitle}>Descrição</Text>
        <ScrollView>
          <Text style={styles.descriptionText}>{product.description}</Text>
        </ScrollView>
      </View>


    </View>
  );
}