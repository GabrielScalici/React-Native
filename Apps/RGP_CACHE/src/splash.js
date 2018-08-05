/**
 * FRM
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    Image,
    TouchableOpacity
} from 'react-native';

import { Actions } from 'react-native-router-flux';

type Props = {};
export default class splash extends Component<Props> {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{justifyContent:'center', flex:7}}>
                    <StatusBar
                        backgroundColor="white"
                        barStyle="light-content"
                    />
                    <Image style={{width: 300, height: 300}}
                           source={require('../img/logo_cache_degrade.png')}
                    />
                    <TouchableOpacity onPress={() => Actions.home()}>
                        <Text style={styles.title}> Estou Pronto! </Text>
                    </TouchableOpacity>

                </View>

                <View style={{justifyContent:'flex-end', flex:1}}>
                    <Text style={styles.subtitle}> Gabriel Henrique Campos Scalici </Text>
                    <Text style={styles.subtitle}> Versão 1.0.0 </Text>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    welcome: {
        fontSize: 25,
        textAlign: 'center',
        margin: 10,
        color: 'white',
    },
    subtitle:{
        fontSize: 15,
        textAlign: 'center',
        margin: 5,
        color: '#70577b',
    },
    title: {
        fontSize: 35,
        textAlign: 'center',
        margin: 10,
        paddingTop: 10,
        paddingHorizontal: 10,
        color: '#2c5b7f',
    },
});
