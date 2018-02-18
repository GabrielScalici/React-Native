/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {Router, Scene, ScrollableTabComponent} from 'react-native-router-flux';

//ImportScreens
import Main from "./src/Main";
import Week from "./src/Week";
import Month from "./src/Month";
import Prior from "./src/Prior";

export default class App extends React.Component {
  render() {
    return (
      <Router>
          <Scene key="root">
              <Scene
                  tabs
                  key="tabbar"
                  swipeEnabled
                  activeBackgroundColor='#F7F7F7'
                  activeTintColor='#E3EFF3'
                  inactiveBackgroundColor='white'
                  inactiveTintColor='#E3EFF3'
                  tabBarPosition='bottom'
                  navBarButtonColor='black'
                  tabBarStyle={{height:40}}
                  showLabel={false}
                  showIcon

              >
                  <Scene key='Main' component={Main} hideNavBar title="Main"/>
                  <Scene key='Week' component={Week} hideNavBar title="Week"/>
                  <Scene key='Month' component={Month} hideNavBar title="Month"/>
                  <Scene key='Prior' component={Prior} hideNavBar title="Prior"/>
              </Scene>
          </Scene>
      </Router>
    );
  }
}

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
