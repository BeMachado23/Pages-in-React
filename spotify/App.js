import * as React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import Constants from 'expo-constants';


// You can import from local files


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.saudacao}>
        Good morning 
      </Text>
    </View>

      <View style={styles.filtros}> 
      <Text style={styles.filtrar1}>
      Music
      </Text> 
      
      <Text style={styles.filtrar2}>
      Podcasts & Shows
      </Text>
      </View>
      
      <View style={styles.playlists}>
      <Image style = {styles.abcde} source = {require('./assets/abcde.png')}/>
      <Text style={styles.playlist1}>
      ABCDEF
      </Text>
      
      <Image style = {styles.likedsongs} source = {require('./assets/likedmusics.png')}/>
      <Text style={styles.playlist2}>
      Liked Songs
      </Text>  

      <Image style = {styles.rock} source = {require('./assets/rock.png')}/>
      <Text style={styles.playlist3}>
      Rock
      </Text>

      <Image style = {styles.caf} source = {require('./assets/caf.png')}/>
      <Text style={styles.playlist4}>
      Cigarettes After Sex
      </Text>

      <Image style = {styles.gym} source = {require('./assets/Gym.png')}/>
      <Text style={styles.playlist5}>
      Gym Sad
      </Text>

      <Image style = {styles.blend1} source = {require('./assets/blend.png')}/>
      <Text style={styles.playlist6}>
      ChristianCsilveira + Enzo + blonde...
      </Text>
      </View>

      <Text style={styles.more}>
      More of what you like
      </Text>

      <View style={styles.More}>
      <Text style={styles.topgamingtracks}>
      Kordhell, Freddie Dredd, The Weekend, Drake, 21... 
      </Text>

      <Text style={styles.phonk}>
      Kordhell, Oliver Tree, The Notorius B.I.G, INTER...
      </Text>
      </View>
      
      <Text style={styles.madeforus}>
      Made For Us
      </Text>
      
      <Text style={styles.made1}>
      Create a blend
      </Text>
      
      <Text style={styles.madesub1}>
      A playlist for you and a friend.
      </Text>
      
      <Text style={styles.made2}>
      blonded + Bernardo
      </Text>

      <Text style={styles.madesub2}>
      Playlist - A blend of music for Bernardo and blond...
      </Text>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212'
  },
 abcde:{
   width: 50,
   height: 50,
 },
 playlists:{
   width: 50,
   hight: 50,
 }
});
