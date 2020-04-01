import React from 'react'
import { MaterialCommunityIcons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';

import Menu from './pages/Menu'
import Carrinho from './pages/Carrinho'
import Pedidos from './pages/Pedidos'
import Perfil from './pages/Perfil'

const Tab = createBottomTabNavigator();

export default function Routes() {

  function Tabs() {
    return (
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: { fontSize: 12, marginBottom: 5 },
          activeTintColor: '#cf1717'
        }}

      >
        <Tab.Screen
          name="Menu"
          component={Menu}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="food" size={35} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Carrinho"
          component={Carrinho}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="cart" size={35} color={color} />
            )
          }}
        />
        <Tab.Screen
          name="Meus Pedidos"
          component={Pedidos}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="file-alt" size={28} color={color} />
            )
          }}
        />
        <Tab.Screen
          name="Minha Conta"
          component={Perfil}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="person" size={35} color={color} />
            )
          }}
        />
      </Tab.Navigator>
    )
  }

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="DetailsProduct" component={Perfil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
