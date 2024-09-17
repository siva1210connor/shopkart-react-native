import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../context/AuthContext';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const {logout} = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userToken');
      navigation.replace('Login'); // Navigate to Login screen after logout
    } catch (error) {
      Alert.alert('Logout Failed', 'There was an error logging you out.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>

      <View style={styles.profileInfo}>
        <Text style={styles.infoText}>Name: John Doe</Text>
        <Text style={styles.infoText}>Email: john.doe@example.com</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={logout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#9C9C9C',
  },
  profileInfo: {
    marginBottom: 30,
    alignItems: 'center',
  },
  infoText: {
    fontSize: 18,
    marginVertical: 5,
    color: '#9C9C9C',
  },
  button: {
    backgroundColor: '#E96E6E',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
