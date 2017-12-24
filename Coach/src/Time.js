

import React from 'react'
import{
    Text,
    View,
} from 'react-native';

//Style from css
import style from './design';

//Languages
import * as texts from './texts';


export default class Time extends React.Component {
    //static navigationOption = {
    //    tabBarLabel: 'Time'
    //}


    render(){
        return(
            <View style={style.view_time}>

                <Text style={style.title}>
                    {texts.Time}
                </Text>


            </View>

        )

    }
}