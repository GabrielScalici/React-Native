import React, { Component } from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import {metrics, font, colors } from '../styles';

//COMPONENTES
import Header from '../components/Header';
import ViewPhoto from '../components/ViewPhoto';
import ButtonText from '../components/ButtonText';
import ItemFlat from '../components/ItemFlat';

const photo_user = require('../../img/user/eu.jpg');

class Perfil extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: 'Gabriel Scalici',
         };
    }
    render() {
        return (
            <View style={styles.container}>
                <Header> Perfil </Header>
                
                <ViewPhoto
                    color1={colors.primaria}
                    color2={colors.teciaria}
                    source={photo_user}
                    name={this.state.name}
                />

                <ScrollView>
                    <ButtonText
                        color={colors.primaria}
                        onPress={() => {}}>
                        TROCAR DE FOTO
                    </ButtonText>

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
    },
})

export default Perfil;

