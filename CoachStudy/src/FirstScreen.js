

import React from 'react'
import{
    Text,
    View,
    Image,
    TouchableOpacity,
    StatusBar,
} from 'react-native';

//Degrade
import LinearGradient from 'react-native-linear-gradient';

//Style from css
import style from './design';

//Languages
import * as texts from './texts';
import {Actions} from "react-native-router-flux";

//images
const logo = require('./images/Logo_Fundo.png');


export default class FirstScreen extends React.Component {
    //static navigationOption = {
    //    tabBarLabel: 'Goal',
    //}
    render(){
        return (


            <LinearGradient colors={['#ffb300', '#ffa000', '#ff8f00']} style={style.view_first_screen}>
                <StatusBar
                    backgroundColor="transparent"
                    barStyle="light-content"
                    hidden
                />
{/*             <View style={{alignItems: 'center'}}>
                    <Text style={style.small_text}>
                        Criado por:
                    </Text>
                    <Text style={style.small_text}>
                        Gabriel Henrique Campos Scalici
                    </Text>
                </View>*/}

                <View style={style.view_head_user}>

                    <Image
                        source={logo}
                        style={style.image_logo}
                    />


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

            </LinearGradient>



        );
    }
}