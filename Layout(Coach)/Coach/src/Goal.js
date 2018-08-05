

import React from 'react'
import{
    Text,
    View,
} from 'react-native';

//Style from css
import style from './design';

//Languages
import * as texts from './texts';


export default class Goal extends React.Component {
    //static navigationOption = {
    //    tabBarLabel: 'Goal',
    //}
    render(){
        return (


            <View style={style.view_goal}>

                <View style={style.view_head_user}>

                    <Text style={style.name_user}>
                        Metas
                    </Text>
                </View>

            </View>



        );
    }
}