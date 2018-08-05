import React from 'react'
import{
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';

//Style from css
import style from './design';

//Languages
import * as texts from './texts';


const status1 = require('./images/furioso.png');




export default class HistoryCoach extends React.Component {
    render(){
        return(

            <View style={style.view_coach_list}>

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

                </ScrollView>


            </View>
        );

    }
}