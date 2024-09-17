import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const ProductCard = ({product}) => {
  const navigation = useNavigation();
  if (!product || !product.image) {
    return null;
  }

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('ProductDetails', {product});
      }}
      style={styles.container}>
      <Image source={{uri: product.image}} style={styles.coverImg} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </TouchableOpacity>
  );
};
export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  coverImg: {
    height: 200,
    width: '100%',
    borderRadius: 10,
    marginBottom: 15,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#9C9C9C',
  },
  price: {
    fontSize: 18,
    color: '#9C9C9C',
    fontWeight: '700',
  },
});
