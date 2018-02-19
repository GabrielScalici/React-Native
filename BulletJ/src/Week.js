/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,
    StatusBar,
} from 'react-native';


export default class Week extends Component {
    render() {
        return (


            <View style={styles.all}>

                <StatusBar
                    backgroundColor="white"
                    barStyle="dark-content"
                />


                <View style={styles.view_title}>
                    <Text style={styles.title}>
                        Semana
                    </Text>
                    <Text style={styles.subtitle}>
                        15/02 à 19/02
                    </Text>
                </View>

                <View style={styles.view_scroll}>
                    <ScrollView>
                        <View style={styles.scroll_itens}>
                            <Text style={styles.itens}>
                                Conteúdo
                            </Text>
                        </View>
                        <View style={styles.scroll_itens}>
                            <Text style={styles.itens}>
                                Conteúdo
                            </Text>
                        </View>
                        <View style={styles.scroll_itens}>
                            <Text style={styles.itens}>
                                Conteúdo
                            </Text>
                        </View>
                        <View style={styles.scroll_itens}>
                            <Text style={styles.itens}>
                                Conteúdo
                            </Text>
                        </View>
                        <View style={styles.scroll_itens}>
                            <Text style={styles.itens}>
                                Conteúdo
                            </Text>
                        </View>
                        <View style={styles.scroll_itens}>
                            <Text style={styles.itens}>
                                Conteúdo
                            </Text>
                        </View>
                        <View style={styles.scroll_itens}>
                            <Text style={styles.itens}>
                                Conteúdo
                            </Text>
                        </View>
                        <View style={styles.scroll_itens}>
                            <Text style={styles.itens}>
                                Conteúdo
                            </Text>
                        </View>
                        <View style={styles.scroll_itens}>
                            <Text style={styles.itens}>
                                Conteúdo
                            </Text>
                        </View>
                        <View style={styles.scroll_itens}>
                            <Text style={styles.itens}>
                                Conteúdo
                            </Text>
                        </View>
                        <View style={styles.scroll_itens}>
                            <Text style={styles.itens}>
                                Conteúdo
                            </Text>
                        </View>
                        <View style={styles.scroll_itens}>
                            <Text style={styles.itens}>
                                Conteúdo
                            </Text>
                        </View>
                        <View style={styles.scroll_itens}>
                            <Text style={styles.itens}>
                                Conteúdo
                            </Text>
                        </View>
                        <View style={styles.scroll_itens}>
                            <Text style={styles.itens}>
                                Conteúdo
                            </Text>
                        </View>

                    </ScrollView>
                </View>
            </View>

        );
    }
}


//Styles
const styles = StyleSheet.create({
    all: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    view_title: {
        flex: 1,
        backgroundColor: 'white',
    },
    view_scroll: {
        flex: 5,
        backgroundColor: 'white',
    },
    scroll_itens: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        fontFamily: 'verdana',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 2,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'normal',
        fontFamily: 'verdana',
        textAlign: 'center',
        marginTop: 2,
        marginBottom: 5,
    },
    itens: {
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'verdana',
        textAlign: 'center',
        margin: 10,
    },
    hello: {
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'verdana',
        textAlign: 'center',
        marginTop: 70,
    },
    user_name: {
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'verdana',
        textAlign: 'center',
        marginBottom: 50,
    },
});
