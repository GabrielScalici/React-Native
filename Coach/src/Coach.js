

import React from 'react'
import{
    Text,
    View,
    Button,
    Imagem
} from 'react-native';


export default class Coach extends React.Component {
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
            <Text style={{fontSize: 30}}>
                This is tab Coach
            </Text>

            </View>
    }
}