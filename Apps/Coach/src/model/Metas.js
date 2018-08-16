import React, { Component } from 'react';
import { View, Text, StyleSheet, AsyncStorage } from 'react-native';
import { metrics, font, colors } from '../styles';

//COMPONENTES
import Header from '../components/Header';

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
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default Metas;

