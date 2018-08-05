

import React from 'react'
import{
    Text,
    View,
} from 'react-native';

//Style from css
import style from './design';

//Languages
import * as texts from './texts';


export default class Login extends React.Component {
    //static navigationOption = {
    //    tabBarLabel: 'Goal',
    //}
    render(){
        return (


            <View style={style.view_goal}>

                <View style={style.view_head_user}>

                    <Text style={style.name_user}>
                        Tela de Login
                    </Text>
                </View>

            </View>



        );
    }
}