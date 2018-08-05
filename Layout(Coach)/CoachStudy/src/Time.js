

import React from 'react'
import{
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    Picker,
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

                    <TouchableOpacity onPress={() => {Actions.StatusList()}}>
                        <Text style={style.name_user}>
                            Iniciar
                        </Text>
                    </TouchableOpacity>
                </View>


                <View style={style.view_infos_user}>
                    <ScrollView>
                        <View style={style.view_small_text}>
                            <Text style={style.small_text}>
                                Como prefere estudar?
                            </Text>
                        </View>
                        <Picker style={style.time_picker}>
                            <Picker.Item label="Pomodoro" value="pm" />
                            <Picker.Item label="Cronômetro" value="cr" />
                        </Picker>

                        <View style={style.items_infos_coach}>

                            <Text style={style.title_infos}>
                                Tempo semanal exigido:
                            </Text>
                            <Text style={style.title_infos}>
                                20:00
                            </Text>
                        </View>

                        <View style={style.items_infos_coach}>

                            <Text style={style.title_infos}>
                                Tempo semanal cumprido:
                            </Text>
                            <Text style={style.title_infos}>
                                00:40
                            </Text>
                        </View>
                    </ScrollView>
                </View>
            </View>

        );

    }
}