

import React from 'react'
import{
    Text,
    View,
    Button,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import { Actions } from 'react-native-router-flux';


//Style from css
import style from './design';

//Languages
import * as texts from './texts';
import EditUser from "./EditUser";




//images to coach
const coach1 = require('./images/coach1.png');
const coach2 = require('./images/coach2.png');
const coach3 = require('./images/coach3.png');
const coach4 = require('./images/coach4.png');
const coach5 = require('./images/coach5.png');
const coach6 = require('./images/coach6.png');

//images to balls
const ball_empty = require('./images/ball_empty.png');
const ball_full = require('./images/ball_full.png');



export default class Study extends React.Component {

    //static navigationOption = {
    //    tabBarLabel: 'Study'
    //}



    render(){
        return (

            <View style={style.view_study}>

                <View style={style.view_head_user}>

                    <Image
                        source={require('./images/coach2.png')}
                        style={style.image_user_study}
                    />
                    <Text style={style.name_user}>
                        Gabriel Henrique
                    </Text>

                    <TouchableOpacity onPress={() => {Actions.EditUser();}}>
                        <Text style={style.btn_user_edit}>
                            Edit profile
                        </Text>
                    </TouchableOpacity>

                </View>


                <View style={style.view_infos_user}>
                    <ScrollView>
                        <TouchableOpacity onPress={this._onPressButton}>
                            <View style={style.items_coach_user}>

                                <Text style={style.title_infos}>
                                    Coach
                                </Text>
                                <Text style={style.description_infos}>
                                    Yo Ji Sung
                                </Text>
                                <Image
                                    style={{width: 100, height: 100}}
                                    source={coach5}
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
                                Tempo de estudo:
                            </Text>
                            <Text style={style.title_infos}>
                                12:00 min
                            </Text>

                        </View>
                        <View style={style.items_infos_user}>

                            <Text style={style.title_infos}>
                                Tempo de estudo:
                            </Text>
                            <Text style={style.title_infos}>
                                12:00 min
                            </Text>

                        </View>
                        <View style={style.items_infos_user}>

                            <Text style={style.title_infos}>
                                Tempo de estudo:
                            </Text>
                            <Text style={style.title_infos}>
                                12:00 min
                            </Text>

                        </View>
                        <View style={style.items_infos_user}>

                            <Text style={style.title_infos}>
                                Tempo de estudo:
                            </Text>
                            <Text style={style.title_infos}>
                                12:00 min
                            </Text>

                        </View>

                    </ScrollView>
                </View>


                <View style={style.subtitle}>

                    <Image
                        style={style.image_subtitle}
                        source={ball_full}
                    />

                    <Image
                        style={style.image_subtitle}
                        source={ball_empty}
                    />

                    <Image
                        style={style.image_subtitle}
                        source={ball_empty}
                    />

                    <Image
                        style={style.image_subtitle}
                        source={ball_empty}
                    />

                </View>


            </View>
        )

    }
}