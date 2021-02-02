import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WriteStory from './screens/WriteStory';
import ReadStory from './screens/ReadStory';

export default function App() {

  return (
    <View style={styles.container}>
    <AppContainer/>
     <Text> Storyhub App </Text>
    </View>
  );
 
}

const TabNavigator = createBottomTabNavigator({
   ReadStory:ReadStory, 
   WriteStory: WriteStory
   })

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

