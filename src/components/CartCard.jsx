import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const CartCard = ({product, onRemove}) => {
  return (
    <View style={styles.container}>
      {/* Product Image */}
      <Image source={{uri: product.image}} style={styles.productImage} />

      {/* Product details */}
      <View style={styles.cardContent}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </View>

      {/* Remove Icon */}
      <TouchableOpacity onPress={onRemove} style={styles.iconContainer}>
        <FontAwesome6 name="trash" color="#E96E6E" size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 15,
    elevation: 2, // Adds shadow for Android
    shadowColor: '#000', // Adds shadow for iOS
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
  },
  productImage: {
    height: 100,
    width: 60,
    borderRadius: 8,
    resizeMode: 'contain',
  },
  cardContent: {
    flex: 1,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444444',
    marginBottom: 5,
  },
  price: {
    fontSize: 18,
    color: '#797979',
  },
  iconContainer: {
    padding: 10,
  },
  
});
