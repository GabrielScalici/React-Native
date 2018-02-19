/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import Note from './Note'
import { Makiko } from 'react-native-textinput-effects';


export default class Prior extends Component {


    state={
        noteArray: [],
        noteText: '',

    }


    render() {

        let notes = this.state.noteArray.map((val, key) => {
            return <Note key={key} keyval={key} val={val} deleteMethod={() => this.deleteNote(key)}/>
        })

        return (


            <View style={styles.all}>

                <View style={styles.view_title}>
                    <Text style={styles.title}>
                        Prioridades
                    </Text>
                    <Text style={styles.subtitle}>
                        15/02 à 19/02
                    </Text>
                </View>

                <View style={styles.view_scroll}>
                    <ScrollView>
                        <TouchableOpacity onPress={this.addNote.bind(this)}>
                            <View style={styles.view_btn}>
                                <Text style={styles.btn_new}>
                                    Adicionar nova tarefa
                                </Text>
                            </View>
                        </TouchableOpacity>
                            <View style={styles.view_btn}>
                                <TextInput style={styles.textInput}
                                           maxLength = {20}
                                           onChangeText={(noteText) => this.setState({noteText})} value={this.state.noteText}
                                    placeholder='Digite Seu texto' placeholderTextColor='white' underlineColorAndroid='transparent'>
                                </TextInput>
                            </View>
                        {notes}
                    </ScrollView>
                </View>
            </View>

        );
    }

    addNote(){
        if(this.state.noteText){
            this.state.noteArray.push({'date':'data', 'note' : this.state.noteText});
            this.setState({ noteArray: this.state.noteArray});
            this.setState( {noteText : ''});
        }
    }


    deleteNote(key){
        this.state.noteArray.splice(key, 1);
        this.setState({ noteArray: this.state.noteArray });
    }

}


//Styles
const styles = StyleSheet.create({
    all: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    view_title: {
        flex: 1,
        backgroundColor: 'white',
    },
    view_scroll: {
        flex: 5,
        backgroundColor: 'white',
    },
    view_btn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
    },
    scroll_itens: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        fontFamily: 'verdana',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 2,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'normal',
        fontFamily: 'verdana',
        textAlign: 'center',
        marginTop: 2,
        marginBottom: 5,
    },
    itens: {
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'verdana',
        textAlign: 'center',
        margin: 10,
    },
    btn_new: {
        fontSize: 20,
        fontWeight: 'normal',
        fontFamily: 'verdana',
        textAlign: 'center',
        margin: 5,
        color: 'white',

    },
    textInput: {

        color: 'white',
        padding: 20,

    },
});
