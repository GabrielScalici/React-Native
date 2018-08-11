import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, AsyncStorage } from 'react-native';

import { metrics, font, colors } from '../styles';

//COMPONENTES
import Header from '../components/Header';
import ListCoach from '../components/ListCoach';

//Fotos dos tecnicos
const batman = require('../../img/avatar/batman@256px.png');
const obama = require('../../img/avatar/barack-obama@256px.png');
const chaplin = require('../../img/avatar/charlie-chaplin@256px.png');
const cr7 = require('../../img/avatar/cristiano-ronaldo@256px.png');
const gandhi = require('../../img/avatar/mahatma-gandhi@256px.png');
const robot = require('../../img/avatar/robot-01@256px.png');
const african = require('../../img/avatar/traditional-african-woman@256px.png');
const japanese = require('../../img/avatar/traditional-japanese-woman@256px.png');

class listaCoach extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={styles.container}>
                <Header
                    back
                    onPress={() => { this.props.navigation.goBack(null); }}
                > Escolha seu técnico </Header>
                <ScrollView>

                    <ListCoach
                        onPress={() => {
                            AsyncStorage.setItem('@COACH_SELECT', 'batman');
                            this.props.navigation.goBack(null);
                        }}
                        img={batman}
                        name={"Batman"}
                    />
                    <ListCoach
                        onPress={() => {
                            AsyncStorage.setItem('@COACH_SELECT', 'obama');
                            this.props.navigation.goBack(null);
                        }}
                        img={obama}
                        name={"Obama"}
                    />
                    <ListCoach
                        img={chaplin}
                        name={"Chaplin"}
                    />
                    <ListCoach
                        img={cr7}
                        name={"Cristiano R."}
                    />
                    <ListCoach
                        img={gandhi}
                        name={"Gandhi"}
                    />
                    <ListCoach
                        img={robot}
                        name={"Robô"}
                    />
                    <ListCoach
                        img={african}
                        name={"Princesa africana"}
                    />
                    <ListCoach
                        img={japanese}
                        name={"Atriz"}
                    />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background_claro,
    }

})

export default listaCoach;