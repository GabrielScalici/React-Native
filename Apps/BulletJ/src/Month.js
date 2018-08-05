/**
 * Gabriel Henrique Campos Scalici
 * 2018 - FEB
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    AsyncStorage,
} from 'react-native';
import Note from './Note';
import { Kaede } from 'react-native-textinput-effects';


export default class Month extends Component {

    constructor(props) {
        super(props);

        this.state = {
            noteArrayM: [],
            noteTextM: '',
        };

    }

    componentWillMount(){

        //Database exists?
        AsyncStorage.getItem('@Store:month_data').then((value) => {
            if (value !== null){
                this.download_data();
            }
        });

    }

    //Function to update list
    download_data() {
        AsyncStorage.getItem('@Store:month_data').then((value) => {
            this.setState({'noteArrayM': JSON.parse(value)});
        });
    }

    //Function to save list
    save_data(){
        try {
            AsyncStorage.setItem('@Store:month_data', JSON.stringify(this.state.noteArrayM));
        } catch (error) {
            console.log('Error to save data');
        }
    }

    render() {

        //var to show in Note format
        let notes = this.state.noteArrayM.map((val, key) => {
            return <Note key={key} keyval={key} val={val} deleteMethod={() => this.deleteNote(key)}/>
        })

        return (

            <View style={styles.all}>
                <View style={styles.view_title}>
                    <Text style={styles.title}>
                        Fevereiro
                    </Text>
                    <Text style={styles.subtitle}>
                        Metas
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
                        <View>
                            <Kaede
                                onChangeText={(noteTextM) => this.setState({noteTextM})} value={this.state.noteTextM}
                                style={styles.input}
                                label={'Digite aqui'}
                                labelStyle={{
                                    color: 'white',
                                    backgroundColor: '#fcb794',
                                }}
                                inputStyle={{
                                    color: 'white',
                                    backgroundColor: '#db8d67',
                                }}
                                keyboardType="default"
                            />
                        </View>
                            {notes}
                    </ScrollView>
                </View>
            </View>
        );
    }

    //Add new note
    addNote(){
        //Check validation
        if(this.state.noteTextM){

            //Send to state array
            this.state.noteArrayM.push({'note' : this.state.noteTextM});
            this.setState({ noteArrayM: this.state.noteArrayM});

            //Clear cache
            this.setState( {noteTextM : ''});

            //Save data
            this.save_data();

        }else{
            alert('Escreva alguma nota');
        }
    }

    //Delete Note
    deleteNote(key){
        //Delete array
        this.state.noteArrayM.splice(key, 1);
        this.setState({ noteArrayM: this.state.noteArrayM });

        //Save new array
        this.save_data();
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
        marginTop:10,
    },
    view_scroll: {
        flex: 5,
        backgroundColor: 'white',
        marginTop: 1,
    },
    view_btn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
        height: 60,
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
