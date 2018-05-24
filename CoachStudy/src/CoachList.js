

import React from 'react'
import{
    Text,
    View,
    Button,
    Image,
    ScrollView,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

//Style from css
import style from './design';

//Languages
import * as texts from './texts';

const test = () => {
    alert('Test');
}


export default class CoachList extends React.Component {

    render(){
        return(

            <View style={style.view_coach_list}>
                <ScrollView >
                    <TouchableOpacity onPress={test}>
                        <View style={style.items_coach_coach}>

                                <Text style={style.names}>
                                    Batman
                                </Text>

                            <Image
                                style={{width: 100, height: 100}}
                                source={require('./images/batman_circle_light.png')}
                            />

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={test}>
                        <View style={style.items_coach_coach}>

                            <Text style={style.names}>
                                Chaplin
                            </Text>

                            <Image
                                style={{width: 100, height: 100}}
                                source={require('./images/chaplin_simple_light.png')}
                            />

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={test}>
                        <View style={style.items_coach_coach}>

                            <Text style={style.names}>
                                Trump
                            </Text>

                            <Image
                                style={{width: 100, height: 100}}
                                source={require('./images/trump_simple_light.png')}
                            />

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={test}>
                        <View style={style.items_coach_coach}>

                            <Text style={style.names}>
                                Indian
                            </Text>

                            <Image
                                style={{width: 100, height: 100}}
                                source={require('./images/indian_simple_light.png')}
                            />

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={test}>
                        <View style={style.items_coach_coach}>

                            <Text style={style.names}>
                                Cristiano Ronaldo
                            </Text>

                            <Image
                                style={{width: 100, height: 100}}
                                source={require('./images/cr7_simple_light.png')}
                            />

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={test}>
                        <View style={style.items_coach_coach}>

                            <Text style={style.names}>
                                Robot
                            </Text>

                            <Image
                                style={{width: 100, height: 100}}
                                source={require('./images/robot_simple_light.png')}
                            />

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={test}>
                        <View style={style.items_coach_coach}>

                            <Text style={style.names}>
                                Nativo
                            </Text>

                            <Image
                                style={{width: 100, height: 100}}
                                source={require('./images/native_simple_light.png')}
                            />

                        </View>
                    </TouchableOpacity>


                </ScrollView>
            </View>
        )

    }
}
