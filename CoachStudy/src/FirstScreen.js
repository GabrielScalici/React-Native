

import React from 'react'
import{
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';

//Style from css
import style from './design';

//Languages
import * as texts from './texts';
import {Actions} from "react-native-router-flux";

//images
const logo = require('./images/icon.png');


export default class FirstScreen extends React.Component {
    //static navigationOption = {
    //    tabBarLabel: 'Goal',
    //}
    render(){
        return (


            <View style={style.view_first_screen}>

                <View style={{alignItems: 'center'}}>
                    <Text style={style.small_text}>
                        Criado por:
                    </Text>
                    <Text style={style.small_text}>
                        Gabriel Henrique Campos Scalici
                    </Text>
                </View>

                <View style={style.view_head_user}>

                    <Image
                        source={logo}
                        style={style.image_logo}
                    />

                    <Text style={style.name_user}>
                        Study Coach
                    </Text>
                </View>

                <View style={style.view_btn_first_screen}>
                    <TouchableOpacity onPress={() => {Actions.Study()}}>
                        <View>
                        <Text style={style.btn_enter}>
                            Estudar
                        </Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>



        );
    }
}