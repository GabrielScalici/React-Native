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
            <View style={[styles.container]}>
                <TouchableOpacity
                    onPress={onPress}
                >
                    <Text style={[styles.text, { color: color, borderColor: color }]}>
                        {children}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    } else {
        return (
            <View style={[styles.container]}>
                <TouchableOpacity
                    onPress={onPress}
                >
                    <Text style={[styles.text, { color: colors.branco, borderColor: 'transparent', backgroundColor: color }]}>
                        {children}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
};

export default ButtonText;
