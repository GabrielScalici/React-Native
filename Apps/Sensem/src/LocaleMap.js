import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,

} from 'react-native';

import openMap from 'react-native-open-maps';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


type Props = {};
export default class LocaleMap extends Component<Props> {

    static navigationOptions = {
        tabBarLabel: 'Localização mapa',
        drawerIcon: (tintColor) => {
            return(
                <MaterialIcons
                    name="map"
                    size={24}
                    style={{color: tintColor}}

                >
                </MaterialIcons>
            );
        }
    }

    constructor(props) {
        super(props);

        this.state = {
            latitude: null,
            longitude: null,
            error: null,
        };
    }

    componentDidMount() {
        this.watchId = navigator.geolocation.watchPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null,
                });
            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
        );
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchId);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Latitude: {this.state.latitude}</Text>
                <Text>Longitude: {this.state.longitude}</Text>
                {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
                <Button
                    color={'#bdc3c7'}
                    onPress={() => openMap({ latitude: this.state.latitude, longitude: this.state.longitude})}
                    title="Sua posição"/>

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
