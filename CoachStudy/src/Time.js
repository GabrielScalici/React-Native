

import React from 'react'
import{
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

import { Actions } from 'react-native-router-flux';


//Style from css
import style from './design';

//Languages
import * as texts from './texts';

const coach2 = require('./images/coach2.png');

export default class Time extends React.Component {
    render(){
        return(

            <View style={style.view_time}>

                <View style={style.view_head_user}>

                    <Image
                        source={coach2}
                        style={style.image_user_study}
                    />


                    <Text style={style.name_user}>
                        Iniciar
                    </Text>
                </View>

                <View style={style.view_head_user}>

                    <View style={style.items_infos_user}>

                        <Text style={style.title_infos}>
                            Tempo semanal exigido:
                        </Text>
                        <Text style={style.title_infos}>
                            20:00
                        </Text>
                    </View>

                    <View style={style.items_infos_user}>

                        <Text style={style.title_infos}>
                            Tempo semanal cumprido:
                        </Text>
                        <Text style={style.title_infos}>
                            00:40
                        </Text>
                    </View>

                    <View style={style.edit_user}>

                        <TouchableOpacity onPress={this._onPressButton}>
                            <Text style={style.btn_user_edit}>
                                Salvar Tempos
                            </Text>
                        </TouchableOpacity>

                    </View>


                </View>

            </View>




        );

    }
}