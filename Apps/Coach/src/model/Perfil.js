import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {metrics, font, colors } from '../styles';

//COMPONENTES
import Header from '../components/Header';

class Perfil extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style={styles.container}>
                <Header> Perfil </Header>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {    
        flex: 1,
    },
})

export default Perfil;

