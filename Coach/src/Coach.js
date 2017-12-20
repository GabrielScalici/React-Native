

import React from 'react'
import{
    Text,
    View,
    Button,
    Imagem
} from 'react-native';

//Style from css
import style from './design';


export default class Coach extends React.Component {
    //Show in tab bar
    static navigationOption = {
        tabBarLabel: 'Coach'
    }

    render(){
        return <View style={
            {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'

            }
        }>
            <Text style = {style.title}>
                This is tab Coach
            </Text>

            </View>
    }
}