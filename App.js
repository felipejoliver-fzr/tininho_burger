import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Routes from './src/routes'

import Menu from './src/pages/Menu'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Routes />
  );
}