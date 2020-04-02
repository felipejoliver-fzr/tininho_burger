import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    TouchableHighlight,
    ScrollView
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Entypo } from '@expo/vector-icons'

import api from '../../services/api'

import logoImg from '../../assets/logo.png'
import lancheImg from '../../assets/hamburguer.jpg'
import bebidasImg from '../../assets/bebidas.jpg'
import sobremesasImg from '../../assets/sobremesas.jpg'

import styles from './styles'

import { useFonts } from '@use-expo/font'

export default function Menu() {

    const [produtos, setProdutos] = useState([])
    const [loading, setLoading] = useState(false)

    const navigation = useNavigation()

    async function loadProdutos() {

        if (loading) {
            return
        }

        setLoading(true)

        const response = await api.get('menu')

        setProdutos([...produtos, ...response.data])
        console.log(response.data)
    }

    function navigateToDetailProduct(produto) {
        console.log(produto)
        navigation.navigate('DetailsProduct', { produto })
        
    }

    useEffect(() => {

        loadProdutos()

    }, [])

    function showProdutos() {
        return produtos.map((produto, index) => {
            return (
                <TouchableOpacity
                    style={styles.rowProduto} 
                    key={produto.id}
                    onPress={() => navigateToDetailProduct(produto)}
                 >
                    <Image style={styles.imgProduto} source={lancheImg} />
                    <View style={styles.detalhesProduto}>
                        <View style={styles.containerTituloProduto}>
                            <Text style={styles.tituloProduto}>
                                {produto.titulo}

                            </Text>
                            <Text style={styles.avaliacaoProduto}>
                                <Entypo name='star' size={20} color="#fcaf17" />
                                    4,9
                                </Text>
                        </View>

                        <Text style={styles.descricaoProduto}>{produto.descricao}</Text>
                        <Text>{Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(produto.valorBase)}</Text>

                    </View>
                </TouchableOpacity>
            )
        })
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={logoImg} />
                    <Text style={styles.headerText}>
                        Bem-vindo!
                </Text>
                </View>

                <View style={styles.containerCategorias}>
                    <Text style={styles.headerText}>
                        Categorias
                </Text>

                    <View style={styles.categorias}>

                        <TouchableOpacity>
                            <View style={[styles.btnCategoria, { paddingRight: 10 }]}>
                                <Image style={styles.imgCategoria} source={lancheImg} />
                                <Text >Lanches</Text>
                            </View>

                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={[styles.btnCategoria, { paddingRight: 10 }]}>
                                <Image style={styles.imgCategoria} source={bebidasImg} />
                                <Text >Bebidas</Text>
                            </View>

                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.btnCategoria}>
                                <Image style={styles.imgCategoria} source={sobremesasImg} />
                                <Text >Sobremesas</Text>
                            </View>

                        </TouchableOpacity>

                    </View>
                </View>

                <View>

                    <Text style={styles.tituloListaProdutos}>Carnes Bovínas</Text>

                    {showProdutos()}
                    {/* <FlatList
                        style={styles.produtosList}
                       
                        data={produtos}
                        keyExtractor={produto => String(produto.id)}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={<Text style={styles.tituloListaProdutos}>Carnes Bovínas</Text>}
                        renderItem={({ item: produto }) => (

                            <View style={styles.rowProduto}>
                                <Image style={styles.imgProduto} source={lancheImg} />
                                <View style={styles.detalhesProduto}>
                                    <Text style={styles.tituloProduto}>{produto.titulo}</Text>
                                    <Text style={styles.descricaoProduto}>{produto.descricao}</Text>
                                    <Text>{produto.valorBase}</Text>
                                </View>

                            </View>

                        )}
                    /> */}
                </View>

                <View>

                    <Text style={styles.tituloListaProdutos}>Vegetarianos</Text>

                    {showProdutos()}

                </View>


            </View>
        </ScrollView>

    )
}