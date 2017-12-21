

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
                        <View style={style.items_coach_user}>

                            <Text style={style.title_infos}>
                                Coach
                            </Text>

                            <Image
                                style={{width: 100, height: 100}}
                                source={require('./images/coach1.png')}
                            />
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


            </View>
        )

    }
}