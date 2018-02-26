/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableHighlight,
    Image,
} from 'react-native';
import Swipeable from 'react-native-swipeable';

//import icons
const trash = require('../img/trash.png');
const check = require('../img/check.png');
const close = require('../img/close.png');
const atention = require('../img/atention.png');


export default class Note extends Component {

    render() {

        const leftContent =
            <View style={styles.btn_check}>
                <TouchableOpacity onPress={this.props.deleteMethod}>
                    <Image source={check} style={styles.icons_menu}/>
                </TouchableOpacity>
            </View>;

        const rightButtons = [
/*
            <View style={styles.btn_check}>
                <TouchableOpacity>
                    <Image source={check} style={styles.icons_menu}/>
                </TouchableOpacity>
            </View>,
            <View style={styles.btn_atention}>
                <TouchableOpacity>
                    <Image source={atention} style={styles.icons_menu}/>
                </TouchableOpacity>
            </View>,
            <View style={styles.btn_close}>
                <TouchableOpacity>
                    <Image source={close} style={styles.icons_menu}/>
                </TouchableOpacity>
            </View>,
            */
            <View style={styles.btn_trash}>
                <TouchableOpacity onPress={this.props.deleteMethod}>
                    <Image source={trash} style={styles.icons_menu_trash}/>
                </TouchableOpacity>
            </View>
        ];

        return (

            <Swipeable leftContent={leftContent} rightButtons={rightButtons} rightButtonWidth={60}>
            <View key={this.props.keyval} style={styles.all}>
                    <Text style={styles.itens}>
                        {this.props.val.note}
                    </Text>
            </View>
            </Swipeable>
        );
    }
}

//Styles
const styles = StyleSheet.create({
    all: {
        flex:1,
        alignItems: 'center',
        justifyContent:'center',

    },
    btn_trash: {
        alignItems: 'flex-start',
        justifyContent:'flex-start',
        backgroundColor: 'lightgray',
        overflow: 'hidden'

    },
    btn_close: {

        backgroundColor: '#FF7777',
        overflow: 'hidden'
    },
    btn_check: {
        alignItems: 'flex-end',
        justifyContent:'flex-end',
        backgroundColor: '#A9ECA2',
        overflow: 'hidden'
    },
    btn_atention: {

        backgroundColor: '#FFF195',
        overflow: 'hidden'
    },
    noteText: {
        paddingLeft: 20,
        borderLeftWidth: 10,

    },
    noteDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 5,

    },
    itens: {
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'verdana',
        textAlign: 'center',
        margin: 10,
    },
    itens_x: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'verdana',
        textAlign: 'center',
        margin: 10,
    },
    icons_menu: {
        width: 60,
        height: 60,
        tintColor: 'white',
        alignItems: 'center',
        justifyContent:'center',
    },
    icons_menu_trash: {
        width: 60,
        height: 60,
        tintColor: 'white',
        alignItems: 'center',
        justifyContent:'center',
    },

});
