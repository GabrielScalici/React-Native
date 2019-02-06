
import React, { Component } from 'react';
import { Platform, StyleSheet, View, ScrollView, Image, TextInput, TouchableOpacity, Text } from 'react-native';
//import { Container, Header, Item, Input, Icon, Button, Text, Content, Spinner } from 'native-base';
import axios from 'axios';
import renderIf from 'render-if';

import Infos from './component/Infos';

type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props);

        this.state = {
            usern: '',
            valores: '',
            name: '',
            photo: '',
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                    <TextInput
                        placeholder="Digite aqui"
                        placeholderTextColor='#8093A5'
                        onChangeText={usern => this.setState({ usern })}
                    />
                    <TouchableOpacity
                        onPress={() => {
                            //alert(this.state.usern);
                            axios.get('https://api.github.com/users/' + this.state.usern)
                                .then(response => {
                                    console.log(response);
                                    this.setState({ valores: response });
                                    console.log(this.state.valores);
                                    this.setState({ name: response.data['name'] });
                                    this.setState({ photo: response.data['avatar_url'] });

                                })
                                .catch(function (error) {
                                    console.log(error);
                                });

                            console.log("NAME: " + this.state.name);
                            console.log("PHOTO: " + this.state.photo);
                            //this.forceUpdate();
                        }}
                    >
                        <Text style={{ fontSize: 25 }}>
                            Click
                        </Text>
                    </TouchableOpacity>
                    
                        <Text style={{ fontSize: 25 }}>
                            {this.state.name}
                        </Text>
                        <Image source={{ uri: this.state.photo }} style={{ width: 95, height: 95 }} />
                        {/* <Image source={require('./imagemtop.png')} style={{width: 50, height: 50}} /> */}

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});
