/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';

//import elements
import {
    Text,
    View
} from 'react-native';

//import plataform
import {Platform, StyleSheet} from 'react-native';

//import swipe
import { StackNavigator, TabNavigator } from "react-navigation";


//Import screens
import Coach from  './src/Coach'
import Goal from  './src/Goal'
import Time from  './src/Time'
import Study from  './src/Study'

//Swipe Screen
var MainScreenNavigator = TabNavigator({
    Coach: {screen: Coach},
    Goal: {screen: Goal},
    Time: {screen: Time},
    Study: {screen: Study}

},{
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    tabBarOptions: {
        activeTintColor: 'white',
        activeBackgroundColor: '#6E828A',
    }

}
);

MainScreenNavigator.navigationOptions = {
  title: "Tabs"
};

export default MainScreenNavigator;
