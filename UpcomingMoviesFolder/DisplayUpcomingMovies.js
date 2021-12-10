import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, Linking, ScrollView } from 'react-native';
import ReadMore from 'react-native-read-more-text';
import styles from '../Styling/styles'
import user_data from '../views/user';

const  DisplayUpcomingMovies = () => {
    //const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2MWFlMzc5ZTFiNzA2ZjEzODI4MGNlOTMiLCJnbG9iYWxhZG1pbiI6ZmFsc2UsImFkbWluIjpmYWxzZSwiYWN0aXZlIjp0cnVlLCJmdWxsbmFtZSI6Ikt5cGxlciBMbG95ZCIsImVtYWlsIjoia3lwbGVybGxveWQwMEBnbWFpbC5jb20iLCJ1c2VybmFtZSI6Imt5cHNsbG95ZCIsInBhc3N3b3JkIjoiJDJhJDA4JGFtVkNEOXBFc1N2Q0ZJdVpLT1QycXVaMThxRnhRSTB4R0NlYVdQZkc1SEtxejdkMkFIWVdTIiwiZG9tYWluIjoibG9jYWxob3N0IiwibWVzc2FnZSI6InZlcmtlZm5pIMOtIHNrw7NsYW51bSIsImlhdCI6MTYzOTE3MDU1NywiZXhwIjoxNjM5MjU2OTU3fQ.Uc2WGHLkjWbMCCOcBQHw18HxC4sHeOW5VZLNzi456AQ"
    const [allUpcoming, setUpcomingList] = useState([])

    // Get's access token
    const [token, setToken] = useState('')
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
    const newUpcomingMovies = allUpcoming.sort((a, b) => new Date(...a["release-dateIS"].split('-')) - new Date(...b["release-dateIS"].split('-')));
    return (
        <ScrollView delaysContentTouches = {true} >
            {newUpcomingMovies.map(
                allUpcoming => {
                    if (allUpcoming.trailers == undefined || allUpcoming.trailers[0] == undefined || allUpcoming.trailers[0].results == undefined ||allUpcoming.trailers[0].results[0] == undefined){
                        return(
                            <View key={allUpcoming._id} style = {styles.MovieBox}>
                                <View style = {styles.MovieTitleHeader}>
                                    <Text style={styles.MovieTitle}> {allUpcoming.title}</Text>
                                </View>    
                                <View style = {styles.InformationBox}>
                                    <Image  style = {styles.PosterStyle} source={{uri: allUpcoming.poster}}/>    
                                    <View style = {styles.TextInformationBox}>
                                        <Text style = {styles.TextDescriptionStyle}>Description: </Text>
                                        <View>
                                            <ReadMore numberOfLines = {3}> {allUpcoming.plot}</ReadMore>
                                        </View>   
                                        <Text style = {styles.TextDescriptionStyle}>Release Date: </Text>
                                        <Text> {allUpcoming["release-dateIS"]}</Text>                                        
                                    </View>
                                </View>
                            </View>
                        )
                    } else {
                        return(

                            <View key={allUpcoming._id} style = {styles.MovieBox}>
                                <View style = {styles.MovieTitleHeader}>
                                    <Text style={styles.MovieTitle}> {allUpcoming.title}</Text>
                                </View>    
                                <View style = {styles.InformationBox}>
                                    <Image  style = {styles.PosterStyle} source={{uri: allUpcoming.poster}}/>    
                                    <View style = {styles.TextInformationBox}>
                                        <Text style = {styles.TextDescriptionStyle}>Description: </Text>
                                        <View>
                                            <ReadMore numberOfLines = {3}> {allUpcoming.plot}</ReadMore>
                                        </View>    
                                        <Text style = {styles.TextDescriptionStyle}>Release Date: </Text>
                                        <Text> {allUpcoming["release-dateIS"]}</Text>                    
                                        <View style = {styles.WatchTrailerButtonBox}>
                                            <Button title = 'Watch Trailer' onPress = {() => Linking.openURL(allUpcoming.trailers[0].results[0].url) }/>
                                        </View>    
                                    </View>
                                </View>
                            </View>
                        )
                    }
                }
            )}
        </ScrollView>
    )
}
export default DisplayUpcomingMovies;
