import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://d35aaqx5ub95lt.cloudfront.net/images/f2a2e608c854822ad2563a09595e7827.png ' }}
        style={styles.image}
      />
      <Text style={styles.text}>Learn a language for free.{'\n'}Forever</Text>
      <TouchableOpacity style={styles.button1}>
        <Text style={styles.buttonText1}>Sign up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2}>
        <Text style={styles.buttonText2}>Log in</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  text: {
    fontFamily: 'Duolingo-Sans-Regular',
    fontSize: 24,
    color: "#868a80" 
  },
  button1: {
    backgroundColor: '#78c802',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
    borderRadius: 5,
    marginVertical: 10,
    borderWidth: 2,
    borderBottomWidth: 6,
    borderColor: "#b2b3b1",
    width: 250,
  },
  buttonText1: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  button2: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
    borderWidth: 2,
    borderBottomWidth: 6,
    borderColor: "#b2b3b1",
    width: 250,
  },
  buttonText2: {
    color: '#78c802',
    fontSize: 18,
    fontWeight: 'bold',
  },
});