import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/SimpleLineIcons';

import { metrics, font, colors } from '../../styles';
import styles from './styles';


const ItemFlat = ({ text1, text2, onPress, touch, photo, source, icon, name }) => {
    if (touch) {
        if (photo) {
            return (
                <TouchableOpacity onPress={onPress} style={styles.container}>
                    <Image
                        source={source}
                        style={styles.photo}
                    />
                    <Text>
                        {text1}
                    </Text>
                </TouchableOpacity>
            )
        } else if(icon) {
            return (
                <TouchableOpacity onPress={onPress} style={styles.container}>
                    <Text>
                        {text1}
                    </Text>
                    <Icon name={name} size={font.icon}/>
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
                    <Image
                        source={source}
                        style={styles.photo}
                    />
                    <Text>
                        {text1}
                    </Text>
                </View>
            )
        } else if(icon) {
            return (
                <View style={styles.container}>
                    <Text>
                        {text1}
                    </Text>
                    <Icon name={name} size={font.icon}/>
                </View>
            )
        }else { 
            return (
                <View style={styles.container}>
                    <Text>
                        {text1}
                    </Text>
                    <Text>
                        {text2}
                    </Text>
                </View>
            )
        }
    }

};

export default ItemFlat;
