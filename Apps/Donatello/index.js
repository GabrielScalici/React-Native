/** @format */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import App from './App';
import Splash from './src/base/splash';

AppRegistry.registerComponent(appName, () => Splash);
