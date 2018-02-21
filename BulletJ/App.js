/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';''
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { TabNavigator } from 'react-navigation';




//ImportScreens
import Main from "./src/Main";
import Week from "./src/Week";
import Month from "./src/Month";
import Prior from "./src/Prior";
import History from "./src/HistoryWeek";

export default class App extends React.Component {
  render() {
    return (
        <MainTabNavigator />
    );
  }
}

export const MainTabNavigator = TabNavigator({
    Main: { screen: Main },
    Week: { screen: Week },
    Month: { screen: Month },
    Prior: { screen: Prior },
}, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        activeTintColor: 'black',
        inactiveTintColor: 'lightgray',
        labelStyle: {
            fontSize: 10,
        },
        style: {
            backgroundColor: 'white',
            borderTopWidth: 1,
            borderTopColor: 'white'
        },

    },
    animationEnabled: false,
    swipeEnabled: false,
    tabBarLabel: {
      focused: true,
        tintColor: 'black',
    },
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
