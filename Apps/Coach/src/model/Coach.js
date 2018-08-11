import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, AsyncStorage } from 'react-native';
import { metrics, font, colors } from '../styles';

//COMPONENTES
import Header from '../components/Header';
import ViewPhoto from '../components/ViewPhoto';
import ItemFlat from '../components/ItemFlat';
import ButtonText from '../components/ButtonText';

//FOTO 
const batman = require('../../img/avatar/batman@256px.png');
const obama = require('../../img/avatar/barack-obama@256px.png');
const chaplin = require('../../img/avatar/charlie-chaplin@256px.png');
const cr7 = require('../../img/avatar/cristiano-ronaldo@256px.png');
const gandhi = require('../../img/avatar/mahatma-gandhi@256px.png');
const robot = require('../../img/avatar/robot-01@256px.png');
const african = require('../../img/avatar/traditional-african-woman@256px.png');
const japanese = require('../../img/avatar/traditional-japanese-woman@256px.png');


class Coach extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photo_coach: ''
        };
/*
        AsyncStorage.getItem('@COACH_SELECT').then(value => {
            switch(value){
                case 'batman':
                    this.setState({photo_coach: batman});
                    console.log(batman);
                    break;
                case 'obama':
                    this.setState({photo_coach: obama});
                    break;
            }
        });
*/
    }
    render() {
        return (
            <View style={styles.container}>

                <Header> Técnico </Header>

                <ViewPhoto
                    color1={colors.primaria}
                    color2={colors.teciaria}
                    source={batman}
                />

                <ButtonText 
                    color={colors.primaria}
                    onPress={() => this.props.navigation.navigate('listaCoach')}>
                    Escolher outro técnico
                </ButtonText>

                <ScrollView>
                    <ItemFlat
                        touch
                        text1={"Olá galera linda"}
                        text2={"Olá galera linda2"}
                    />
                    <ItemFlat
                        touch
                        text1={"Olá galera linda"}
                        text2={"Olá galera linda2"}
                    />
                    <ItemFlat
                        touch
                        text1={"Olá galera linda"}
                        text2={"Olá galera linda2"}
                    />
                    <ItemFlat
                        touch
                        text1={"Olá galera linda"}
                        text2={"Olá galera linda2"}
                    />
                </ScrollView>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.branco,
    },
})

export default Coach;

