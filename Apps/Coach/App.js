import React, {Component} from 'react';
import { createBottomTabNavigator } from 'react-navigation';

import { metrics, colors } from './src/styles';

import Estudar from './src/model/Estudar';
import Perfil from './src/model/Perfil';

export default createBottomTabNavigator({
  Estudar: Estudar,
  Perfil: Perfil,
});
