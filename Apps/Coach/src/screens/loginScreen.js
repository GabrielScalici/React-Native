import React, { Component } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import { metrics, font, colors } from '../styles';


class loginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={styles.container}>
                
                <Text> Login </Text>
                <Text> Senha </Text>

                <TouchableOpacity>
                    <Text> Entrar </Text>
                </TouchableOpacity>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background_claro,
    }

})

export default loginScreen;