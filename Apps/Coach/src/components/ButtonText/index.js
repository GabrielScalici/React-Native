import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/SimpleLineIcons';

import { metrics, font, colors } from '../../styles';
import styles from './styles';


const ButtonText = ({ children, onPress, outline, color }) => {
    if (outline) {
        return (
            <TouchableOpacity
                onPress={onPress}
                style={[styles.container]}
            >
                <Text style={[styles.text, { color: color, borderColor: color }]}>
                    {children}
                </Text>
            </TouchableOpacity>
        );
    } else {
        return (
            <TouchableOpacity
                onPress={onPress}
                style={[styles.container]}
            >
                <Text style={[styles.text, { color: colors.branco, borderColor: 'transparent', backgroundColor: color }]}>
                    {children}
                </Text>
            </TouchableOpacity>
        );
    }
};

export default ButtonText;
