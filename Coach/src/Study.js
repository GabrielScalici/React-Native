

import React from 'react'
import{
    Text,
    View,
    Button,
    Image,
    ScrollView,
} from 'react-native';

//Style from css
import style from './design';

//Languages
import * as texts from './texts';


export default class Study extends React.Component {
    static navigationOption = {
        tabBarLabel: 'Study'
    }


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
                </View>


                <View style={style.view_infos_user}>

                    <ScrollView>

                        <Text style={style.name_user}>
                            Infos scrollview
                        </Text>
                        <Text style={style.name_user}>
                            Infos scrollview
                        </Text>
                        <Text style={style.name_user}>
                            Infos scrollview
                        </Text>
                        <Text style={style.name_user}>
                            Infos scrollview
                        </Text>
                        <Text style={style.name_user}>
                            Infos scrollview
                        </Text>
                        <Text style={style.name_user}>
                            Infos scrollview
                        </Text>
                        <Text style={style.name_user}>
                            Infos scrollview
                        </Text>
                        <Text style={style.name_user}>
                            Infos scrollview
                        </Text>
                        <Text style={style.name_user}>
                            Infos scrollview
                        </Text>
                        <Text style={style.name_user}>
                            Infos scrollview
                        </Text>


                    </ScrollView>

                </View>

            </View>
        )

    }
}