import React, { useState, Component, useEffect } from 'react'

import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import lancheImg from '../../assets/hamburguer.jpg'
import styles from './styles'

import { Entypo } from '@expo/vector-icons'

export default function Carrinho()  {

    const carrinho = [
        {
            idProduto: 1,
            quantidade: 1,
            valorTotal: 26.90,
            descricaoProduto: 'Cheeseburguer',
            ingredientesSelecionados: [
                {
                    idIngrediente: 1,
                    extra: false,
                    descricao: 'Hamburguer 100 gramas'
                },
                {
                    idIngrediente: 2,
                    extra: true,
                    descricao: 'Queijo'
                }
            ]

        },
        {
            idProduto: 2,
            quantidade: 1,
            valorTotal: 27.90,
            descricaoProduto: 'Salad burguer',
            ingredientesSelecionados: [
                {
                    idIngrediente: 1,
                    extra: false,
                    descricao: 'Hamburguer 100 gramas'
                }
            ]

        }, {
            idProduto: 3,
            quantidade: 1,
            valorTotal: 30.90,
            descricaoProduto: 'Bacon burguer',
            ingredientesSelecionados: [
                {
                    idIngrediente: 1,
                    extra: false,
                    descricao: 'Hamburguer 100 gramas'
                }
            ]

        },
    ]

    const [dadosCarrinho, setDadosCarrinho] = useState(carrinho)
    let [subTotal, setSubTotal] = useState(0)
    const navigation = useNavigation()

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
                            <Text style={styles.tituloProduto}>{produto.descricaoProduto}</Text>
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

    function calcularSubTotal(){
        
        let subTotal = 0;

        for(let c = 0; c < dadosCarrinho.length; c++){
            subTotal = dadosCarrinho[c].valorTotal + subTotal
        }
        
        setSubTotal(subTotal)
    }

    useEffect(() => {
        calcularSubTotal()
      });

    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <View style={styles.headerContainer}>
                    <View style={styles.header}>
                        <Text style={styles.titleHeader}>MEU CARRINHO</Text>
                    </View>
                </View>

                <View style={styles.containerLista}>
                    <FlatList data={dadosCarrinho} keyExtractor={item => `${item.idProduto}`}
                        renderItem={({item}) => showProdutosCarrinho(item)}/>
                </View>
            </View>


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
        </View>
    )
}