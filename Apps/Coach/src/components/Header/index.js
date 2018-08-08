import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/SimpleLineIcons';

import { metrics, font, colors } from '../../styles';
import styles from './styles';


const Header = ({ children, back, onPress }) => {
    if(back){
        return (
            <View style={styles.container_back}>
                <TouchableOpacity onPress={onPress}>
                    <Icon name={"arrow-left"} size={20} color={colors.primaria} />
                </TouchableOpacity>
                <Text style={styles.title}>{children}</Text>
            </View>
        )
    }else{
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{children}</Text>
            </View>
        )
    }

};

export default Header;
