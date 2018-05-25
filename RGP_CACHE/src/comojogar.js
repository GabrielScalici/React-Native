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
    ScrollView,

} from 'react-native';


//BIBLIOTECAS UTILIZADAS PARA OS ICONES (VECTOR-ICONS)
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export default class comojogar extends Component<Props> {


    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#70577b"
                    barStyle="dark-content"
                />

                <View style={styles.title_container}>
                    <Text style={styles.title}> Como jogar</Text>
                </View>


                <View style={styles.body_container}>
                    <ScrollView>
                        <Image style={{width: 420, height: 150, marginTop:20, marginHorizontal:0}}
                               source={require('../img/banner_comojogar_def.png')}
                        />

                        <View style={styles.itens}>
                            <MaterialIcons name="visibility" size={40} color='#70577b'> </MaterialIcons>
                            <Text style={styles.title2}> Leia atentamente </Text>
                        </View>
                        <View style={styles.itens}>
                            <MaterialIcons name="image-filter-none" size={40} color='#70577b'> </MaterialIcons>
                            <Text style={styles.title2}> Lembre decisões passadas </Text>
                        </View>
                        <View style={styles.itens}>
                            <MaterialIcons name="sms" size={40} color='#70577b'> </MaterialIcons>
                            <Text style={styles.title2}> Entenda o conceito </Text>
                        </View>
                        <View style={styles.itens}>
                            <MaterialIcons name="memory" size={40} color='#70577b'> </MaterialIcons>
                            <Text style={styles.title2}> Saiba a teoria de cache </Text>
                        </View>
                        <View style={styles.itens}>
                            <MaterialIcons name="toc" size={40} color='#70577b'> </MaterialIcons>
                            <Text style={styles.title2}> Olhe as alternativas </Text>
                        </View>


                    </ScrollView>
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
        backgroundColor: '#70577b'

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
        alignItems: 'center',

    },
    title: {
        fontSize: 35,
        textAlign: 'center',
        marginHorizontal: 10,
        paddingTop: 10,
        paddingHorizontal: 10,
        color: 'white',
    },
    title2: {
        fontSize: 29,
        textAlign: 'center',
        marginVertical: 15,
        color: '#70577b',
    },
    itens: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 20,
    },
    subtitle_end: {
        fontSize: 18,
        textAlign: 'center',
        marginHorizontal: 20,
        color: '#2c5b7f',
    },
});
