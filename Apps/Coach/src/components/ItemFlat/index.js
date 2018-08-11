import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/SimpleLineIcons';

import { metrics, font, colors } from '../../styles';
import styles from './styles';


const ItemFlat = ({ children, back, onPress, touch, photo }) => {
    if (touch) {
        if (photo) {
            return (
                <TouchableOpacity style={styles.container}>
                    <Text>

                    </Text>
                </TouchableOpacity>
                )
        } else {
            return (
                <TouchableOpacity style={styles.container}>
                    <Text>

                    </Text>
                </TouchableOpacity>
                )
        }
    }else {
        if (photo) {
            return (
                <View style={styles.container}>
                    <Text>

                    </Text>
                </View>
                )
        } else {
            return (
                <View style={styles.container}>
                    <Text>

                    </Text>
                </View>
                )
        }
}

};

export default ItemFlat;
