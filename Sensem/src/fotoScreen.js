import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export default class fotoScreen extends Component<Props> {

    static navigationOptions = {
        tabBarLabel: 'Foto Screen',
        drawerIcon: (tintColor) => {
            return(
                <MaterialIcons
                    name="image"
                    size={24}
                    style={{color: tintColor}}

                >
                </MaterialIcons>
            );
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Screen Photo
                </Text>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
