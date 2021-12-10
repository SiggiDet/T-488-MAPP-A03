import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyStack from './views/cinema';
import CinemaDetail from './views/cinemadetail';
import Movies from './views/movies';
import Footer from './views/footer'
import { NavigationContainer} from '@react-navigation/native';

import DisplayUpcomingMovies from './UpcomingMoviesFolder/DisplayUpcomingMovies';

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>

    /*
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
