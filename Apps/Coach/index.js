/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import tabBar from "./src/nav/tabBar";
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => tabBar);
