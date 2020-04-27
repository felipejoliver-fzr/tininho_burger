import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import Login from '../Login'

const Perfil = ({ dadosUsuario }) => {
    
    return (

        <View style={{flex: 1}}>
            {dadosUsuario.dadosPerfil.logado &&
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <Text style={{ fontSize: 30 }}>Tela Perfil</Text>
                </View>
            }

            {!dadosUsuario.dadosPerfil.logado &&
               <Login />
            }



        </View>
    )
}

export default connect(state => ({ dadosUsuario: state.login }))(Perfil)