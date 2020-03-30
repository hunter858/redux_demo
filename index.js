/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
//import Demo1 from "./Demo1";
// import { AppRoot } from "./AppRoot";
import {name as appName} from './app.json';
import Main from "./src/containers/index";
AppRegistry.registerComponent(appName, () => Main);
