import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDetails from './src/screens/ProductDetails';
import CartScreen from './src/screens/CartScreen';
import {CartContext, CartProvider} from './src/context/CartContext';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const MyhomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
};

const MyAuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default function App() {
  const {carts} = useContext(CartContext);
  return (
    <CartProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#E96E6E',
          }}>
          <Tab.Screen
            name="HomeStack"
            component={MyhomeStack}
            options={{
              tabBarIcon: ({size, color}) => {
                return <Entypo name={'home'} size={size} color={color} />;
              },
            }}
          />

          <Tab.Screen
            name="Cart"
            component={CartScreen}
            options={{
              tabBarIcon: ({size, color}) => {
                const {carts} = useContext(CartContext);

                return (
                  <View>
                    <MaterialCommunityIcons
                      name={'cart'}
                      size={size}
                      color={color}
                    />
                    <View
                      style={{
                        height: 14,
                        width: 14,
                        borderRadius: 7,
                        backgroundColor: color,
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        top: -8,
                        right: -5,
                      }}>
                      <Text
                        style={{
                          fontSize: 10,
                          color: 'white',
                          fontWeight: '500',
                        }}>
                        {carts?.length}
                      </Text>
                    </View>
                  </View>
                );
              },
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarIcon: ({size, color}) => {
                return <FontAwesome6 name={'user'} size={size} color={color} />;
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
