import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
    },
    cinemaContainer:{
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
      timeTxt:{
        fontWeight: '400',
        paddingTop: 35,
        textDecorationLine: 'underline',
        color: "#00661b"
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
      ticketContainer: {
        justifyContent: 'center',
        borderWidth: 1,
        justifyContent: 'center',
        marginRight: 50,
        marginBottom: 15,
        marginTop: 35,
        padding: 15,
        borderRadius: 15,
        borderColor: '#c4c4c4',
        backgroundColor: "#fcfcfc"
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
    infoTxt: {
        fontWeight: '500',
        fontSize: 10,
        flex: 1,
        width: 400,
        color: '#222',
        padding: 2,
    },
    plotInfoTxt: {
      fontWeight: '500',
      fontSize: 10,
      width: 325,
      color: '#222',
      paddingBottom: 2,
  },
    smallerheadline: {
        fontWeight: '200',
        color: '#222',
        fontSize: 30,
        width: 200,
        padding: 10
    },
    ticketHeadline: {
      fontWeight: '200',
      color: '#222',
      fontSize: 30,
      width: 200,
  },
    viewSmallerheadline: {
      fontWeight: '200',
      color: '#222',
      fontSize: 20,
      width: 200,
      paddingTop: 20
  },
  TabBarStyle : {
    backgroundColor : '#216e6b'
  },
  ViewCinemaStyle :{
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  },
  ViewUpcomingMoviesStyle : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15
  },
  descriptionTxt: {
    width: 300,
    paddingTop: 15,
    paddingBottom: 15
  }
});
