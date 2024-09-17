import React, {useContext} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../components/Header';
import CartCard from '../components/CartCard';
import {CartContext} from '../context/CartContext';

const CartScreen = () => {
  const {carts, removeFromCart} = useContext(CartContext);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <Header isCart={true} />
        </View>

        {carts.length > 0 ? (
          carts.map((product, index) => (
            <CartCard
              key={index}
              product={product}
              onRemove={() => removeFromCart(product.id)}
            />
          ))
        ) : (
          <Text style={styles.emptyText}>Your cart is empty.</Text>
        )}

        {carts.length > 0 && (
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Checkout</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  headerContainer: {
    marginBottom: 20,
  },
  container: {
    flex: 1,
  },
  emptyText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    color: '#757575',
  },
  button: {
    marginTop: 30,
    backgroundColor: '#E96E6E',
    padding: 18,
    marginHorizontal: 20,
    borderRadius: 16,
    marginBottom: 60,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#ffffff',
    textAlign: 'center',
  },
});
