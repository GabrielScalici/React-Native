/**
 * React Native App Coach
 * https://github.com/facebook/react-native
 * By: Gabriel Henrique Campos Scalici
 * 22/12/2017
 */

//import elements
import React from 'react';
import {
    AppRegistry,
    Image,
    AsyncStorage,
} from 'react-native';

//Import routers
import { Router, Scene} from 'react-native-router-flux';

//import design
import style from './src/design'

//Import screens
import Coach from  './src/Coach';
import Goal from  './src/Goal';
import Time from  './src/Time';
import Study from  './src/Study';
import CoachList from  './src/CoachList';
import EditUser from  './src/EditUser';
import StatusList from  './src/StatusList';
import HistoryCoach from  './src/HistoryCoach';

//images icon
const study_icon = require('./src/images/study.png');
const coach_icon = require('./src/images/coach.png');
const goal_icon = require('./src/images/goal.png');
const time_icon =  require('./src/images/time.png');




import Icon from  './src/images/study.png';

export default class app2 extends React.Component {
    render(){
        return(

            <Router>
                <Scene key="root">
                    <Scene
                        tabs
                        key="tabbar"
                        activeBackgroundColor='#D4D6C8'
                        activeTintColor='#E3EFF3'
                        inactiveBackgroundColor='#E9E9E5'
                        inactiveTintColor='#E3EFF3'
                        tabBarPosition='bottom'
                        navBarButtonColor='black'
                        tabBarStyle={{height:40}}
                        showLabel={false}

                    >
                        <Scene key='Study' component={Study} initil hideNavBar icon={()=>(<Image style={style.tab_image} tintColor='#143A52' source={study_icon}/>)} />
                        <Scene key='Coach' component={Coach} hideNavBar icon={()=>(<Image style={style.tab_image} tintColor='#143A52' source={coach_icon}/>)} />
                        <Scene key='Goal' component={Goal} hideNavBar  icon={()=>(<Image style={style.tab_image} tintColor='#143A52' source={goal_icon}/>)}/>
                        <Scene key='Time' component={Time} hideNavBar  icon={()=>(<Image style={style.tab_image} tintColor='#143A52' source={time_icon}/>)}/>

                    </Scene>

                    <Scene key='EditUser' component={EditUser} direction="vertical" title="Editar Usuário"/>
                    <Scene key='CoachList' component={CoachList} direction="vertical" title="Escolher Técnico"/>
                    <Scene key='StatusList' component={StatusList} direction="vertical" title="Status"/>
                    <Scene key='HistoryCoach' component={StatusList} direction="vertical" title="History"/>
                    <Scene key='Register' component={StatusList} direction="vertical" title="Register"/>

                </Scene>
            </Router>


        );
    }
}



AppRegistry.registerComponent('CoachStudy', () => app2);
