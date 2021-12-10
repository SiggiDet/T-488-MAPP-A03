import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import DisplayUpcomingMovies from '../UpcomingMoviesFolder/DisplayUpcomingMovies';
import CinemaList from './cinema';


const BottomTab = createBottomTabNavigator();


const Footer = () => {
  return (
    <BottomTab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Cinemas') {
          iconName = focused
            ? 'ios-film'
            : 'ios-film-outline';
        } else if (route.name === 'Upcoming Movies') {
          iconName = focused ? 'ios-today' : 'ios-today-outline';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#0ac5d1',
      tabBarInactiveTintColor: '#034044',
    })}>

      <BottomTab.Screen options = {{headerShown: false}} name="Cinemas" component={CinemaList} />
      <BottomTab.Screen name="Upcoming Movies" component={DisplayUpcomingMovies} />
    </BottomTab.Navigator>

  )
}

export default Footer;

const styles = StyleSheet.create({
  TabBarStyle : {
    backgroundColor : '#216e6b'
  },
  ViewCinemaStyle :{
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  },
  ViewUpcomingMoviesStyle : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}) 
