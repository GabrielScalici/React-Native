

import React from 'react'
import{
    Text,
    View,
    StatusBar,
    Image,
    TouchableOpacity,
} from 'react-native';

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


                </View>


                <View style={style.view_edit_name_user}>


                    <Text style={style.btn_new_photo}>
                        Nome:
                    </Text>
                    <Text style={style.name_user}>
                        Gabriel Henrique
                    </Text>

                </View>

                <View style={style.view_edit_name_user}>

                    <Text style={style.name_user}>
                        Objetivo:
                    </Text>

                </View>
            </View>



        );
    }
}