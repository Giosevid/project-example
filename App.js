import React, { Component } from 'react';
import Home from './components/Home/Home';
import Details from './components/Details/Details';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import {Provider} from 'react-redux';
import {store} from './configureStore';
import Scanner from './components/QRCodeScanner/QRCodeScanner'

const RootStack = createStackNavigator({
  Home: {
    screen: Home,
  },
  Details: {
    screen: Details,
  },
  Scanner: {
    screen: Scanner
  }
}, {
    initialRouteName: 'Scanner',
});


const Navigation = createAppContainer(RootStack);

export default class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <Navigation/>
      </Provider>
    )
  }
}