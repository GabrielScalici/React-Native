

import React from 'react'
import{
    Text,
    View,
    Button,
    Imagem
} from 'react-native';

//Style from css
import style from './design';

//Languages
import * as texts from './texts';

//images to balls
const ball_empty = require('./images/ball_empty.png');
const ball_full = require('./images/ball_full.png');

export default class Goal extends React.Component {
    static navigationOption = {
        tabBarLabel: 'Goal',
    }
    render(){
        return <View style={
            {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'

            }
        }>
            <Text style={style.title}>
                {texts.Goal}
            </Text>

        </View>
    }
}