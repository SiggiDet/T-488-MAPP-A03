import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, SafeAreaView, Linking, Image} from 'react-native';


const customData = require('../DummyData/Movies');


const  MovieList = () => {
    return (
        <View>
           <ScrollView>
            <View style={styles.container}>
                {customData.Movies.map(
                    Movies => {
                        return(
                                <SafeAreaView>
                                    <View style={styles.container}>
                                        <Text style={styles.title}>{Movies.Name}</Text>
                                        <Text style={styles.nameTxt}>Lengd: {Movies.Duration}</Text>
                                        <Text style={styles.nameTxt}>Tegund: {Movies.Genre}</Text>
                                        <Text style={styles.plot}>{Movies.Plot}</Text>
                                        <Image style={styles.image}source={{uri: Movies.Image}}></Image></View>
                                        <Text>Kaupa Miða</Text>
                                </SafeAreaView>
           
                            )})}
            </View>
            </ScrollView>
            </View>

        )

}
export default MovieList



const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 24,
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
      nameTxt: {
        fontWeight: '300',
        fontSize: 15,
        width: 200,
      },
      urlTxt: {
        fontWeight: '200',
        color: '#222',
        fontSize: 15,
        padding: 5,
      },
      nameContainer: {
        justifyContent: 'center',
      },
      headline: {
        fontWeight: '200',
        color: '#222',
        fontSize: 40,
        padding: 30,

      },
      header: {
        padding: 15,
        backgroundColor: "#1abc9c",

      },
      image: {
        width: 300,
        height: 500,

      },
      title: {
        fontWeight: '200',
        color: '#222',
        fontSize: 40,
        width: 300
      },
      plot: {
        fontSize: 15,
        marginTop: 20,
        marginBottom:20 
      }
    
    });