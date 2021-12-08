import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, Linking } from 'react-native';
import ReadMore from 'react-native-read-more-text';

const customData = require('../DummyData/UpcomingMovies.json');
const UpcomingMovies = customData.UpcomingMovies;

const  UpcomingMovieSite = (props) => {
    return(
        <View style = {styles.MovieBox}>
            <View style = {styles.MovieTitleHeader}>
                <Text style={styles.MovieTitle}> {props.Movie.Name}</Text>
            </View>

            <View style = {styles.InformationBox}>
                <Image  style = {styles.PosterStyle} source={{uri: props.Movie.Image}}/>

                <View style = {styles.TextInformationBox}>
                    <Text style = {styles.TextDescriptionStyle}>Description: </Text>
                    <View>
                        <ReadMore numberOfLines = {3}> {props.Movie.Plot}</ReadMore>
                    </View>

                    <Text style = {styles.TextDescriptionStyle}>Length: </Text>
                    <Text> {props.Movie.Duration}</Text>

                    <Text style = {styles.TextDescriptionStyle}>Release Date: </Text>
                    <Text> {props.Movie.Release}</Text>

                    <View style = {styles.WatchTrailerButtonBox}>
                        <Button title = 'Watch Trailer' onPress = {() => Linking.openURL(props.Movie.Trailer) }/>
                    </View>

                </View>
            </View>
        </View>
    )};

    
export default UpcomingMovieSite;

const styles = StyleSheet.create({
    MovieBox : {
        width: 350,
        height: 300,
        borderColor: '#28dc2b',
        backgroundColor: "#86ee9d",
        borderTopWidth: 5,
        
    },
    MovieTitleHeader : {
        width: 325,
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
        width: 150,
        height: 250,
        borderRadius: 10,
        alignSelf: "flex-start"
    },
    TextDescriptionStyle :{
        fontSize: 16,
        fontWeight: 'bold'
    },
    TextInformationBox : {
        width: 180,
        fontSize: 13,
        marginLeft: 5
    },
    WatchTrailerButtonBox :{
        marginTop: 25
    }
});
