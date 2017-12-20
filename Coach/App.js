/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
    Text,
    View
} from 'react-native';

import { StackNavigator, TabNavigator } from "react-navigation";

//Import screens
import Coach from  './src/Coach'
import Goal from  './src/Goal'
import Time from  './src/Time'
import Study from  './src/Study'


var MainScreenNavigator = TabNavigator({
    Coach2: {screen: Coach},
    Goal: {screen: Goal},
    Time: {screen: Time},
    Study: {screen: Study}

},{
    tabBarPosition: 'bottom',
    tabBarVisible: false,
    swipeEnabled: true,
    tabBarOptions: {
        activeTintColor: 'white',
        activeBackgroundColor: '#6E828A'
    }

}
);

MainScreenNavigator.navigationOptions = {
  title: "Tab Example"
};

export default MainScreenNavigator;