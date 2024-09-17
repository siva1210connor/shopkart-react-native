import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import Header from '../components/Header';
import {CartContext} from '../context/CartContext';

const ProductDetails = () => {
  const navigation = useNavigation();
  const {addToCart} = useContext(CartContext);
  const route = useRoute();
  const {product} = route.params;

  if (!product) {
    return <Text>No product details available.</Text>;
  }

  const handleAddToCart = item => {
    addToCart(item);
    navigation.navigate('Cart');
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header isCart={true} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        style={styles.detailsContainer}
        showsVerticalScrollIndicator={false}>
        <Image source={{uri: product.image}} style={styles.coverImg} />
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.category}>Ratings : {product.rating.rate}</Text>
          <Text style={styles.category}>Reviews : {product.rating.count}</Text>
        </View>
        <Text style={styles.category}>Category : {product.category}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleAddToCart(product)}>
          <Text style={styles.buttonText}>Add to cart</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  headerContainer: {
    marginBottom: 10,
  },
  coverImg: {
    height: 300,
    width: '100%',
    borderRadius: 10,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  detailsContainer: {
    padding: 10,
    height: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 30,
    fontWeight: '700',
    color: '#444',
    marginBottom: 10,
  },
  category: {
    marginVertical: 10,
    fontSize: 20,
    fontWeight: '700',
    color: '#444',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    color: '#666',
  },
  scrollViewContent: {
    paddingBottom: 100,
  },
  button: {
    marginTop: 30,
    backgroundColor: '#E96E6E',
    padding: 20,
    borderRadius: 16,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#ffffff',
    textAlign: 'center',
  },
});
