import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

class SoundButton extends React.Component {
       playSound = async () => {
      await Audio.Sound.createAsync(
         {uri:'https://dight310.byu.edu/media/audio/FreeLoops.com/3/3/Drip%20Sound-22095-Free-Loops.com.mp3'},
         {shouldPlay:true}
      );
    }

  render() {
    return(
      <TouchableOpacity style={{
        backgroundColor:'purple',
        borderRadius:100,
        borderWidth:2,
        borderColor:'white',
        alignItems:'center',
        justifyContent:'center',
        width:150, 
        height:90, 
        marginTop:100, 
        marginLeft:130}} onPress={this.playSound}>

       <Text style={{
         fontFamily:'Algerian',
        fontSize:20,
        fontStyle:'italic',
        fontWeight:'thick'}}>Sound1</Text>
      </TouchableOpacity>
         );
       }
}

class SoundButton1 extends React.Component {
    playSound = async () => {
      await Audio.Sound.createAsync(
         {uri:'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3'},
         {shouldPlay:true}
      );
    }

  render() {
    return(
      <TouchableOpacity style={{
        backgroundColor:'blue',
        borderRadius:100,
        borderWidth:2,
        borderColor:'white',
        alignItems:'center',
        justifyContent:'center',
        width:150, 
        height:90, 
        marginTop:50, 
        marginLeft:130}} onPress={this.playSound}>

       <Text style={{
         fontFamily:'Calibri Math',
         fontStyle:'Italic',
        fontSize:25,
        fontWeight:'thick'}}>Sound2</Text>
      </TouchableOpacity>
         );
       }
}

class SoundButton2 extends React.Component {
      playSound = async () => {
      await Audio.Sound.createAsync(
         {uri:'https://dight310.byu.edu/media/audio/FreeLoops.com/3/3/Drip%20Sound-22095-Free-Loops.com.mp3'},
         {shouldPlay:true}
      );
    }

  render() {
    return(
      <TouchableOpacity style={{
        backgroundColor:'yellow',
        borderRadius:100,
        borderWidth:2,
        borderColor:'white',
        alignItems:'center',
        justifyContent:'center',
        width:150, 
        height:90, 
        marginTop:50, 
        marginLeft:130}} onPress={this.playSound}>

       <Text style={{
         fontFamily:'Arial Black',
        fontSize:20,
        fontWeight:'thick'}}>Sound3</Text>
      </TouchableOpacity>
         );
       }
}

class SoundButton3 extends React.Component {
       playSound = async () => {
      await Audio.Sound.createAsync(
         {uri:'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3'},
         {shouldPlay:true}
      );
    }

  render() {
    return(
      <TouchableOpacity style={{
        backgroundColor:'green',
        borderRadius:100,
        borderWidth:2,
        borderColor:'white',
        alignItems:'center',
        justifyContent:'center',
        width:150, 
        height:90, 
        marginTop:50, 
        marginLeft:130}} onPress={this.playSound}>

       <Text style={{
         fontFamily:'Cursive',
         fontStyle:'Italic',
        fontSize:25,
        fontWeight:'thick'}}>Sound4</Text>
      </TouchableOpacity>
         );
       }
}

class StopSound extends React.Component{
  stopSound = () => {
     Audio.setIsEnabledAsync(false)
   }
    
  render(){
      return(
         <TouchableOpacity style={{backgroundColor:'red',
        borderRadius:100,
        borderWidth:2,
        borderColor:'white',
        alignItems:'center',
        justifyContent:'center',
        width:200, 
        height:50, 
        marginTop:50, 
        marginLeft:105}}>
       
          <Text>Stop Sound</Text>   
         </TouchableOpacity>
      );
  }
}

export default class App extends React.Component {
 render() {
   return(
 
     <View style={styles.mainContainer}>
        <SoundButton/>
        <SoundButton1/>
        <SoundButton2/>
        <SoundButton3/>
        <StopSound/>
     </View>
   );
   
 }
}

const styles=StyleSheet.create({
  mainContainer:{
    flex:1,
  backgroundColor: 'orange',  
  }
})
