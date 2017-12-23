
import App from './App';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';

//import elements
import {
    //Navigator,
    AppRegistry,
} from 'react-native';

import { Router, Scene} from 'react-native-router-flux';

//import plataform
//import {Platform, StyleSheet} from 'react-native';

//import swipe
//import { StackNavigator, TabNavigator } from "react-navigation";


//Import screens
import Coach from  './src/Coach';
import Goal from  './src/Goal';
import Time from  './src/Time';
import Study from  './src/Study';
import CoachList from  './src/CoachList';
import EditUser from  './src/EditUser';



export default class app2 extends React.Component {
    render(){
        return(

            <Router>
                <Scene key="root">
                    <Scene key='Study' component={Study} initil />
                    <Scene key='Coach' component={Coach} />
                    <Scene key='Goal' component={Goal} />
                    <Scene key='Time' component={Time} />
                    <Scene key='EditUser' component={EditUser} />
                    <Scene key='CoachList' component={CoachList} />
                </Scene>
            </Router>


        );
    }
}



AppRegistry.registerComponent('Coach', () => app2);
