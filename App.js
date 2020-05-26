import React from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, Dimensions, ImageBackground, Image } from 'react-native';
import hair from './assets/hair.jpg';
import badhair from './assets/badhair.jpg'; 
import hairday from './assets/hairday.jpg';
import logo from './assets/splash.jpeg';

let deviceWidth = Dimensions.get('window').width;

export default function App() {
  return (
    <View style={styles.container}>
    <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false}>
    <ImageBackground source={badhair} style={styles.firstView}>
       <Text style={styles.headerText}><Text style={{color: 'red', fontWeight: 'bold', fontSize: 48}}>Bad hairday?</Text> Don't Stress. We've got you covered.</Text>
        <View style={styles.navigationDots}>
          <View style={styles.navigationCircles}></View>
          <View style={styles.navigationCircles}></View>
          <View style={styles.navigationCircles}></View>
          <View style={styles.navigationCircles}></View>
        </View>
     </ImageBackground>

     <ImageBackground source={hairday} style={styles.secondView}>
      <Text style={styles.headerText}>Get skilled professionals to make your hair <Text>glow</Text> All at the click of a button</Text>
        <View style={styles.navigationDots}>
        <View style={styles.navigationCircles}></View>
          <View style={styles.navigationCircles}></View>
          <View style={styles.navigationCircles}></View>
          <View style={styles.navigationCircles}></View>
        </View>
     </ImageBackground>
  
     <ImageBackground source={hair} style={styles.thirdView}>
     <Text style={styles.headerText}>Third View</Text>
        <View style={styles.navigationDots}>
        <View style={styles.navigationCircles}></View>
          <View style={styles.navigationCircles}></View>
          <View style={styles.navigationCircles}></View>
          <View style={styles.navigationCircles}></View>
        </View>
     </ImageBackground>

     <ImageBackground source={hair} style={styles.forthView}>
     <Text style={styles.headerText}>Forth View</Text>
        <View style={styles.navigationDots}>
          <View style={styles.navigationCircles}></View>
          <View style={styles.navigationCircles}></View>
          <View style={styles.navigationCircles}></View>
          <View style={styles.navigationCircles}></View>
        </View>
     </ImageBackground>
     
    </ScrollView>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e5e5e5",
  },
  headerText: {
    fontSize: 30,
    textAlign: "center",
    margin: 10,
    top: '50%',
    color: 'white',
    fontWeight: "bold"
  },
  firstView: {
    width: deviceWidth,
    backgroundColor: '#F44336',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  secondView: {
    width: deviceWidth,
    backgroundColor: '#9C27B0',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  thirdView: {
    width: deviceWidth,
    backgroundColor: '#3F51B5',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  forthView: {
    width: deviceWidth,
    backgroundColor: '#009688',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  navigationDots: {
    flexDirection:'row',
    width: '80%',
    height: 80,
    position: 'absolute',
    bottom: 0,
    left: '35%'
  }
  ,
  navigationCircles: {
    backgroundColor: 'white',
    margin: 5,
    width: 16,
    height: 16,
    borderRadius: 32/2
  }

});