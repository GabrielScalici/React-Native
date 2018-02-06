

import React from 'react'
import{
    Text,
    View,
    StatusBar,
    Image,
    TouchableOpacity,
} from 'react-native';

import { Isao } from 'react-native-textinput-effects';

//Style from css
import style from './design';

//Languages
import * as texts from './texts';

const coach2 = require('./images/coach2.png');


export default class EditUser extends React.Component {

    render(){
        return (

            <View style={style.view_edit_user}>

                <StatusBar
                    backgroundColor="white"
                    barStyle="dark-content"
                />

                <View style={style.view_head_user}>

                    <Image
                        source={coach2}
                        style={style.image_user_study}
                    />


                    <TouchableOpacity>
                        <Text style={style.btn_new_photo}>
                            Escolher outra foto
                        </Text>
                    </TouchableOpacity>

                    <Text style={style.name_user}>
                        Gabriel Henrique
                    </Text>

                    <Text style={style.btn_new_photo}>
                        Objetivo de passar em todas as matérias esse semestre!
                    </Text>

                </View>


                <View style={style.view_componets}>

                    <Isao
                        label={'Novo nome'}
                        // this is applied as active border and label color
                        activeColor={'#143A52'}
                        // this is applied as passive border and label color
                        passiveColor={'#dadada'}
                    />

                    <Isao
                        label={'Novo Objetivo'}
                        // this is applied as active border and label color
                        activeColor={'#143A52'}
                        // this is applied as passive border and label color
                        passiveColor={'#dadada'}
                    />

                </View>

                <View style={style.view_btn_save_edit}>
                    <TouchableOpacity>
                        <Text style={style.btn_save_edit}>
                            Salvar modificações
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>



        );
    }
}