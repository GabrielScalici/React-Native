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

import { Actions } from 'react-native-router-flux';


export default class Home extends Component<Props> {


    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="white"
                    barStyle="dark-content"
                />

                <View style={styles.title_container}>
                <Image style={{width: 200, height: 200}}
                       source={require('../img/logo_cache_degrade.png')}
                />

                    <Text style={styles.title}> Bem-vindo, aventureiro </Text>
                </View>


                <View style={styles.body_container}>
                    <TouchableNativeFeedback onPress={() => Actions.inicio()}>
                        <View style={styles.item1_container}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <MaterialIcons name="rowing" size={30} color='white'> </MaterialIcons>
                                <Text style={styles.itens}> Iniciar jornada </Text>
                            </View>
                        </View>
                    </TouchableNativeFeedback>


                    <TouchableNativeFeedback onPress={() => Actions.comojogar()} >
                        <View style={styles.item2_container}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <MaterialIcons name="warning" size={30} color='white'> </MaterialIcons>
                                <Text style={styles.itens}> Como jogar</Text>
                            </View>
                        </View>
                    </TouchableNativeFeedback>


                        <TouchableNativeFeedback onPress={() => Actions.cache()}>
                            <View style={styles.item3_container}>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <MaterialIcons name="description" size={30} color='white'> </MaterialIcons>
                                    <Text style={styles.itens}> O que é memória cache? </Text>
                                </View>
                            </View>
                        </TouchableNativeFeedback>


                </View>

                <View>
                    <Text style={styles.subtitle_end}> Uma aventura pela memória cache </Text>
                </View>

            </View>

        );
    }
}

//ESTILOS USADOS NA PROPRIA PAGINA
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    title_container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,

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
        flex: 1,

    },
    title: {
        fontSize: 35,
        textAlign: 'center',
        margin: 10,
        paddingTop: 10,
        paddingHorizontal: 10,
        color: '#2c5b7f',
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
        color: '#cf6180',
    },
});
