import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import Login from '../Login'

const Perfil = ({ dadosPerfil }) => {
    console.log(dadosPerfil, 'opa')
    return (

        <View style={{flex: 1}}>
            {dadosPerfil.logado &&
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <Text style={{ fontSize: 30 }}>Tela Perfil</Text>
                </View>
            }

            {!dadosPerfil.logado &&
               <Login />
            }



        </View>
    )
}

export default connect(state => ({ dadosPerfil: state.perfil.dadosPerfil }))(Perfil)