

import React from 'react'
import{
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    StatusBar,
} from 'react-native';

import { Actions } from 'react-native-router-flux';


//Style from css
import style from './design';

//Languages
import * as texts from './texts';


//images to coach
const coach1 = require('./images/coach1.png');
const felipe = require('./images/felipe_simple_light.png');
const coach3 = require('./images/coach3.png');
const coach4 = require('./images/coach4.png');
const coach5 = require('./images/coach5.png');
const batman = require('./images/batman_circle_light.png');





export default class Study extends React.Component {

    render(){
        return (

            <View style={style.view_study}>

                <StatusBar
                    backgroundColor="white"
                    barStyle="dark-content"
                />

                <View style={style.view_head_user}>

                    <Image
                        source={felipe}
                        style={style.image_user_study}
                    />


                    <Text style={style.name_user}>
                        Felipe Custódio
                    </Text>
                </View>



                <View style={style.view_infos_user}>
                    <ScrollView>
                        <TouchableOpacity onPress={this._onPressButton}>
                            <View style={style.items_coach_user}>

                                <Text style={style.title_infos}>
                                    Coach:
                                </Text>
                                <Text style={style.description_infos}>
                                    Batman
                                </Text>
                                <Image
                                    style={{width: 90, height: 90}}
                                    source={batman}
                                />
                            </View>
                        </TouchableOpacity>

                        <View style={style.items_infos_user}>

                            <Text style={style.title_infos}>
                                Situação:
                            </Text>
                            <Text style={style.title_infos}>
                                Feliz
                            </Text>

                        </View>
                        <View style={style.items_infos_user}>

                            <Text style={style.title_infos}>
                                Tempo de estudo semanal:
                            </Text>
                            <Text style={style.title_infos}>
                                12:00
                            </Text>

                        </View>
                        <View style={style.items_infos_user}>

                            <Text style={style.title_infos}>
                                Tempo de estudo total:
                            </Text>
                            <Text style={style.title_infos}>
                                12:00
                            </Text>

                        </View>
                        <TouchableOpacity onPress={() => {Actions.HistoryCoach()}}>
                            <View style={style.items_infos_user}>

                                <Text style={style.title_infos}>
                                    Histórico de todos os técnicos
                                </Text>

                            </View>
                        </TouchableOpacity>

                        <View style={style.edit_user}>

                            <TouchableOpacity onPress={() => {Actions.EditUser()}}>
                            <Text style={style.btn_user_edit}>
                                Editar usuário
                            </Text>
                            </TouchableOpacity>

                        </View>

                    </ScrollView>


                </View>
            </View>
        )

    }
}