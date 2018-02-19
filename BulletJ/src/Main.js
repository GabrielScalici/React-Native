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
} from 'react-native';





export default class Main extends Component {
    render() {
        return (
            <View style={styles.all}>
                <View style={styles.view_scroll}>
                    <ScrollView>

                        <View style={styles.scroll_itens}>
                            <Text style={styles.hello}>
                                Olá,
                            </Text>
                        </View>
                        <View style={styles.scroll_itens}>
                            <Text style={styles.name}>
                                Gabriel Henrique
                            </Text>
                        </View>

                        <View style={styles.scroll_itens}>
                            <Text style={styles.hello}>
                                Metas Semanais
                            </Text>
                        </View>
                        <View style={styles.scroll_itens}>
                            <Text style={styles.name}>
                                5/10 (50%)
                            </Text>
                        </View>
                        <View style={styles.scroll_itens}>
                            <Text style={styles.hello}>
                                Metas Mensais
                            </Text>
                        </View>
                        <View style={styles.scroll_itens}>
                            <Text style={styles.name}>
                                2/10 (20%)
                            </Text>
                        </View>
                        <View style={styles.scroll_itens}>
                            <Text style={styles.hello}>
                                Atividades
                            </Text>
                        </View>
                        <View style={styles.scroll_itens}>
                            <Text style={styles.name}>
                                5
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
    view_scroll: {
        flex: 1,
        backgroundColor: 'white',
    },
    scroll_itens: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',

    },
    title: {
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
    name: {
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'verdana',
        textAlign: 'center',
        marginBottom: 30,
    },
});
