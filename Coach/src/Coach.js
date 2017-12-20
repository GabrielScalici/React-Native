

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


export default class Coach extends React.Component {
    //Show in tab bar
    static navigationOption = {
        tabBarLabel: 'Coach'
    }

    render(){
        return <View style={style.view_tabBar}>

            <Text style = {style.title}>
                {texts.treinador}
            </Text>

            </View>
    }
}