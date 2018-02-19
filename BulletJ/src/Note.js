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


export default class Note extends Component {
    render() {
        return (

            <View key={this.props.keyval} style={styles.all}>
                <Text style={styles.noteText}>{this.props.val.date}</Text>
                <Text style={styles.noteText}>{this.props.val.note}</Text>

                <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
                    <Text style={styles.noteDeletText}> X </Text>
                </TouchableOpacity>
            </View>

        );
    }
}


//Styles
const styles = StyleSheet.create({
    all: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,

    },
    noteText: {
        paddingLeft: 20,
        borderLeftWidth: 10,

    },
    noteDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10,

    },
    noteDeleteText: {
        color:  'white',

    },
});
