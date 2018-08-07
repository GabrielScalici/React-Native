import { StackNavigator } from 'react-navigation';

//Import das telas
import tabBar from './src/nav/tabBar';
import listaCoach from './src/screens/listaCoach';

// Manifest of possible screens
const PrimaryNav = StackNavigator({
    tabBar: { screen: tabBar },
    listaCoach: { screen: listaCoach },

}, {
    initialRouteName: 'tabBar',
    headerMode: 'none',
});

export default PrimaryNav