import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';


import UpcomingMovieSite from './UpcomingMovieSite';


const customData = require('../DummyData/UpcomingMovies.json');
const UpcomingMovies = customData.UpcomingMovies.sort(function (one, another) {return one.Release.localeCompare(another.Release);});

const  DisplayUpcomingMovies= (props) => {
    return (
        <ScrollView delaysContentTouches = {true} >
            {UpcomingMovies.reverse().map(
                UpcomingMovies => {
                    return(
                        <UpcomingMovieSite Movie = {UpcomingMovies}/>
                    )}
            )}
        </ScrollView>
    )
}
export default DisplayUpcomingMovies;