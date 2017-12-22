/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';

//import elements
import {
    Text,
    View,
    Navigator,
} from 'react-native';

//import plataform
import {Platform, StyleSheet} from 'react-native';

//import swipe
import { StackNavigator, TabNavigator } from "react-navigation";


//Import screens
import Coach from  './src/Coach';
import Goal from  './src/Goal';
import Time from  './src/Time';
import Study from  './src/Study';
import CoachList from  './src/CoachList';
import EditUser from  './src/EditUser';

//Swipe Screen
var MainScreenNavigator = TabNavigator({
    Study: {screen: Study, navigationOptions: { tabBarVisible: false  }},
    Coach: {screen: Coach, navigationOptions: { tabBarVisible: false  }},
    Goal: {screen: Goal, navigationOptions: { tabBarVisible: false  }},
    Time: {screen: Time, navigationOptions: { tabBarVisible: false  }},

},{
    //tabBarPosition: 'bottom',
    //tabBarVisible: false,
    swipeEnabled: true,
    //tabBarHeight: 10,
    //tabBarOptions: {
      //  activeTintColor: 'white',
      //  activeBackgroundColor: '#6E828A',
    //}

}
);

MainScreenNavigator.navigationOptions = {
  title: "Tabs"
};

export default MainScreenNavigator;
