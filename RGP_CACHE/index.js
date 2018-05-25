import { AppRegistry } from 'react-native';
import React, {Component} from 'React';

import Splash from "./src/splash";
import Home from "./src/home";
import Comojogar from "./src/comojogar";
import Cache from "./src/cache";
import Inicio from "./src/iniciojornada";



//Desabilitar warning
console.disableYellowBox = true;

import { Router, Scene } from 'react-native-router-flux';

const App = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="splash"
                       component={Splash}
                       hideNavBar
                       initial
                />
                <Scene key="home"
                       component={Home}
                       hideNavBar

                />
                <Scene
                    key="comojogar"
                    component={Comojogar}
                    hideNavBar

                />
                <Scene
                key="cache"
                component={Cache}
                hideNavBar

                />
                <Scene
                    key="inicio"
                    component={Inicio}
                    hideNavBar

                />
            </Scene>
        </Router>
    );
}

/*
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
        return (
            mainScreen


        );


    }
}
*/

AppRegistry.registerComponent('RGP_CACHE', () => App );
