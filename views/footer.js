import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function Cinemas() {
  return (
    <View style={styles.text1}>
      <Text>Cinemas</Text>
    </View>
  );
}


function UpcomingMovies() {
  return (
    <View style={styles.text2}>
      <Text>Upcoming Movies</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Footer() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Cinemas" component={Cinemas} />
        <Tab.Screen name="Settings" component={UpcomingMovies} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

    text: {

    }

}) 
