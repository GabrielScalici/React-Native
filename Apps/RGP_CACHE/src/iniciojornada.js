/**
 * FRM
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    TouchableNativeFeedback,
    Image,

} from 'react-native';


//BIBLIOTECAS UTILIZADAS PARA OS ICONES (VECTOR-ICONS)
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export default class iniciojornada extends Component<Props> {


    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#2c5b7f"
                    barStyle="dark-content"
                />

                <View style={styles.title_container}>
                    <Text style={styles.title}> Começando Jornada</Text>
                </View>


                <View style={styles.body_container}>

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
        backgroundColor: '#2c5b7f'

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
});
