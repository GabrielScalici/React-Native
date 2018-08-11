import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Icon from 'react-native-vector-icons/SimpleLineIcons';

import { metrics, font, colors } from '../../styles';
import styles from './styles';


const ViewPhoto = ({ source, color1, color2, type }) => {
   
    return(
    <LinearGradient colors={[color1, color2]} >
        <View style={styles.container}>
            <Image
                source={source}
                style={styles.photo}
            />
        </View>
    </LinearGradient>
   );

};

export default ViewPhoto;
