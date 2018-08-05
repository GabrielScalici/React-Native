import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {metrics, font, colors } from '../styles';

class Perfil extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Perfil
                </Text>
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
    }
})

export default Perfil;

