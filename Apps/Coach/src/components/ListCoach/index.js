import React, { Component } from 'react';
import { Image, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import styles from './styles';
import { font } from '../../styles';

class ListCoach extends Component {
    
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={styles.container}> 
                <Image
                    style={styles.photo}
                    source={this.props.img}
                />
                <Text style={styles.title}> {this.props.name} </Text>
                <Icon style={styles.arrow} name={"arrow-right"} size={font.icon}/>
            </TouchableOpacity>
        );
    }
}

export default ListCoach;