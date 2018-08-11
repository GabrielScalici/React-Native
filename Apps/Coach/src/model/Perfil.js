import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {metrics, font, colors } from '../styles';

//COMPONENTES
import Header from '../components/Header';
import ViewPhoto from '../components/ViewPhoto';

const photo_user = require('../../img/user/eu.jpg');

class Perfil extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style={styles.container}>
                <Header> Perfil </Header>
                
                <ViewPhoto
                    color1={colors.primaria}
                    color2={colors.teciaria}
                    source={photo_user}
                />

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

