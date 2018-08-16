import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import { metrics, font, colors } from '../styles';
import LinearGradient from 'react-native-linear-gradient';
import renderIf from 'render-if';

//COMPONENTES
import Header from '../components/Header';
import ItemFlat from '../components/ItemFlat';
import ButtonText from '../components/ButtonText';

class Estudar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            materia: '',
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <Header> Estudar </Header>

                <Text style={styles.title}> 1. O que vamos estudar agora? </Text>
                <View style={styles.materias}>
                    <ScrollView>
                        <ItemFlat
                            touch
                            icon
                            name={"plus"}
                            text1={"Cadastrar nova matéria"}
                        />
                        <ItemFlat
                            touch
                            onPress={() => this.setState({ materia: 'Cálculo' })}
                            text1={"Cálculo"}
                        />
                        <ItemFlat
                            touch
                            onPress={() => this.setState({ materia: 'Física' })}
                            text1={"Física"}
                        />
                        <ItemFlat
                            touch
                            onPress={() => this.setState({ materia: 'ICC' })}
                            text1={"ICC"}
                        />
                        <ItemFlat
                            touch
                            onPress={() => this.setState({ materia: 'Química' })}
                            text1={"Química"}
                        />
                        <ItemFlat
                            touch
                            onPress={() => this.setState({ materia: 'React-native' })}
                            text1={"React-Native"}
                        />
                    </ScrollView>
                </View>
                <ScrollView>
                    {renderIf(this.state.materia)(
                            <View>
                                <Text style={styles.subtitle}> Tudo bem, vamos estudar: </Text>
                                <LinearGradient colors={[colors.primaria, colors.teciaria]} >
                                    <Text style={styles.escolha}> {this.state.materia} </Text>
                                </LinearGradient>
                            </View>
                    )
                }
                    <Text style={styles.title}> 2. Como você irá estudar? </Text>
                    <View style={{ flexDirection: "row", justifyContent: 'space-around', backgroundColor: colors.cinza_claro }}>
                        <ButtonText
                            color={colors.primaria}>
                            POMODORO
                    </ButtonText>
                        <ButtonText
                            color={colors.primaria}>
                            CRONÔMETRO
                    </ButtonText>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: 'space-around', backgroundColor: colors.cinza_claro }}>
                        <ButtonText
                            color={colors.primaria}>
                            ANOTAR TEMPO
                    </ButtonText>
                        <ButtonText
                            color={colors.primaria}>
                            NÃO CONTAR
                    </ButtonText>
                    </View>
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
    materias: {
        height: 250,
        backgroundColor: colors.cinza_claro,
        padding: metrics.half_padding,
    },
    title: {
        fontSize: font.small_title,
        color: colors.primaria,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily: 'System',
        margin: metrics.half_padding
    },
    subtitle: {
        fontSize: font.subtitle,
        color: colors.primaria,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily: 'System',
        margin: metrics.half_padding
    },
    escolha: {
        fontSize: font.title,
        fontFamily: 'System',
        color: colors.branco,
        textAlign: 'center',
        textAlignVertical: 'center',
        margin: metrics.half_padding
    }
})

export default Estudar;

