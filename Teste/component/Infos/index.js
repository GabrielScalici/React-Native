import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';

export default class Infos extends Component {

    render() {
        return (
            <View style={{ backgroundColor: 'gray' }}>
                <Text style={{ fontSize: 25 }}>
                    {this.props.name}
                </Text>
                <Image source={{ uri: this.props.photo }} />
            </View>
        );

    }
}

