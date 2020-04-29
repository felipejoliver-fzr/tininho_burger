import React, { useState, Component, useEffect } from 'react'

import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import lancheImg from '../../assets/hamburguer.jpg'
import styles from './styles'

import Header from '../../components/Header'

import { useFocusEffect } from '@react-navigation/native';

import { connect } from 'react-redux'

import { Entypo } from '@expo/vector-icons'

const Carrinho = ({ produtosCarrinho }) => {

    const [dadosCarrinho, setDadosCarrinho] = useState(produtosCarrinho)
    let [subTotal, setSubTotal] = useState(0)
    const navigation = useNavigation()


    useFocusEffect(
        React.useCallback(() => {
            setDadosCarrinho(produtosCarrinho)
            calcularSubTotal()
        }, [])
    )

    function navigateToDetailProduct(produto) {

        navigation.navigate('DetailsProduct', { produto })

    }

    function navigateToFinalizarCompra() {
        navigation.navigate('FinalizarPedido')
    }

    function showProdutosCarrinho(produto) {

        return (
            <TouchableOpacity
                style={styles.rowProdutoCarrinho}
                key={produto.idProduto}
                onPress={() => navigateToDetailProduct(produto)}
            >
                <Image style={styles.imgProduto} source={lancheImg} />
                <View style={styles.detalhesProduto}>
                    <View styles={styles.containerTituloProduto}>
                        <Text style={styles.tituloProduto}>
                            {produto.quantidade}x {produto.descricaoProduto}
                        </Text>
                    </View>
                    {produto.ingredientesSelecionados.map((descricao, index) => {
                        return (
                            <View key={index} style={styles.containerDescricaoIngredientes}>

                                <Text style={styles.descricaoIngrediente}>
                                    {descricao.descricao}
                                    {descricao.extra &&
                                        <Text> (extra)</Text>
                                    }
                                </Text>

                            </View>

                        )
                    })}
                    <View style={styles.labelPreco}>

                        <Text>{Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(produto.valorTotal)}</Text>
                    </View>

                </View>

            </TouchableOpacity>
        )


    }

    function calcularSubTotal() {

        let subTotal = 0;

        for (let c = 0; c < dadosCarrinho.length; c++) {
            subTotal = dadosCarrinho[c].valorTotal + subTotal
        }

        setSubTotal(subTotal)
    }

    return (
        <View style={styles.container}>

            <View style={{ flex: 1 }}>
                <Header titulo='MEU CARRINHO' />
                {dadosCarrinho.length !== 0 &&
                    <View style={styles.containerLista}>
                        <FlatList data={dadosCarrinho} keyExtractor={item => `${item.idProduto}`}
                            renderItem={({ item }) => showProdutosCarrinho(item)} />
                    </View>
                }


                {dadosCarrinho.length === 0 &&
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text>O carrinho está vazio!</Text>
                    </View>
                }


            </View>


            {dadosCarrinho.length !== 0 &&
                <View style={styles.containerInferior}>
                    <Text style={styles.labelSubTotal}>
                        Subtotal: {Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(subTotal)}
                    </Text>


                    <TouchableOpacity style={styles.buttonContinuar}
                        onPress={() => navigateToFinalizarCompra()}>

                        <Text style={styles.labelButton}>Continuar</Text>

                    </TouchableOpacity>
                </View>
            }



        </View>
    )
}

export default connect(state => ({ produtosCarrinho: state.carrinhoCompra.dadosCarrinho }))(Carrinho)