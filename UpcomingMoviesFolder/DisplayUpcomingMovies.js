import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import UpcomingMovieSite from './UpcomingMovieSite';




const customData = require('../DummyData/UpcomingMovies.json');
const UpcomingMovies = customData.UpcomingMovies.sort((a, b) => new Date(...a.Release.split('.').reverse()) - new Date(...b.Release.split('.').reverse()));

const user_data = {
    username: 'kypslloyd',
    password: 'kypler55'
  }


const  DisplayUpcomingMovies = () => {
    const [token, setToken] = useState('')
    const [allUpcoming, setUpcomingList] = useState([])

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

    if (token != null || token != ''){
        // Get's all movies
        useEffect(() => {
        (async () => {
            await fetch('https://api.kvikmyndir.is/upcoming', {
            method: 'GET',
            headers: {
                'x-access-token' : token,
                'Content-Type': 'application/json'
            }
            })
            .then( (response) => response.json())
            .then( (responseData) => {
                setUpcomingList(responseData);
            });
        })();
        }, []);
    }

    const newUpcomingMovies = allUpcoming.sort((a, b) => new Date(...a["release-dateIS"].split('-').reverse()) - new Date(...b["release-dateIS"].split('-').reverse()));
    console.log(newUpcomingMovies)

    return (
        <ScrollView delaysContentTouches = {true} >
            {newUpcomingMovies.reverse().map(
                newUpcomingMovies => {
                    return(
                        <UpcomingMovieSite Movie={newUpcomingMovies}/>
                    )}
            )}
        </ScrollView>
    )
}
export default DisplayUpcomingMovies;