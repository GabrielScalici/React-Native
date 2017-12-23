
// vermelho #E57373
//amarelo #FFF176
//verde #4DB6AC




import React from 'react'
import{
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

//Style from css
import style from './design';

//Languages
import * as texts from './texts';

//images to coach stautus
const happy = require('./images/happy.png');
const normal = require('./images/normal.png');
const sad = require('./images/sad.png');

//images to coach profile
//images to coach
const coach1 = require('./images/coach1.png');
const coach2 = require('./images/coach2.png');
const coach3 = require('./images/coach3.png');
const coach4 = require('./images/coach4.png');
const coach5 = require('./images/coach5.png');
const coach6 = require('./images/coach6.png');

//Components
import Balls from './components/Balls';





export default class Study extends React.Component {
    static navigationOption = {
        tabBarLabel: 'Study'
    }


    render(){
        return (


            <View style={style.view_study}>

                <View style={style.view_head_user}>

                    <Image
                        source={coach5}
                        style={style.image_user_coach}
                    />
                    <Text style={style.name_user}>
                        Yo Ji Sung
                    </Text>

                    <TouchableOpacity onPress={this._onPressButton}>
                        <Text style={style.btn_coach_list}>
                            New coach
                        </Text>
                    </TouchableOpacity>

                </View>


                <View style={style.view_infos_user}>
                    <ScrollView>
                        <View style={style.items_infos_coach}>

                            <Text style={style.title_infos}>
                                Status:
                            </Text>

                            <Image
                                style={{width: 80, height: 80}}
                                source={happy}
                            />
                        </View>
                        <View style={style.items_infos_coach}>

                            <Text style={style.title_infos}>
                                Status:
                            </Text>

                            <Image
                                style={{width: 80, height: 80}}
                                source={sad}
                            />
                        </View>
                        <View style={style.items_infos_coach}>

                            <Text style={style.title_infos}>
                                Status:
                            </Text>

                            <Image
                                style={{width: 80, height: 80}}
                                source={normal}
                            />
                        </View>
                        <View style={style.items_infos_coach}>

                            <Text style={style.title_infos}>
                                Status:
                            </Text>

                            <Image
                                style={{width: 80, height: 80}}
                                source={sad}
                            />
                        </View>

                    </ScrollView>
                </View>

                <Balls />
            </View>
        )

    }
}