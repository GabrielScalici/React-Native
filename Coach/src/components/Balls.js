

import React from 'react'
import{
    Text,
    View,
} from 'react-native';

//Style from css
import style from '../design';

//Languages
import * as texts from '../texts';


export default class Balls extends React.Component {

    render(){
        return(

            <View style={style.subtitle}>

                <Text>
                    Bolinhas
                </Text>

            </View>


        );

    }
}