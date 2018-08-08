import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {metrics, font, colors } from '../styles';

//COMPONENTES
import Header from '../components/Header';

class Estat extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style={styles.container}>
                <Header> Estatísticas </Header>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {    
        flex: 1,
    },
})

export default Estat;

