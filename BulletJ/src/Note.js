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
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Note extends Component {
    render() {
        return (

            <View key={this.props.keyval} style={styles.all}>
                    <Text style={styles.itens}>
                        {this.props.val.note}
                    </Text>
                <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
                    <Icon name="ios-add" size={20} color="gray" />
                </TouchableOpacity>
            </View>
        );
    }
}

//Styles
const styles = StyleSheet.create({
    all: {
        position: 'relative',

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

});
