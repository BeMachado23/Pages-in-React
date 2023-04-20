import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  const [text, setText] = React.useState('');

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://cdn.freebiesupply.com/images/large/2x/google-logo-transparent.png' }}
        style={styles.image}
      />
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Search or type URL"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  image: {
    width: 200,
    height: 62.5,
    alignSelf: 'center',
    marginTop: -200,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

