/**
 * FRM
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    FlatList,
    TouchableNativeFeedback,
    TouchableOpacity,
    TouchableHighlight,
} from 'react-native';

//BIBLIOTECAS UTILIZADAS PARA OS ICONES (VECTOR-ICONS)
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export default class Home extends Component<Props> {


    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="white"
                    barStyle="dark-content"
                />


                <View style={styles.title_container}>
                    <Text style={styles.title}> Bem-vindo aventureiro! </Text>
                </View>


                <View style={styles.body_container}>
                    <TouchableNativeFeedback>
                        <View style={styles.itens_container}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <MaterialIcons name="rowing" size={30} color='white'> </MaterialIcons>
                                <Text style={styles.itens}> Iniciar jornada </Text>
                            </View>
                        </View>
                    </TouchableNativeFeedback>


                    <TouchableNativeFeedback>
                        <View style={styles.itens_container}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <MaterialIcons name="warning" size={30} color='white'> </MaterialIcons>
                                <Text style={styles.itens}> Como jogar</Text>
                            </View>
                        </View>
                    </TouchableNativeFeedback>


                        <TouchableNativeFeedback>
                            <View style={styles.itens_container}>
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
        backgroundColor: '#F5FCFF',
    },
    title_container:{
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,

    },
    itens_container:{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#147EAC',
        paddingLeft: 20,
        height: 90,

    },
    body_container:{
        flex: 6,

    },
    title: {
        fontSize: 40,
        textAlign: 'left',
        margin: 10,
        paddingTop: 10,
        paddingLeft: 30,
        color: '#147EAC',
    },
    itens: {
        fontSize: 25,
        margin: 10,
        color: 'white',
    },
    subtitle_end: {
        fontSize: 18,
        textAlign: 'center',
        margin: 20,
        color: '#147EAC',
    },
});
