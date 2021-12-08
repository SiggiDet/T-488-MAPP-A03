import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
<<<<<<< HEAD
import CinemaList from './views/cinema';
import CinemaDetail from './views/cinemadetail';
import Movies from './views/movies';
import Footer from './views/footer'

=======
import DisplayUpcomingMovies from './UpcomingMoviesFolder/DisplayUpcomingMovies';
>>>>>>> f4639cd9ac3d3fbeae242b912c72aaa7c7476d3d

export default function App() {
  return (
    <View style={styles.container}>
<<<<<<< HEAD

      <StatusBar style="auto" />
=======
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
      <DisplayUpcomingMovies/>
>>>>>>> f4639cd9ac3d3fbeae242b912c72aaa7c7476d3d
    </View>
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
