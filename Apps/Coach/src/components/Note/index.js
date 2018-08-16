import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableHighlight,
    Image,
} from 'react-native';
import Swipeable from 'react-native-swipeable';

import Icon from 'react-native-vector-icons/Ionicons';
import { metrics, font, colors } from '../../styles';
import styles from './styles';


export default class Note extends Component {
    render() {
        const leftContent =
            <TouchableOpacity
                onPress={this.props.deleteMethod}
                style={styles.btn_check}>
                <Icon name={"ios-checkmark"} size={30} color={'white'} />
            </TouchableOpacity>;

        const rightButtons = [
            <TouchableOpacity
                onPress={this.props.deleteMethod}
                style={styles.btn_trash}>
                <Icon name={"ios-trash"} size={30} color={'white'} />
            </TouchableOpacity>
        ];

        return (
            <Swipeable leftContent={leftContent} rightButtons={rightButtons} rightButtonWidth={60}>
                <View key={this.props.keyval} style={styles.container}>
                    <Text style={styles.itens}>
                        {this.props.val.note}
                    </Text>
                </View>
            </Swipeable>
        );
    }
}

