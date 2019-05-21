/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {createStackNavigator, createAppContainer} from 'react-navigation';
import{
  Appregistry
} from 'react-native';
import Home from "./Screen/Home";
import Login from "./Screen/Login";
import findScreen from "./Screen/Findpet";
import list from "./Screen/Discover";
import Profile from "./Screen/ProFile"

const MainNavigator = createStackNavigator({
  HomeScreen: {screen: Home},
  LoginScreen: {screen: Login},
  Find:{screen:findScreen},
  Discover:{screen:list},
  Profile:{screen:Profile}
});

const App = createAppContainer(MainNavigator);

export default App;
