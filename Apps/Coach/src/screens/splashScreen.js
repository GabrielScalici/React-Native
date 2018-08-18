import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import { metrics, font, colors } from '../styles';


class splashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={styles.container}>
                <Text> Logo </Text>
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

export default splashScreen;