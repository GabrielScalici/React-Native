import React, { Component } from 'react';
import { View, Text, StyleSheet, AsyncStorage, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { metrics, font, colors } from '../styles';
import LinearGradient from 'react-native-linear-gradient';

//COMPONENTES
import Header from '../components/Header';
import Note from '../components/Note';
import ButtonText from '../components/ButtonText';

class Metas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteArrayW: [],
            noteTextW: '',
        };
    }

    componentWillMount() {
        //Database exists?
        AsyncStorage.getItem('@Store:week_data').then((value) => {
            if (value !== null) {
                this.download_data();
            }
        });
    }
    //Function to update list
    download_data() {
        AsyncStorage.getItem('@Store:week_data').then((value) => {
            this.setState({ 'noteArrayW': JSON.parse(value) });
        });
    }

    //Function to save list
    save_data() {
        try {
            AsyncStorage.setItem('@Store:week_data', JSON.stringify(this.state.noteArrayW));
        } catch (error) {
            console.log('Error to save data');
        }
    }

    //Add new note
    addNote() {
        //Check validation
        if (this.state.noteTextW) {

            //Send to state array
            this.state.noteArrayW.push({ 'note': this.state.noteTextW });
            this.setState({ noteArrayW: this.state.noteArrayW });

            //Clear cache
            this.setState({ noteTextW: '' });

            //Save data
            this.save_data();

        } else {
            alert('Escreva alguma nota');
        }
    }

    //Delete Note
    deleteNote(key) {
        //Delete array
        this.state.noteArrayW.splice(key, 1);
        this.setState({ noteArrayW: this.state.noteArrayW });

        //Save new array
        this.save_data();
    }


    render() {
        //var to show in Note format
        let notes = this.state.noteArrayW.map((val, key) => {
            return <Note key={key} keyval={key} val={val} deleteMethod={() => this.deleteNote(key)} />
        })

        return (
            <View style={styles.container}>
                <Header> Metas </Header>
                <ScrollView>
                    <LinearGradient colors={[colors.primaria, colors.teciaria]} style={styles.container} >
                        <TextInput
                            placeholderTextColor={colors.branco}
                            placeholder={"Clique aqui para digitar a nova meta"}
                            style={styles.text_input}
                            onChangeText={(noteTextW) => this.setState({ noteTextW })} value={this.state.noteTextW}
                            value={this.state.text}
                        />
                    </LinearGradient>
                    <ButtonText
                        color={colors.primaria}
                        onPress={this.addNote.bind(this)}>
                        ADICIONAR NOVA META
                    </ButtonText>
                    {notes}
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background_claro,
    },
    view_btn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primaria,
        height: 60,
    },
    btn_new: {
        fontSize: 20,
        fontWeight: 'normal',
        fontFamily: 'System',
        textAlign: 'center',
        margin: 5,
        color: 'white',
    },
    text_input: {
        backgroundColor: 'transparent',
        height: 60,
        fontSize: font.small_title,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: colors.branco

    }
})

export default Metas;

/**
 *                     <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.view_btn}>
                        <Text style={styles.btn_new}> Adicionar nova tarefa </Text>
                    </TouchableOpacity>
 */