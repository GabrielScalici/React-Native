import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import {metrics, font, colors } from '../styles';

import ListCoach from '../components/ListCoach';

const batman = require('../../img/avatar/batman@256px.png');

class Coach extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Coach
                </Text>
                <TouchableOpacity>
                    <Text style={styles.text_escolher_tecnico}>Escolher técnico</Text>
                </TouchableOpacity>

                <ListCoach
                    img = {batman}
                    name = {"Batman"}
                />  

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {    
        flex: 1,
    },
    title: {
        fontSize: font.title,
    },
    text_escolher_tecnico: {
        color: colors.primaria,
        fontSize: font.btn_pequeno
    }
})

export default Coach;

