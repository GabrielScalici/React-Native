

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


export default class Study extends React.Component {
    static navigationOption = {
        tabBarLabel: 'Study'
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
                {texts.Study}
            </Text>

        </View>
    }
}