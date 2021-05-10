import React from 'react';
import { ScrollView, StyleSheet, Text, View,Flatlist } from 'react-native';
import db from '../config';

export default class ReadStory extends React.Component {
  constructor(){
    super()
    this.state={
      allStories:[]
    }
  }

   retrieveStories=()=>{
     try{
      var allStories=[]
       db.collection("stories").get().then((snapshot)=>{
       snapshot.forEach((doc)=>{
       allStories.push(doc.data())
       })
         this.setState({
         allStories:allStories
         })
       })
     } 
     catch (error) { console.log(error); }
   }

  componentDidMount= async()=>{
    const query=db.collection("stories").get()
    query.docs.map((doc)=>{
       this.setState({
         allStories:[...this.state.allStories,doc.data()]
       })
    })
   }
    render() {
      return (
        <View>
            <ScrollView>
       <FlatList
         data={this.state.allStories}
        renderItem={
        ({item})=>{
      <View>
        <Text> Title : {item.title} </Text>
        <Text> Author : {item.author} </Text>
        <Text> Story : {item.storytext} </Text>
        </View>
      } 
        }
   keyExtractor={
   (item,index)=>index.toString()
}
        />
            </ScrollView>
        </View>
      );
    }
  }
