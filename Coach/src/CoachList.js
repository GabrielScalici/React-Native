

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
                                    João
                                </Text>

                            <Image
                                style={{width: 100, height: 100}}
                                source={require('./images/coach1.png')}
                            />

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={test}>
                        <View style={style.items_coach_coach}>

                            <Text style={style.names}>
                                Michel
                            </Text>

                            <Image
                                style={{width: 100, height: 100}}
                                source={require('./images/coach2.png')}
                            />

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={test}>
                        <View style={style.items_coach_coach}>

                            <Text style={style.names}>
                                Fábio
                            </Text>

                            <Image
                                style={{width: 100, height: 100}}
                                source={require('./images/coach3.png')}
                            />

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={test}>
                        <View style={style.items_coach_coach}>

                            <Text style={style.names}>
                                William
                            </Text>

                            <Image
                                style={{width: 100, height: 100}}
                                source={require('./images/coach4.png')}
                            />

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={test}>
                        <View style={style.items_coach_coach}>

                            <Text style={style.names}>
                                Rosana
                            </Text>

                            <Image
                                style={{width: 100, height: 100}}
                                source={require('./images/coach5.png')}
                            />

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={test}>
                        <View style={style.items_coach_coach}>

                            <Text style={style.names}>
                                Yo Ji Sung
                            </Text>

                            <Image
                                style={{width: 100, height: 100}}
                                source={require('./images/coach6.png')}
                            />

                        </View>
                    </TouchableOpacity>


                </ScrollView>
            </View>
        )

    }
}
