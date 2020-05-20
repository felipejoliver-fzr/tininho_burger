import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import Login from '../Login'
import styles from './styles'
import Header from '../../components/Header'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import imgPerfil from '../../assets/tininho.png'

const Perfil = ({ dadosUsuario }) => {

    const menu = [
        {
            irPara: 'MeusDados',
            titulo: 'MEUS DADOS',
            subTitulo: 'Editar meus dados',
            iconName: 'user'
        },
        {
            irPara: 'MeusEnderecos',
            titulo: 'MEUS ENDEREÇOS',
            subTitulo: 'Editar meus endereços',
            iconName: 'home'
        },
        {
            irPara: 'Fidelidade',
            titulo: 'FIDELIDADE',
            subTitulo: 'Visualizar meus pontos de fidelidade',
            iconName: 'star'
        }
    ]

    const navigation = useNavigation()

    function irPara(tela) {

        navigation.navigate(tela)

    }

    function renderOpcoesMenu() {
        return menu.map((opcao) => {
            return (
                <TouchableOpacity style={styles.containerMenu}
                    key={opcao.titulo}
                    onPress={() => irPara(opcao.irPara)}>
                    <View style={[styles.square, {
                        shadowOffset: {
                            width: -3,
                            height: 3
                        },
                        shadowOpacity: 0.10,
                        shadowRadius: 7
                    }]}>

                        <View style={styles.containerConteudoMenu}>
                            <Feather name={opcao.iconName} size={30} color="#47525e" />

                            <Text style={styles.tituloMenu}>{opcao.titulo}</Text>
                        </View>

                    </View>
                </TouchableOpacity>
            )
        })
    }

    return (

        <View style={{ flex: 1 }}>
            {dadosUsuario.dadosPerfil.logado &&
                <View style={styles.container}>
                    <Header titulo='MINHA CONTA' />
                    <View style={styles.content}>

                        {/* <View style={styles.containerPerfil}>
                            <Image style={styles.containerFoto} source={imgPerfil} />

                            <Text style={styles.nomePerfil}>{dadosUsuario.dadosPerfil.nome}</Text>
                        </View> */}

                        {renderOpcoesMenu()}
                    </View>
                </View>
            }

            {!dadosUsuario.dadosPerfil.logado &&
                <Login />
            }



        </View>
    )
}

export default connect(state => ({ dadosUsuario: state.login }))(Perfil)