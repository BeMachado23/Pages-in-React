import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, Text, Button, View, Image } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/Netflix.png')}
        style={styles.image}
        resizeMode="contain"
        accessibilityLabel="Netflix"
      />
      <LoginScreen />
      <StatusBar style="auto" />
    </View>
  );
}

function LoginScreen() {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.loginContainer}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setemail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Sing In"
          onPress={() => console.log('Usuário logado')}
          color="#9C2828"
          accessibilityLabel="Botão de Login"
        />
      </View>
      <Text style={styles.paragraph}>
        Forgot your password?
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9C2828',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 80,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 40,
  },
  loginContainer: {
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5,
    width: 280,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    width: 280,
    marginTop: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff',
  },
  paragraph: {
    margin: 26,
    marginTop: 400,
    fontSize: 20,
    color: "#fff",
    fontWeight: 'bold',
    textAlign: 'center',
  },
});