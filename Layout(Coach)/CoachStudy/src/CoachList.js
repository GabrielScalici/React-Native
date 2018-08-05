import React from 'react'
import{
    View,
    ScrollView,
    StyleSheet
} from 'react-native';

//Style from css
import style from './design';

//Languages
import * as texts from './texts';

//Custom Components
import ItemCoach from './components/ItemCoach';

const test = () => {
    alert('Test');
};

export default class CoachList extends React.Component {

    render(){
        return(

            <View style={styles.container}>
                <ScrollView >

                    <ItemCoach
                        name={'Batman'}
                        onPress={() => alert('Teste')}
                        ImageS={'batman'}
                    />

                    <ItemCoach
                        name={'Chaplin'}
                        onPress={() => alert('Teste')}
                        ImageS={'chaplin'}
                    />

                    <ItemCoach
                        name={'Trump'}
                        onPress={() => alert('Teste')}
                        ImageS={'trump'}
                    />

                    <ItemCoach
                        name={'Indian'}
                        onPress={() => alert('Teste')}
                        ImageS={'indian'}
                    />

                    <ItemCoach
                        name={'Cristiano Ronaldo'}
                        onPress={() => alert('Teste')}
                        ImageS={'cr7'}
                    />

                    <ItemCoach
                        name={'Robô'}
                        onPress={() => alert('Teste')}
                        ImageS={'robot'}
                    />

                    <ItemCoach
                        name={'Nativo'}
                        onPress={() => alert('Teste')}
                        ImageS={'native'}
                    />

                </ScrollView>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        flex:5,
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop:10,
        backgroundColor: 'white'
    }
});
