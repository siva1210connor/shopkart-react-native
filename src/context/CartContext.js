import AsyncStorage from '@react-native-async-storage/async-storage';
import {createContext, useEffect, useState} from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    loadCartItems();
  }, []);

  // Function to load cart items from AsyncStorage
  const loadCartItems = async () => {
    try {
      let storedCarts = await AsyncStorage.getItem('carts');
      storedCarts = storedCarts ? JSON.parse(storedCarts) : [];
      setCarts(storedCarts);
    } catch (error) {
      console.error('Error loading cart items from storage:', error);
    }
  };
  // Function to add an item to the cart and save it in AsyncStorage
  const addToCart = async item => {
    const itemExist = carts.findIndex(cart => cart.id === item.id);
    if (itemExist === -1) {
      const newCartItems = [...carts, item];
      try {
        await AsyncStorage.setItem('carts', JSON.stringify(newCartItems));
        setCarts(newCartItems);
      } catch (error) {
        console.error('Error saving cart item:', error);
      }
    }
  };
  // Function to remove an item from the cart and update AsyncStorage
  const removeFromCart = async itemId => {
    const newCartItems = carts.filter(cart => cart.id !== itemId);
    try {
      await AsyncStorage.setItem('carts', JSON.stringify(newCartItems));
      setCarts(newCartItems);
    } catch (error) {
      console.error('Error removing cart item:', error);
    }
  };

  const value = {
    carts,
    addToCart,
    removeFromCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
