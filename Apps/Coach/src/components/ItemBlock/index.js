import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Icon from 'react-native-vector-icons/SimpleLineIcons';

import { metrics, font, colors } from '../../styles';
import styles from './styles';

const ItemBlock = ({ color1, color2, children }) => {
    return(
        <LinearGradient colors={[color1, color2]} style={styles.container} >
            <TouchableOpacity style={styles.container}>
                <Text style={styles.text}> {children} </Text>
            </TouchableOpacity>
        </LinearGradient>
    );

};

export default ItemBlock;
