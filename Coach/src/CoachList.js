

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


export default class Study extends React.Component {
    static navigationOption = {
        tabBarLabel: 'Study'
    }

    state = {
        names: [
            {'name': 'Benos', 'id': 1},
            {'name': 'Susan', 'id': 2},
            {'name': 'Robert', 'id': 3},
            {'name': 'Mary', 'id': 4},
            {'name': 'Daniel', 'id': 5},
            {'name': 'Laura', 'id': 6},
        ]
    }

    render(){
        return(

            <View>
                <Text style={style.title}>

                    {texts.Coach}

                </Text>

                <ScrollView>
                    {
                        this.state.names.map((item, index) => (
                            <View key = {item.id} style = {style.item}>

                                <TouchableOpacity onPress={test}>
                                    <Text style={style.names}>
                                        {item.name}
                                    </Text>
                                </TouchableOpacity>

                                <Image
                                    style={{width: 100, height: 100}}
                                    source={require('./images/coach1.png')}
                                />

                            </View>
                        ))
                    }
                </ScrollView>
            </View>
        )

    }
}
