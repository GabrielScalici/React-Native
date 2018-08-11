import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/SimpleLineIcons';

import { metrics, font, colors } from '../../styles';
import styles from './styles';


const ButtonText = ({ children, onPress }) => {
    return(
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.text}> 
                { children }
            </Text>
        </TouchableOpacity>
    );
};

export default ButtonText;
