import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WriteStory from './screens/WriteStory';
import ReadStory from './screens/ReadStory';
import LoginScreen from './screens/LoginScreen';

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
const switchNavigator=createSwitchNavigator({
LoginScreen:LoginScreen,
  TabNavigator:TabNavigator
})
const AppContainer = createAppContainer(switchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

