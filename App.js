import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CinemaList from './views/cinema';
import CinemaDetail from './views/cinemadetail';
import Movies from './views/movies';
import Footer from './views/footer'

import DisplayUpcomingMovies from './UpcomingMoviesFolder/DisplayUpcomingMovies';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
      {/* <Movies/> */}
      {/* <DisplayUpcomingMovies/> */}
      {/* <CinemaList/> */}
      {/* <CinemaDetail/> */}
      <Footer/>
      {/* <StatusBar style="auto" /> */}
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
      {/* <Movies/> */}
      {/* <DisplayUpcomingMovies/> */}
    </NavigationContainer>
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
