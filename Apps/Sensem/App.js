import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';



//Import das telas
import fotoScreen from './src/fotoScreen';
import videoScreen from './src/videoScreen';
import mainScreen from './src/mainScreen';
import notificaoScreen from './src/notificaoScreen';
import collapseHeader from './src/CollapseHeader';
import LocaleMap from "./src/LocaleMap";


const Drawer_exemple = DrawerNavigator({
    Principal : { screen: mainScreen },
    Collapse_Header: { screen: collapseHeader },
    LocaleMap: { screen: LocaleMap },
    Notificacao: { screen: notificaoScreen },
    Foto: { screen: fotoScreen},
    Video: { screen: videoScreen },
}, {
    // Default config for all screens
    headerMode: 'screen',
    title: 'Main',
    initialRouteName: 'Principal',
    drawerPosition: 'left',
    contentOptions:{
        activeTintColor: 'red'
    },
    navigationOptions:{
        headerVisible: false,
    },
})

export default Drawer_exemple;