import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
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
            estudo: '',
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <Header> Estudar </Header>
                {renderIf(!this.state.materia)(
                    <View>
                        <View style={styles.container_titulo}>
                            <Text style={styles.title_branco}> O que vamos estudar agora? </Text>
                        </View>
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
                    </View>
                )}

                {renderIf(this.state.materia)(
                    <View>
                        <Text style={styles.title}> Tudo bem, vamos estudar: </Text>
                        <LinearGradient colors={[colors.primaria, colors.teciaria]} >
                            <Text style={styles.escolha}> {this.state.materia} </Text>
                        </LinearGradient>
                        <ButtonText
                            outline
                            onPress={() => this.setState({ materia: '' })}
                            color={colors.primaria}>
                            ESCOLHER OUTRA MATÉRIA
                            </ButtonText>
                    </View>
                )
                }

                {renderIf(!this.state.estudo)(
                    <View>
                        <View style={styles.container_titulo}>
                            <Text style={styles.title_branco}> Como você irá estudar? </Text>
                        </View>
                        <View style={styles.materias}>
                            <ScrollView>
                                <ItemFlat
                                    touch
                                    onPress={() => this.setState({ estudo: 'Pomodoro' })}
                                    text1={"Pomodoro"}
                                />
                                <ItemFlat
                                    touch
                                    onPress={() => this.setState({ estudo: 'Cronômetro' })}
                                    text1={"Cronômetro"}
                                />
                                <ItemFlat
                                    touch
                                    onPress={() => this.setState({ estudo: 'Anotar Horário' })}
                                    text1={"Anotar Horário"}
                                />
                                <ItemFlat
                                    touch
                                    onPress={() => this.setState({ estudo: 'Não salvar' })}
                                    text1={"Não salvar"}
                                />
                            </ScrollView>
                        </View>
                    </View>
                )}

                {renderIf(this.state.estudo)(
                    <View>
                        <Text style={styles.title}> Ótimo, usaremos: </Text>
                        <LinearGradient colors={[colors.primaria, colors.teciaria]} >
                            <Text style={styles.escolha}> {this.state.estudo} </Text>
                        </LinearGradient>
                        <ButtonText
                            outline
                            onPress={() => this.setState({ estudo: '' })}
                            color={colors.primaria}>
                            ESCOLHER OUTRO MÉTODO
                            </ButtonText>
                    </View>
                )}


            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background_claro,
    },
    container_titulo: {
        backgroundColor: colors.primaria,
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
    title_branco: {
        fontSize: font.small_title,
        color: colors.branco,
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

