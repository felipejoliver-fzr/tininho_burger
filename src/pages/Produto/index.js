import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './styles'
import lancheImg from '../../assets/imgs-em-alta/burger.png'
import { ScrollView } from 'react-native-gesture-handler'

import SelecaoDetalhesProduto from '../../components/SelecaoDetalhesProduto'
import { connect } from 'react-redux'

import * as CarrinhoCompraActions from '../../store/actions/carrinhoCompra'

const Produto = ({testeRedux, dispatch}) => {

    const navigation = useNavigation()
    const route = useRoute()
    
    const dadosProdutoSelecionado = route.params.produto
    
    let [estado, setEstado] = useState(dadosProdutoSelecionado)

    function navigateBack() {
        navigation.goBack()
    }

    adicionar = dados => {

        dispatch(CarrinhoCompraActions.adicionarProdutoCarrinho(dados))
        navigateBack()

    }

    return (

        <View style={styles.container}>

            <View style={styles.headerContainer}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.arrowLeft} onPress={navigateBack}>
                        <Feather name="arrow-left" size={35} color="red" />
                    </TouchableOpacity>

                    <Text style={styles.titleHeader}>DETALHES DO ITEM</Text>

                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}
                style={styles.containerScroll}>

                <View style={styles.containerLista}>

                    <Image source={lancheImg} style={styles.imageProduto} />

                    <View style={styles.containerDescricaoProduto}>

                        <Text style={styles.tituloProduto}>{estado.titulo}</Text>

                        <Text style={styles.descricaoProduto}>{estado.descricao}</Text>

                    </View>
                </View>

                <SelecaoDetalhesProduto dados={estado} adicionarCarrinho={adicionar}/>
                
            </ScrollView>
        </View>


    )
}

export default connect(state => ({ testeRedux: state.carrinhoCompra}))(Produto)