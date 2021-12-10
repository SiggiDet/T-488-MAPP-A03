import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, Linking, ScrollView } from 'react-native';
import ReadMore from 'react-native-read-more-text';

const user_data = {
    username: 'kypslloyd',
    password: 'kypler55'
}

const  DisplayUpcomingMovies = () => {
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2MWFlMzc5ZTFiNzA2ZjEzODI4MGNlOTMiLCJnbG9iYWxhZG1pbiI6ZmFsc2UsImFkbWluIjpmYWxzZSwiYWN0aXZlIjp0cnVlLCJmdWxsbmFtZSI6Ikt5cGxlciBMbG95ZCIsImVtYWlsIjoia3lwbGVybGxveWQwMEBnbWFpbC5jb20iLCJ1c2VybmFtZSI6Imt5cHNsbG95ZCIsInBhc3N3b3JkIjoiJDJhJDA4JGFtVkNEOXBFc1N2Q0ZJdVpLT1QycXVaMThxRnhRSTB4R0NlYVdQZkc1SEtxejdkMkFIWVdTIiwiZG9tYWluIjoibG9jYWxob3N0IiwibWVzc2FnZSI6InZlcmtlZm5pIMOtIHNrw7NsYW51bSIsImlhdCI6MTYzOTE3MDU1NywiZXhwIjoxNjM5MjU2OTU3fQ.Uc2WGHLkjWbMCCOcBQHw18HxC4sHeOW5VZLNzi456AQ"
    //const [token, setToken] = useState('')
    const [allUpcoming, setUpcomingList] = useState([])

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
    return (
        <ScrollView delaysContentTouches = {true} >
            {newUpcomingMovies.reverse().map(
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

const styles = StyleSheet.create({
    MovieBox : {
        width: 400,
        height: 350,
        borderColor: '#808080',
        backgroundColor: "#D3D3D3",
        borderTopWidth: 5,
        padding: 5,

    },
    MovieTitleHeader : {
        left: 10,
        width: 325,
        padding: 10
    },
    MovieTitle :{
        fontWeight : 'bold',
        fontSize: 23
    },
    InformationBox : {
        marginLeft: 10,
        flexDirection: "row"
    },
    PosterStyle: {
        left: 10,
        width: 150,
        height: 250,
        borderRadius: 10,
        alignSelf: "flex-start"
    },
    TextDescriptionStyle :{
        fontSize: 16,
        fontWeight: 'bold',
        left: 10
    },
    TextInformationBox : {
        width: 180,
        fontSize: 13,
        marginLeft: 5,
        left: 10
    },
    WatchTrailerButtonBox :{
        marginTop: 25
    }
});
