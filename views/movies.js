import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, SafeAreaView, Linking, Image, Button} from 'react-native';
import ReadMore from 'react-native-read-more-text';


const customData = require('../DummyData/Movies');


const  MovieList = () => {
    return (
        <View>
           <ScrollView>
               <View style={styles.MovieBox}>
                {customData.Movies.map(
                    Movies => {
                        return(
                            <SafeAreaView>
                                    <View style={styles.MovieBox}>
                                        <View style={styles.MovieTitleHeader}>
                                            <Text style={styles.MovieTitle}>{Movies.Name}</Text>
                                        </View>
                                        <View style = {styles.InformationBox}>
                                            <Image style={styles.PosterStyle}source={{uri: Movies.Image}}></Image>
                                            <View style = {styles.TextInformationBox}>
                                                <Text style={styles.TextDescriptionStyle}>Lýsing: </Text>
                                                <View>
                                                    <ReadMore numberOfLines = {3}>{Movies.Plot}</ReadMore>
                                                </View>
                                                <Text style = {styles.TextDescriptionStyle}>Lengd:</Text>
                                                <Text>{Movies.Duration}</Text>
                                                <Text style = {styles.TextDescriptionStyle}>Tegund:</Text>
                                                <Text>{Movies.Genre}</Text>
                                                <View style = {styles.BuyButtonBox}>
                                                <Button title = 'Kaupa Miða' onPress = {() => Linking.openURL(props.Movie.Trailer) }/>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </SafeAreaView>
           
                            )})}
            </View>
            </ScrollView>
            </View>

        )

}
export default MovieList



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
        BuyButtonBox :{
            marginTop: 25
        },
    });
    