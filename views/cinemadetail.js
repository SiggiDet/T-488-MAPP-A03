import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, SafeAreaView, Linking, Image } from 'react-native';

const CinemaDetail = ( props ) => {
    trimedProps = JSON.parse(JSON.stringify(props.route.params.data).replace(/\\t/g, '').replace(/<b>/g,' ').replace(/<br>/g,''))
    moviesList = props.route.params.movies

    let moviesForCinema = []
    moviesList.forEach(element => {
      element.showtimes.map(
        oneMovieShowtimes => {
          if (oneMovieShowtimes.cinema.id == trimedProps.id){
            moviesForCinema.push(element)
            return
          }
        }
      )
    });

    return (
      <ScrollView>
        <View key={trimedProps.id} style={styles.container}> 
              <View style={styles.container}>
                <SafeAreaView>
                  <Text style={styles.smallerheadline}>{trimedProps.name}</Text>
                  <View>
                    <Text style = {styles.infoTxt}>Heimilisfang: {trimedProps.address}, {trimedProps.city}</Text>
                    <Text style = {styles.descriptionTxt}>{trimedProps.description}</Text>
                    <Text style = {styles.infoTxt}>Vefsíða: {trimedProps.website}</Text>
                    <Text style = {styles.infoTxt}>Sími: {trimedProps.phone}</Text>
                    <Text style = {styles.smallerheadline}>Í sýningu</Text>
                    {moviesForCinema.map(
                      movie => {
                        return(
                          <View key={movie._id} style={styles.movieContainer}>
                            <Image source={{ uri: movie.poster }} style={styles.pic} />
                            <Text>{movie.title}</Text>
                            <Text>{movie.year}</Text>
                            {movie.genres.map(
                              genre => {
                                return(
                                  <View key={genre["ID"]}>
                                    <Text style={styles.genreTxt}>{genre.Name}</Text>
                                  </View>
                                )
                              }
                            )}
                          </View>
                        )
                            
                      }
                    )}
                  </View>
                </SafeAreaView>
              </View>
        </View>
      </ScrollView>
    )
}

export default CinemaDetail

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
          pic: {
            borderRadius: 2,
            width: 120,
            height: 120,
          },
          movieContainer: {
            flex: 1,
            borderWidth: 1,
            justifyContent: 'center',
            marginRight: 75,
            marginBottom: 15,
            padding: 15,
            borderRadius: 15,
            borderColor: '#c4c4c4'
          },
          urlTxt: {
            fontWeight: '200',
            color: '#222',
            fontSize: 15,
            width:200,
            padding: 5,
          },
          genreTxt: {
            fontWeight: '200',
            color: '#222',
            fontSize: 15,
            width:200,
          },
          nameContainer: {
            justifyContent: 'center',
          },
          headline: {
            fontWeight: '200',
            color: '#222',
            fontSize: 40,
            width: 200,
            padding: 30
    
          },
          header: {
            padding: 15,
            backgroundColor: "#1abc9c"
          
        },
        descriptionTxt: {
            fontWeight: '200',
            fontSize: 15,
            flex: 1,
            width: 350,
            padding: 15,
            
        },
        infoTxt: {
            fontWeight: '500',
            fontSize: 10,
            flex: 1,
            width: 400,
            color: '#222',
            padding: 2,
        },
        smallerheadline: {
            fontWeight: '200',
            color: '#222',
            fontSize: 30,
            width: 200,
            padding: 10
        }
});