
// vermelho #E57373
//amarelo #FFF176
//verde #4DB6AC




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
                        source={require('./images/coach5.png')}
                        style={style.image_user_study}
                    />
                    <Text style={style.name_user}>
                        Yo Ji Sung
                    </Text>
                </View>


                <View style={style.view_infos_user}>
                    <ScrollView>
                        <View style={style.items_infos_coach}>

                            <Text style={style.title_infos}>
                                Status:
                            </Text>

                            <Image
                                style={{width: 80, height: 80}}
                                source={require('./images/happy.png')}
                            />
                        </View>

                    </ScrollView>
                </View>


            </View>
        )

    }
}