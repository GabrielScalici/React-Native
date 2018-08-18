import { StackNavigator } from 'react-navigation';

//Import das telas
import tabBar from './src/nav/tabBar';
import listaCoach from './src/screens/listaCoach';
import loginScreen from './src/screens/loginScreen';
import splashScreen from './src/screens/splashScreen';

// Manifest of possible screens
const PrimaryNav = StackNavigator({
    tabBar: { screen: tabBar },
    listaCoach: { screen: listaCoach },
    loginScreen : { screen: loginScreen },
    splashScreen : { screen: splashScreen }, 

}, {
    initialRouteName: 'tabBar',
    headerMode: 'none',
});

export default PrimaryNav