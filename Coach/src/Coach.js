

import React from 'react'
import{
    Text,
    View,
    Button,
    Imagem,
    ScrollView,
    StyleSheet
} from 'react-native';

//Style from css
import style from './design';

//Languages
import * as texts from './texts';

var a = true;


export default class Study extends React.Component {
    static navigationOption = {
        tabBarLabel: 'Study'
    }

    state = {
        names: [
            {'name': 'Ben', 'id': 1},
            {'name': 'Susan', 'id': 2},
            {'name': 'Robert', 'id': 3},
            {'name': 'Mary', 'id': 4},
            {'name': 'Daniel', 'id': 5},
            {'name': 'Laura', 'id': 6},
            {'name': 'John', 'id': 7},
            {'name': 'Debra', 'id': 8},
            {'name': 'Aron', 'id': 9},
            {'name': 'Ann', 'id': 10},
            {'name': 'Steve', 'id': 11},
            {'name': 'Olivia', 'id': 12}
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
                        <View key = {item.id} style = {styles.item}>
                            <Text style={style.itens_flatlist}>
                                {item.name}
                            </Text>
                        </View>
                        ))
                    }
                </ScrollView>
            </View>
        )

    }
}


const styles = StyleSheet.create ({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        margin: 2,
        borderColor: '#2a4944',
        backgroundColor: '#6E828A',
    }
});