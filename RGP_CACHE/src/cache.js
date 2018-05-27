/**
 * FRM
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    TouchableOpacity,
    Image,

} from 'react-native';

import { Actions } from 'react-native-router-flux';

//BIBLIOTECAS UTILIZADAS PARA OS ICONES (VECTOR-ICONS)
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export default class cache extends Component<Props> {


    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#cf6180"
                    barStyle="dark-content"
                />

                <View style={styles.title_container}>
                    <Text style={styles.title}> O que é cache?</Text>
                </View>


                <View style={styles.body_container}>




                    <TouchableOpacity style={styles.btn_enter} onPress={() => Actions.pop()}>
                        <Text style={styles.title}> Entendi </Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={styles.subtitle_end}>  </Text>
                </View>

            </View>

        );
    }
}

//ESTILOS USADOS NA PROPRIA PAGINA
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    title_container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        backgroundColor: '#cf6180'

    },
    item1_container:{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 20,
        height: 91,
        backgroundColor: '#2c5b7f',

    },
    item2_container:{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 20,
        height: 91,
        backgroundColor: '#70577b',

    },
    item3_container:{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 20,
        height: 91,
        backgroundColor: '#cf6180',

    },
    body_container:{
        flex: 8,

    },
    title: {
        fontSize: 35,
        textAlign: 'center',
        margin: 10,
        paddingTop: 10,
        paddingHorizontal: 10,
        color: 'white',
    },
    itens: {
        fontSize: 25,
        margin: 10,
        color: 'white',
    },
    subtitle_end: {
        fontSize: 18,
        textAlign: 'center',
        marginHorizontal: 20,
        color: '#2c5b7f',
    },
    btn_enter: {
        backgroundColor: '#cf6180',
        height: 80,
        marginVertical: 20,
    },
});
