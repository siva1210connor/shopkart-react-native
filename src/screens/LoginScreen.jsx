import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../context/AuthContext';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login} = useContext(AuthContext);

  // const handleLogin = () => {
  //   if (email && password) {
  //     login(email, password); // Pass email and password to login function
  //   } else {
  //     Alert.alert('Error', 'Please enter email and password.');
  //   }
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
        autoCapitalize="none"
      />

      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text
        style={{
          fontSize: 20,
          fontWeight: '400',
          textAlign: 'center',
          marginVertical: 20,
        }}>
        If You are New, Goto
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={{fontSize: 20, fontWeight: '700', color: '#E96E6E'}}>
            {'  '}SignUp
          </Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

export default LoginScreen;

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
  input: {
    backgroundColor: '#F1F1F1',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 18,
    color: '#9C9C9C',
  },
  button: {
    marginTop: 10,
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
