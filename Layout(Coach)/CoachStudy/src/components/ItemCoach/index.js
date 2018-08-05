import React from 'react';

import {View, Text, TouchableOpacity, Image, Modal} from 'react-native';

import styles from './styles';

let photo;

const CoachList = (props) => {

    if (props.ImageS === 'batman') {
        photo = require('../../images/batman_circle_light.png');
    }
    else if (props.ImageS === 'chaplin') {
        photo = require('../../images/chaplin_simple_light.png');
    }
    else if (props.ImageS === 'trump') {
        photo = require('../../images/trump_simple_light.png');
    }
    else if (props.ImageS === 'indian') {
        photo = require('../../images/indian_simple_light.png');
    }
    else if (props.ImageS === 'cr7') {
        photo = require('../../images/cr7_simple_light.png');
    }
    else if (props.ImageS === 'robot') {
        photo = require('../../images/robot_simple_light.png');
    }
    else if (props.ImageS === 'native') {
        photo = require('../../images/native_simple_light.png');
    }

    return (
        <TouchableOpacity onPress={() => this.setState({modal:true})}>
            <View style={styles.container}>

                <Text style={styles.title}>
                    {props.name}
                </Text>

                <Image
                    style={styles.image}
                    source={photo}
                />

            </View>
            
        </TouchableOpacity>
    )
};


export default CoachList;