import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { metrics, font, colors } from '../styles';

//COMPONENTES
import Header from '../components/Header';
import ViewPhoto from '../components/ViewPhoto';
import ItemFlat from '../components/ItemFlat';
import ButtonText from '../components/ButtonText';

//FOTO 
const photo_coach = require('../../img/avatar/barack-obama@256px.png');

class Coach extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={styles.container}>

                <Header> Técnico </Header>

                <ViewPhoto
                    color1={colors.primaria}
                    color2={colors.teciaria}
                    source={photo_coach}
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

