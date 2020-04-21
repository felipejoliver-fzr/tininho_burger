import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Provider } from 'react-redux'
import store from './src/store'

import Routes from './src/routes'

import Menu from './src/pages/Menu'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
    
  );
}