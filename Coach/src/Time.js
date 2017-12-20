

import React from 'react'
import{
    Text,
    View,
    Button,
    Imagem
} from 'react-native';

//Style from css
import style from './design';


export default class Time extends React.Component {
    static navigationOption = {
        tabBarLabel: 'Time'
    }
    render(){
        return <View style={
            {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'

            }
        }>
            <Text style={{fontSize: 30}}>
                This is tab Time
            </Text>

        </View>
    }
}