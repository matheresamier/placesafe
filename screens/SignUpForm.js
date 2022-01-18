import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Pressable, Button, TouchableHighlight } from 'react-native';

export default function Home() {
    return(
        <View style={styles.maincontainer}>
         <ImageBackground style={styles.background} source={require('../assets/images/mainbackground.png')}>
            {/* <Image style={styles.logo} source={require('../assets/images/ps-logo1.png')}/> */}
            <Text style={styles.title}>PlaceSafe</Text>
            <Text style={styles.subtitle}>We make sure you are safe.</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={this.onPress}
            >
              <Text style={styles.starttext}>Get Started</Text>
            </TouchableOpacity>
          
          </ImageBackground>
        </View>
      )
}

const styles = StyleSheet.create({
    maincontainer: {
      flex: 1,
    },
    background:{
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    logo:{
      justifyContent: "center",
      alignItems:"center",
     
    },
    title:{
      fontSize:25,
      fontWeight:'bold',
      
    },
    subtitle:{
      fontSize:20,
  
    },
    button: {
      alignItems: "center",
      backgroundColor: "#738970",
      padding: 10,
      borderRadius:8,
      width:"55%",
      marginTop:65,
  
    },
    starttext:{
      color: "#f6f6e9",
      fontSize:15,
      fontWeight:"bold",
    },
  });
  