import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, SafeAreaView, Linking} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import CinemaDetail from './cinemadetail';

const customData = require('../DummyData/Cinema');
const Cinemas = customData.Cinema.sort(function (one, another) {return one.Name.localeCompare(another.Name);});


const user_data = {
  username: 'kypslloyd',
  password: 'kypler55'
}

// List that displays all cinemas
const CinemaList = ({navigation}) => {

  //const [token, setToken] = useState('')
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2MWFlMzc5ZTFiNzA2ZjEzODI4MGNlOTMiLCJnbG9iYWxhZG1pbiI6ZmFsc2UsImFkbWluIjpmYWxzZSwiYWN0aXZlIjp0cnVlLCJmdWxsbmFtZSI6Ikt5cGxlciBMbG95ZCIsImVtYWlsIjoia3lwbGVybGxveWQwMEBnbWFpbC5jb20iLCJ1c2VybmFtZSI6Imt5cHNsbG95ZCIsInBhc3N3b3JkIjoiJDJhJDA4JGFtVkNEOXBFc1N2Q0ZJdVpLT1QycXVaMThxRnhRSTB4R0NlYVdQZkc1SEtxejdkMkFIWVdTIiwiZG9tYWluIjoibG9jYWxob3N0IiwibWVzc2FnZSI6InZlcmtlZm5pIMOtIHNrw7NsYW51bSIsImlhdCI6MTYzOTA3NzExNCwiZXhwIjoxNjM5MTYzNTE0fQ.FUxHWg8KR5rm6QS8Ooqq-Rt9R2z_FcDCVxUd4b4OrG0"
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
                          <Text style = {styles.urlTxt} onPress={() => {Linking.openURL(Cinema.website);}}>Vefsíða</Text>
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


const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="All Cinemas" component={CinemaList} />
      <Stack.Screen name="View Cinema" component={CinemaDetail} />
    </Stack.Navigator>
  );
}

export default MyStack;



const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 24,
        flexDirection: 'row',
        flexWrap: 'wrap',

      },
      row: {
        borderColor: '#DCDCDC',
        borderBottomWidth: 2,
        padding: 6,
      },

      nameTxt: {
        fontWeight: '600',
        fontSize: 18,
        width:170,
      },
      urlTxt: {
        fontWeight: '200',
        color: '#222',
        fontSize: 15,
        width:200,
        padding: 5,
      },
      nameContainer: {
        justifyContent: 'center',
      },
      headline: {
        fontWeight: '200',
        color: '#222',
        fontSize: 40,
        width:200,
        padding: 30

      },
      header: {
        padding: 5,
        backgroundColor: "#1abc9c"
      }

    


      
    });