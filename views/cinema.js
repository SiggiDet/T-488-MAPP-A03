import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, SafeAreaView, Linking} from 'react-native';


const customData = require('../DummyData/Cinema');


const  CinemaList = () => {
    return (
        <View>
            <View style={styles.header}>
            <Text style={styles.headline}>Bíó</Text></View>
            
           <ScrollView>
            <View style={styles.container}>
                {customData.Cinema.map(
                    Cinema => {
                        return(
                                <SafeAreaView>
                                <TouchableOpacity key={Cinema.id} title="View Cinema" onPress={() => navigation.navigate('View Cinema', {data: Cinema})}>
                                    <View style={styles.nameContainer}>
                                    <View style={styles.row}>
                                        <Text style = {styles.nameTxt}>{Cinema.Name}</Text>
                                        <Text style = {styles.urlTxt} onPress={() => {Linking.openURL(Cinema.Website);}}>Vefsíða</Text>
                                    </View> 
                                    </View>
                                </TouchableOpacity>
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
        width:200,
        padding: 30

      },
      header: {
        padding: 15,
        backgroundColor: "#1abc9c"
      }

    
    });