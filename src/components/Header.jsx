import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Header = ({isCart}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.appIconContainer}>
        {isCart ? (
          <Ionicons name={'chevron-back'} color="#E96E6E" size={24} />
        ) : (
          <Image
            source={require('../assets/appIcon.png')}
            style={styles.appIcon}
          />
        )}
      </TouchableOpacity>
      {isCart && <Text style={styles.myCart}>My Cart</Text>}

      <View style={styles.appIconContainer}>
        <Image source={require('../assets/account.png')} style={styles.dp} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 25,
    alignItems: 'center',
  },
  appIconContainer: {
    backgroundColor: '#ffffff',
    height: 50,
    width: 50,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appIcon: {
    height: 30,
    width: 30,
  },
  dp: {
    height: 28,
    width: 28,
  },
  myCart: {
    fontSize: 28,
    color: 'black',
  },
});
