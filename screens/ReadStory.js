import React from 'react';
import { ScrollView, StyleSheet, Text, View,Flatlist } from 'react-native';
import db from '../config';
import {SearchBar,Header} from 'react-native-elements'
export default class ReadStory extends React.Component {
  constructor(){
    super()
    this.state={
      allStories:[],
      datasource:[],
      search:[]
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
 
  componentDidMount(){
  this.retrieveStories
   }
updateSearch=(search)=>{
this.setState({
search:search
})
}
searchStories(text){
  const newData = this.state.allStories.filter((item)=>{
  const itemData= item.title?item.title.toUpperCase():"".toUpperCase()
  const textData=text.toUpperCase()
  return itemData.indexOf(textData)>-1
  })
  this.setState({
  dataSource:newData,
  search:text
  })
}
    render() {
      return (
        <View>
        <SearchBar
        placeholder="Search for a story here"
        onChangeText={text=>this.searchStories(text)}
        onClear={text=>this.searchStories("")}
        value={this.state.search]
        />
            <ScrollView>
       <FlatList
         data={this.state.search===""?this.state.allStories:this.state.dataSource}
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
