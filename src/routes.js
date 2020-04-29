import React from 'react'
import { Dimensions, Platform,
  KeyboardAvoidingView } from 'react-native'
import { MaterialCommunityIcons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';

import Menu from './pages/Menu'
import Produto from './pages/Produto'
import Carrinho from './pages/Carrinho'
import Pedidos from './pages/Pedidos'
import Perfil from './pages/Perfil'
import FinalizarPedido from './pages/FinalizarPedido'
import MeusDados from './pages/Perfil/MeusDados'
import MeusEnderecos from './pages/Perfil/MeusEnderecos'
import Fidelidade from './pages/Perfil/Fidelidade'

const Tab = createBottomTabNavigator();
const windowHeight = Dimensions.get('window').height

export default function Routes() {

  function Tabs() {
    return (
      
      
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: { fontSize: 12, marginBottom: 5 },
          activeTintColor: '#cf1717',
          style: {backgroundColor: '#fafafa'}
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
        <Stack.Screen name="DetailsProduct" component={Produto} />
        <Stack.Screen name="FinalizarPedido" component={FinalizarPedido} />
        <Stack.Screen name="MeusDados" component={MeusDados} />
        <Stack.Screen name="MeusEnderecos" component={MeusEnderecos} />
        <Stack.Screen name="Fidelidade" component={Fidelidade} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
