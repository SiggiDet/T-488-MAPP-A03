import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Footer from './views/footer'
import { NavigationContainer} from '@react-navigation/native';
import styles from './Styling/styles'

export default function App() {
  return (
    
    <NavigationContainer>
      <Footer />
    </NavigationContainer>
    

    /* Test code
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Movies/>
      <DisplayUpcomingMovies/>
      <CinemaList/>
      <CinemaDetail/>
    </View>
    */
    
    
  );
}
