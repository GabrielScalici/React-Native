import React, {Component} from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import { metrics, colors, font } from '../styles';

import Estudar from '../model/Estudar';
import Perfil from '../model/Perfil';
import Estat from '../model/Estat';
import Metas from '../model/Metas';
import Coach from '../model/Coach';


export default createBottomTabNavigator({
    Metas: Metas,
    Gráfico: Estat,
    Estudar: Estudar,
    Coach: Coach,
    Perfil: Perfil,
},
{
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Perfil') {
            iconName = 'user';
          } else if (routeName === 'Gráfico') {
            iconName = 'graph';
          } else if (routeName === 'Estudar') {
            iconName = 'notebook';
          } else if (routeName === 'Metas') {
            iconName = 'trophy';
          } else if (routeName === 'Coach') {
            iconName = 'eyeglass';
          } 
  
          // You can return any component that you like here! We usually use an
          // icon component from react-native-vector-icons
          return <Icon name={iconName} size={25} color={tintColor} />;
        },
      }),

    tabBarPosition: 'bottom',
    initialRouteName: 'Estudar',
    tabBarOptions: {
        activeTintColor: colors.primaria,
        inactiveTintColor: colors.cinza,
        inactiveBackgroundColor : '#ffffff',
        activeBackgroundColor: '#ffffff',

      },
}
);