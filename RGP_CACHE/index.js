import { AppRegistry } from 'react-native';
import React, {Component} from 'React';

import Splash from "./src/splash";
import Home from "./src/home";

//Desabilitar warning
console.disableYellowBox = true;


class Main extends Component {
    constructor(props){
        super(props);
        //Estado para verificar qual a tela esta sendo exibida (INICIAL ==> splashScreen)
        this.state = { atualScreen: 'Splash' };
        //Funcao temporizadora para mudar de tela após um período
        setTimeout(() => {
            this.setState({ atualScreen: 'Home'})
        }, 2000) // 3 segundos
    }

    render() {
        const {atualScreen} = this.state
        //Analise para ver qual tela esta sendo exibida para tomar as decisoes
        let mainScreen = atualScreen === 'Splash' ? <Splash /> : <Home />
        return mainScreen

    }
}

AppRegistry.registerComponent('RGP_CACHE', () => Main );
