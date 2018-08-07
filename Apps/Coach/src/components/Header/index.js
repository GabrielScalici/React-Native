import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';


const Header = ({ children}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{children}</Text>
        </View>
    )

};

export default Header;
