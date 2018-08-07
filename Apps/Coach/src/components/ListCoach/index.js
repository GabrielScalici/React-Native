import React, { Component } from 'react';
import { Image, View, TouchableOpacity, Text } from 'react-native';

import styles from './styles';

class ListCoach extends Component {
    
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <View style={styles.container}> 
                <Text style={styles.title}> {this.props.name} </Text>
                <Image
                    style={styles.photo}
                    source={this.props.img}
                />
            </View>
        );
    }
}

export default ListCoach;