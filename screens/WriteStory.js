import React from 'react';
import { StyleSheet, Text, View ,TextInput, TouchableOpacity,KeyboardAvoidingView,ToastAndroid} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class WriteStory extends React.Component {
 constructor () {
   super();
   this.state = {
     title : "",
     author : "",
     storytext : "",
     allStories:[]
   } 
 }
 
 submitStory = () => { 
   db.collection("stories").add({ 
     "title" : this.state.title,
      "author" : this.state.author,
       "storytext" : this.state.storytext
       }) 
 this.setState({ 
   title : "", 
   author : "",
    storytext : ""
   }) 
     return alert("Your Story Is Added :)")
  }
    render() {
      return (
        <KeyboardAvoidingView>
        <View style={{flex: 1}}>
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Title of your story"}
          onChangeText={(text)=>{
            this.setState({
              title : text
            })
          }}
        /> 

   <TextInput
          style={styles.formTextInput}
          placeholder ={"Author of the story"} 
          onChangeText={(text)=>{
            this.setState({
              author : text
            })
          }}
        /> 

<TextInput
          style={styles.writeStory}
          placeholder ={"Write your story"} 
          onChangeText={(text)=>{
            this.setState({
              storytext : text
            })
          }}
        /> 

        <TouchableOpacity style={styles.submitButton}
        onPress={()=>{this.submitStory(),alert("Your story is submitted")}}
        >
          <Text style={styles.buttonText}> Submit </Text>
        </TouchableOpacity>
        </View> 
        </KeyboardAvoidingView>
      );
    }
  }
  const styles = StyleSheet.create({
    formTextInput : {
      marginTop: 100,
      width: '80%',
      alignSelf: 'center',
      height: 40,
      textAlign: 'center',
      borderWidth: 2,
      outline: 'none',
    } ,
 writeStory : {
        marginTop: 100,
        width: '80%',
        alignSelf: 'center',
        height: 100,
        textAlign: 'center',
        borderWidth: 2,
        outline: 'none',
      } ,
 submitButton:{
      backgroundColor:'#EDC0BF',
      width: 50,
      borderWidth:1.5,
     },
     buttonText : {
       fontSize : 30,
       fontWeight : "bold",
       color : "black"
     }
  })