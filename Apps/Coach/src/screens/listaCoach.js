import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';

import { metrics, font, colors } from '../styles'; 

//componentes
import ListCoach from '../components/ListCoach';

//Fotos dos tecnicos
const batman = require('../../img/avatar/batman@256px.png');
const obama = require('../../img/avatar/barack-obama@256px.png');
const chaplin = require('../../img/avatar/charlie-chaplin@256px.png');
const cr7 = require('../../img/avatar/cristiano-ronaldo@256px.png');
const gandhi = require('../../img/avatar/mahatma-gandhi@256px.png');
const robot = require('../../img/avatar/robot-01@256px.png');

class listaCoach extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <ListCoach
                        img = {batman}
                        name = {"Batman"}
                    />
                    <ListCoach
                        img = {obama}
                        name = {"Obama"} 
                    />  
                    <ListCoach
                        img = {chaplin}
                        name = {"Chaplin"} 
                    />
                    <ListCoach
                        img = {cr7}
                        name = {"Cristiano R."} 
                    />
                    <ListCoach
                        img = {gandhi}
                        name = {"Gandhi"} 
                    />
                    <ListCoach
                        img = {robot}
                        name = {"Robô"} 
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