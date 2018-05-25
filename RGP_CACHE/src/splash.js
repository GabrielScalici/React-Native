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
} from 'react-native';



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
                        backgroundColor="#147EAC"
                        barStyle="light-content"
                    />
                    <Image style={{width: 300, height: 300}}
                           source={require('../img/Logo_Fundo.png')}
                    />


                </View>

                <View style={{justifyContent:'flex-end', flex:1}}>
                    <Text style={styles.subtitle}> Ensino sobre: Memória Cache </Text>
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
        backgroundColor: '#147EAC',
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
        color: 'white',
    }
});
