import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
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
       allStories=[]
       db.collection("stories")
     }
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
            <ScrollView>
              
            </ScrollView>
      );
    }
  }