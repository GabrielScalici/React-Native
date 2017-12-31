

import React from 'react'
import{
    Text,
    View,
    Image,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

//imports to TextInput effects
import { Jiro } from 'react-native-textinput-effects';

//Style from css
import style from './design';

//Languages
import * as texts from './texts';
import {Actions} from "react-native-router-flux/index";

//temporary image
const coach2 = require('./images/coach2.png');

export default class EditUser extends React.Component {

    constructor(props){
        super(props);

    }

    render(){
        return(
            <View style={[styles.card1, { backgroundColor: '#dee0e0' }]}>
                <View style={style.view_head_user}>

                    <Image
                        source={coach2}
                        style={style.image_user_study}
                    />




                </View>


                <View>
                <Jiro
                    label={"Nome de Usuário"}
                    borderColor={'#143A52'}
                    inputStyle={{ color: 'white' }}
                />
                </View>
            </View>


        )

    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 24,
        backgroundColor: 'white',
    },
    content: {
        // not cool but good enough to make all inputs visible when keyboard is active
        paddingBottom: 300,
    },
    card1: {
        flex:1,
        paddingVertical: 16,
    },
    input: {
        marginTop: 4,
    },
    title: {
        paddingBottom: 16,
        textAlign: 'center',
        color: '#404d5b',
        fontSize: 20,
        fontWeight: 'bold',
        opacity: 0.8,
    },
});
