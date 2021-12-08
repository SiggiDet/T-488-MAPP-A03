import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, SafeAreaView, Linking } from 'react-native';


const customData = require('../DummyData/Cinema');


const  CinemaList = () => {
    return (
        <View>
            <View style={styles.header}>
            <Text style={styles.headline}>Bíó</Text></View>
           <ScrollView>
            <View style={styles.container}>
                {customData.Cinema.filter(Cinema => Cinema.id === 5).map((Cinema) =>{
                        return(
                            <SafeAreaView>
                                    <Text style={styles.smallerheadline}>{Cinema.Name}</Text>
                                <View>
                                    <Text style = {styles.descriptionTxt}>{Cinema.Description}</Text>
                                    <Text style = {styles.infoTxt}>Heimilisfang: {Cinema.Address}</Text>
                                    <Text style = {styles.infoTxt}>Vefsíða: {Cinema.Website}</Text>
                                    <Text style = {styles.infoTxt}>Sími: {Cinema.Phone}</Text>
                                    <Text style = {styles.smallerheadline}>Í sýningu</Text>
                                </View> 
                               
                            </SafeAreaView>
           
                        )})}
            </View>
            </ScrollView>
            </View>

        )
}
export default CinemaList



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
          urlTxt: {
            fontWeight: '200',
            color: '#222',
            fontSize: 15,
            width:200,
            padding: 5,
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
            padding: 20,
            
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