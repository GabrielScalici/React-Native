import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Scene} from 'react-native-router-flux';

export default class Main extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Test!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
