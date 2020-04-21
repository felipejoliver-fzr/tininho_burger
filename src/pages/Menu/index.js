import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    TouchableHighlight,
    ScrollView,
    Dimensions,
    TextInput
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

    const prods = [{
        id: 1,
        titulo: 'Cheeseburger',
        descricao: 'Pão, hambúguer 100g, queijo e maionese da casa',
        valorBase: 25.9 
    },
    {
        id: 2,
        titulo: 'Cheeseburger Salad',
        descricao: 'Pão, hambúguer 100g, queijo, tomate, alface e maionese da casa',
        valorBase: 25.9 
    },
    {
        id: 3,
        titulo: 'Cheeseburger Bacon',
        descricao: 'Pão, hambúguer 100g, queijo, bacon e maionese da casa',
        valorBase: 25.9 
    },
    {
        id: 4,
        titulo: 'Cheeseburger Egg',
        descricao: 'Pão, hambúguer 100g, queijo, ovo frito e maionese da casa',
        valorBase: 25.9 
    }]

    const [produtos, setProdutos] = useState([])
    const [loading, setLoading] = useState(false)
    const navigation = useNavigation()


    async function loadProdutos() {

        if (loading) {
            return
        }

        setLoading(true)
        
        setProdutos([...produtos, ...prods])
        // const response = await api.get('menu')
        // setProdutos([...produtos, ...response.data])

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
        <View style={styles.container}>

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.containerScroll}>

                <View style={styles.headerContainer}>
                    <View style={styles.header}>
                        <Image source={logoImg} />
                        <View style={styles.headerText}>
                            <Text style={{
                                fontSize: 35,
                                fontWeight: '500',
                                color: '#47525e'
                            }}>
                                Bem-vindo!
                        </Text>
                        </View>
                    </View>

                </View>

                <View style={styles.containerLista}>

                    <View style={styles.containerCategorias}>
                        <Text style={styles.tituloCategorias}>
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
                        {/* <TouchableOpacity
                            style={styles.rowProduto}
                            key={1}
                            onPress={() => navigateToDetailProduct()}
                        >
                            <Image style={styles.imgProduto} source={lancheImg} />
                            <View style={styles.detalhesProduto}>
                                <View style={styles.containerTituloProduto}>
                                    <Text style={styles.tituloProduto}>
                                    Cheeseburger

                                    </Text>
                                    <Text style={styles.avaliacaoProduto}>
                                        <Entypo name='star' size={20} color="#fcaf17" />
                                    4,9
                                </Text>
                                </View>

                                <Text style={styles.descricaoProduto}>Pão, hambúguer 100g, queijo e maionese da casa</Text>
                                <Text>{Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(100)}</Text>

                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.rowProduto}
                            key={2}
                            onPress={() => navigateToDetailProduct()}
                        >
                            <Image style={styles.imgProduto} source={lancheImg} />
                            <View style={styles.detalhesProduto}>
                                <View style={styles.containerTituloProduto}>
                                    <Text style={styles.tituloProduto}>
                                    Cheeseburger

                                    </Text>
                                    <Text style={styles.avaliacaoProduto}>
                                        <Entypo name='star' size={20} color="#fcaf17" />
                                    4,9
                                </Text>
                                </View>

                                <Text style={styles.descricaoProduto}>Pão, hambúguer 100g, queijo e maionese da casa</Text>
                                <Text>{Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(100)}</Text>

                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.rowProduto}
                            key={3}
                            onPress={() => navigateToDetailProduct()}
                        >
                            <Image style={styles.imgProduto} source={lancheImg} />
                            <View style={styles.detalhesProduto}>
                                <View style={styles.containerTituloProduto}>
                                    <Text style={styles.tituloProduto}>
                                    Cheeseburger

                                    </Text>
                                    <Text style={styles.avaliacaoProduto}>
                                        <Entypo name='star' size={20} color="#fcaf17" />
                                    4,9
                                </Text>
                                </View>

                                <Text style={styles.descricaoProduto}>Pão, hambúguer 100g, queijo e maionese da casa</Text>
                                <Text>{Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(100)}</Text>

                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.rowProduto}
                            key={4}
                            onPress={() => navigateToDetailProduct()}
                        >
                            <Image style={styles.imgProduto} source={lancheImg} />
                            <View style={styles.detalhesProduto}>
                                <View style={styles.containerTituloProduto}>
                                    <Text style={styles.tituloProduto}>
                                    Cheeseburger

                                    </Text>
                                    <Text style={styles.avaliacaoProduto}>
                                        <Entypo name='star' size={20} color="#fcaf17" />
                                    4,9
                                </Text>
                                </View>

                                <Text style={styles.descricaoProduto}>Pão, hambúguer 100g, queijo e maionese da casa</Text>
                                <Text>{Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(100)}</Text>

                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.rowProduto}
                            key={5}
                            onPress={() => navigateToDetailProduct()}
                        >
                            <Image style={styles.imgProduto} source={lancheImg} />
                            <View style={styles.detalhesProduto}>
                                <View style={styles.containerTituloProduto}>
                                    <Text style={styles.tituloProduto}>
                                    Cheeseburger

                                    </Text>
                                    <Text style={styles.avaliacaoProduto}>
                                        <Entypo name='star' size={20} color="#fcaf17" />
                                    4,9
                                </Text>
                                </View>

                                <Text style={styles.descricaoProduto}>Pão, hambúguer 100g, queijo e maionese da casa</Text>
                                <Text>{Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(100)}</Text>

                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.rowProduto}
                            key={6}
                            onPress={() => navigateToDetailProduct()}
                        >
                            <Image style={styles.imgProduto} source={lancheImg} />
                            <View style={styles.detalhesProduto}>
                                <View style={styles.containerTituloProduto}>
                                    <Text style={styles.tituloProduto}>
                                    Cheeseburger

                                    </Text>
                                    <Text style={styles.avaliacaoProduto}>
                                        <Entypo name='star' size={20} color="#fcaf17" />
                                    4,9
                                </Text>
                                </View>

                                <Text style={styles.descricaoProduto}>Pão, hambúguer 100g, queijo e maionese da casa</Text>
                                <Text>{Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(100)}</Text>

                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.rowProduto}
                            key={7}
                            onPress={() => navigateToDetailProduct()}
                        >
                            <Image style={styles.imgProduto} source={lancheImg} />
                            <View style={styles.detalhesProduto}>
                                <View style={styles.containerTituloProduto}>
                                    <Text style={styles.tituloProduto}>
                                    Cheeseburger

                                    </Text>
                                    <Text style={styles.avaliacaoProduto}>
                                        <Entypo name='star' size={20} color="#fcaf17" />
                                    4,9
                                </Text>
                                </View>

                                <Text style={styles.descricaoProduto}>Pão, hambúguer 100g, queijo e maionese da casa</Text>
                                <Text>{Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(100)}</Text>

                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.rowProduto}
                            key={8}
                            onPress={() => navigateToDetailProduct()}
                        >
                            <Image style={styles.imgProduto} source={lancheImg} />
                            <View style={styles.detalhesProduto}>
                                <View style={styles.containerTituloProduto}>
                                    <Text style={styles.tituloProduto}>
                                    Cheeseburger

                                    </Text>
                                    <Text style={styles.avaliacaoProduto}>
                                        <Entypo name='star' size={20} color="#fcaf17" />
                                    4,9
                                </Text>
                                </View>

                                <Text style={styles.descricaoProduto}>Pão, hambúguer 100g, queijo e maionese da casa</Text>
                                <Text>{Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(100)}</Text>

                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.rowProduto}
                            key={9}
                            onPress={() => navigateToDetailProduct()}
                        >
                            <Image style={styles.imgProduto} source={lancheImg} />
                            <View style={styles.detalhesProduto}>
                                <View style={styles.containerTituloProduto}>
                                    <Text style={styles.tituloProduto}>
                                    Cheeseburger

                                    </Text>
                                    <Text style={styles.avaliacaoProduto}>
                                        <Entypo name='star' size={20} color="#fcaf17" />
                                    4,9
                                </Text>
                                </View>

                                <Text style={styles.descricaoProduto}>Pão, hambúguer 100g, queijo e maionese da casa</Text>
                                <Text>{Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(100)}</Text>

                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.rowProduto}
                            key={10}
                            onPress={() => navigateToDetailProduct()}
                        >
                            <Image style={styles.imgProduto} source={lancheImg} />
                            <View style={styles.detalhesProduto}>
                                <View style={styles.containerTituloProduto}>
                                    <Text style={styles.tituloProduto}>
                                    Cheeseburger

                                    </Text>
                                    <Text style={styles.avaliacaoProduto}>
                                        <Entypo name='star' size={20} color="#fcaf17" />
                                    4,9
                                </Text>
                                </View>

                                <Text style={styles.descricaoProduto}>Pão, hambúguer 100g, queijo e maionese da casa</Text>
                                <Text>{Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(100)}</Text>

                            </View>
                        </TouchableOpacity> */}

                    </View>

                    {/* <View>

                        <Text style={styles.tituloListaProdutos}>Vegetarianos</Text>

                        {showProdutos()}

                    </View> */}

                </View>
            </ScrollView>

        </View>

    )
}