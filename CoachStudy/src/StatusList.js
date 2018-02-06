import React from 'react'
import{
    Text,
    View,
    Image,
    ScrollView,
    StatusBar,
} from 'react-native';

//Style from css
import style from './design';

//Languages
import * as texts from './texts';


const status1 = require('./images/furioso.png');
const status2 = require('./images/bravo.png');
const status3 = require('./images/normal.png');
const status4 = require('./images/feliz.png');
const status5 = require('./images/rindo.png');
const status6 = require('./images/fantastico.png');



export default class StatusList extends React.Component {
    render(){
        return(

            <View style={style.view_status_list}>

                <StatusBar
                    backgroundColor="blue"
                    barStyle="light-content"
                />

                <ScrollView>
                    <View style={style.items_coach_coach}>

                        <Text style={style.title_infos}>
                            Furioso
                        </Text>
                        <Image
                            style={style.image_coach_status}
                            source={status1}
                        />
                    </View>

                    <View style={style.items_coach_coach}>

                        <Text style={style.title_infos}>
                            Bravo
                        </Text>
                        <Image
                            style={style.image_coach_status}
                            source={status2}
                        />
                    </View>

                    <View style={style.items_coach_coach}>

                        <Text style={style.title_infos}>
                            Normal
                        </Text>
                        <Image
                            style={style.image_coach_status}
                            source={status3}
                        />
                    </View>

                    <View style={style.items_coach_coach}>

                        <Text style={style.title_infos}>
                            Feliz
                        </Text>
                        <Image
                            style={style.image_coach_status}
                            source={status4}
                        />
                    </View>

                    <View style={style.items_coach_coach}>

                        <Text style={style.title_infos}>
                            Rindo
                        </Text>
                        <Image
                            style={style.image_coach_status}
                            source={status5}
                        />
                    </View>

                    <View style={style.items_coach_coach}>

                        <Text style={style.title_infos}>
                            Fantástico
                        </Text>
                        <Image
                            style={style.image_coach_status}
                            source={status6}
                        />
                    </View>
                </ScrollView>
            </View>
        );

    }
}