import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {metrics, font, colors } from '../styles';

//COMPONENTES
import Header from '../components/Header';
import ViewPhoto from '../components/ViewPhoto';

//FOTO 
const photo_coach = require('../../img/avatar/barack-obama@256px.png');

class Coach extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style={styles.container}>

                <Header> Técnico </Header>

                <ViewPhoto
                    source={photo_coach}
                />

                <TouchableOpacity onPress={() => this.props.navigation.navigate("listaCoach")}>
                    <Text style={styles.text_escolher_tecnico}>Escolher técnico</Text>
                </TouchableOpacity>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {    
        flex: 1,
    },
    text_escolher_tecnico: {
        color: colors.primaria,
        fontSize: font.btn_pequeno
    }
})

export default Coach;

