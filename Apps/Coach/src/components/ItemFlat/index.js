import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/SimpleLineIcons';

import { metrics, font, colors } from '../../styles';
import styles from './styles';


const ItemFlat = ({ text1, text2, onPress, touch, photo, source }) => {
    if (touch) {
        if (photo) {
            return (
                <TouchableOpacity onPress={onPress} style={styles.container}>
                    <Text>
                        {text1}
                    </Text>
                    <Text>
                        {text2}
                    </Text>
                </TouchableOpacity>
            )
        } else {
            return (
                <TouchableOpacity onPress={onPress} style={styles.container}>
                    <Text>
                        {text1}
                    </Text>
                    <Text>
                        {text2}
                    </Text>
                </TouchableOpacity>
            )
        }
    } else {
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
