import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {Icon, Header, Left, Container, Content} from 'native-base';

export default class mainScreen extends Component<Props> {

    static navigationOptions = {
        tabBarLabel: 'Video Screen',
        drawerIcon: (tintColor) => {
            return(
                <MaterialIcons
                    name="folder"
                    size={24}
                    style={{color: tintColor}}
                >
                </MaterialIcons>
            );
        }
    }

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Icon name={"ios-menu"} onPress={() => this.props.navigation.navigate('DrawerOpen')} />
                    </Left>
                </Header>
                <Content contentContainertyle={{ flex: 1}} >
                    <Text> Olá </Text>

                </Content>


            </Container>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
