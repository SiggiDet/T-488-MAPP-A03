import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, SafeAreaView, Linking, Image, Button } from 'react-native';

import styles from '../Styling/styles';

const user_data = {
  username: 'kypslloyd',
  password: 'kypler55'
}

// List that displays all cinemas
const CinemaList = ({navigation}) => {
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2MWFlMzc5ZTFiNzA2ZjEzODI4MGNlOTMiLCJnbG9iYWxhZG1pbiI6ZmFsc2UsImFkbWluIjpmYWxzZSwiYWN0aXZlIjp0cnVlLCJmdWxsbmFtZSI6Ikt5cGxlciBMbG95ZCIsImVtYWlsIjoia3lwbGVybGxveWQwMEBnbWFpbC5jb20iLCJ1c2VybmFtZSI6Imt5cHNsbG95ZCIsInBhc3N3b3JkIjoiJDJhJDA4JGFtVkNEOXBFc1N2Q0ZJdVpLT1QycXVaMThxRnhRSTB4R0NlYVdQZkc1SEtxejdkMkFIWVdTIiwiZG9tYWluIjoibG9jYWxob3N0IiwibWVzc2FnZSI6InZlcmtlZm5pIMOtIHNrw7NsYW51bSIsImlhdCI6MTYzOTE3MDU1NywiZXhwIjoxNjM5MjU2OTU3fQ.Uc2WGHLkjWbMCCOcBQHw18HxC4sHeOW5VZLNzi456AQ"
  //const [token, setToken] = useState('')
  const [allCinemas, setCinemaList] = useState([])
  const [allMovies, setMovieList] = useState([])

  /*
  // Get's access token
  useEffect(() => {
    (async () => {
      await fetch('https://api.kvikmyndir.is/authenticate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user_data)
      })
      .then((response) => response.json())
      .then((responseData) => {
          setToken(responseData.token);
      });
    })();
  }, []);
  */

  if (token != null || token != ''){
    // Get's all cinemas
    useEffect(() => {
      (async () => {
        await fetch('https://api.kvikmyndir.is/theaters', {
          method: 'GET',
          headers: {
            'x-access-token' : token,
            'Content-Type': 'application/json'
          }
        })
        .then( (response) => response.json())
        .then( (responseData) => {
          setCinemaList(responseData);
        });
      })();
    }, []);

    // Get's all movies
    useEffect(() => {
      (async () => {
        await fetch('https://api.kvikmyndir.is/movies', {
          method: 'GET',
          headers: {
            'x-access-token' : token,
            'Content-Type': 'application/json'
          }
        })
        .then( (response) => response.json())
        .then( (responseData) => {
          setMovieList(responseData);
        });
      })();
    }, []);
  }

  const sortedCinemas = allCinemas.sort(function (one, another) {return one.name.localeCompare(another.name);});

  return (
      <View>
          <ScrollView>
            <View style={styles.container}>
              {allCinemas.map(
                Cinema => {
                  return(
                    <TouchableOpacity key={Cinema.id} onPress={() => navigation.navigate('View Cinema', {data: Cinema, movies: allMovies})}>
                      <View style={styles.nameContainer}>
                        <View style={styles.row}>
                          <Text style = {styles.nameTxt}>{Cinema.name}</Text>
                          <Text style = {styles.urlTxt}>{Cinema.website}</Text>
                        </View> 
                      </View>
                    </TouchableOpacity>
                  )   
                }
              )}
            </View>
          </ScrollView>
      </View>
      )
}

const CinemaDetail = ( {route, navigation} ) => {
  trimedProps = JSON.parse(JSON.stringify(route.params.data).replace(/\\t/g, '').replace(/<b>/g,' ').replace(/<br>/g,''))
  moviesList = route.params.movies

  let moviesForCinema = []
  moviesList.forEach(element => {
    element.showtimes.map(
      oneMovieShowtimes => {
        if (oneMovieShowtimes.cinema.id == trimedProps.id){
          moviesForCinema.push(element)
          return
        }
      }
    )
  });

  return (
    <ScrollView>
      <View key={trimedProps.id} style={styles.container}> 
            <View style={styles.container}>
              <SafeAreaView>
                <Text style={styles.smallerheadline}>{trimedProps.name}</Text>
                <View>
                  <Text style = {styles.infoTxt}>Heimilisfang: {trimedProps.address}, {trimedProps.city}</Text>
                  <Text style = {styles.descriptionTxt}>{trimedProps.description}</Text>
                  <Text style = {styles.infoTxt}>Vefsíða: {trimedProps.website}</Text>
                  <Text style = {styles.infoTxt}>Sími: {trimedProps.phone}</Text>
                  <Text style = {styles.smallerheadline}>Í sýningu</Text>
                  {moviesForCinema.map(
                    movie => {
                      return(
                        <TouchableOpacity key={movie._id} style={styles.movieContainer} onPress={() => navigation.navigate('View Movie', {data: movie, movieId: trimedProps.id})}>
                          <Image source={{ uri: movie.poster }} style={styles.pic} />
                          <Text>{movie.title}</Text>
                          <Text>{movie.year}</Text>
                          {movie.genres.map(
                            genre => {
                              return(
                                <View key={genre["ID"]}>
                                  <Text style={styles.genreTxt}>{genre.Name}</Text>
                                </View>
                              )
                            }
                          )}
                        </TouchableOpacity>
                      )
                    }
                  )}
                </View>
              </SafeAreaView>
            </View>
      </View>
    </ScrollView>
  )
}

const MovieDetail = ( props ) => {

  let timeInCinema = []
  //console.log(props.route.params.movieId)
  props.route.params.data.showtimes.map(
    showtime => {
      if (showtime.cinema.id == props.route.params.movieId)
        showtime.schedule.forEach(element => {
          timeInCinema.push(element)
        })
    }
  )
  return (
    <ScrollView>
      <View key={props.route.params.data.id} style={styles.container}> 
            <View style={styles.container}>
              <SafeAreaView>
                <Image source={{ uri: props.route.params.data.poster }} style={styles.pic} />
                <Text style={styles.viewSmallerheadline}>{props.route.params.data.title} ({props.route.params.data.year})</Text>
                <View>
                  <Text style = {styles.plotInfoTxt}>{props.route.params.data.plot}</Text>
                  <Text style = {styles.descriptionTxt}>{props.route.params.data.durationMinutes} minutes</Text>
                  {props.route.params.data.genres.map(
                    genre => {
                      return(
                        <View key={genre["ID"]}>
                          <Text style={styles.genreTxt}>{genre.Name}</Text>
                        </View>
                      )
                    }
                  )}
                  
                  <View style={styles.ticketContainer}>
                    <Text style={styles.ticketHeadline}>Kaupa Miða</Text>
                    {timeInCinema.map(
                      schedule => {
                        return(
                          <View key={schedule["purchase_url"]}>
                            <Button title={schedule.time} style={styles.timeTxt} onPress = {() => Linking.openURL(schedule.purchase_url)} />
                          </View>
                        )
                      }
                    )}
                  </View>
                </View>
              </SafeAreaView>
            </View>
      </View>
    </ScrollView>
  )
}

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="All Cinemas" component={CinemaList} />
      <Stack.Screen name="View Cinema" component={CinemaDetail} />
      <Stack.Screen name="View Movie" component={MovieDetail} />
    </Stack.Navigator>
  );
}

export default MyStack;


