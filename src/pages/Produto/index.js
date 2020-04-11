import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './styles'
import lancheImg from '../../assets/imgs-em-alta/burger.png'
import { ScrollView } from 'react-native-gesture-handler'

import SelecaoDetalhesProduto from '../../components/SelecaoDetalhesProduto'

export default function Produto() {

    const navigation = useNavigation()
    
    let dados = {
        valorBase: 25.90,
        ingredientes:[
        {
            titulo: 'Escolha o hambúrguer',
            min: 1,
            max: 1,
            obrigatorio: true,
            escolhaUnica: true,
            opcoes: [
                {
                    id: 1,
                    titulo: '100 gramas',
                    valor: 0,
                    ativo: true,
                },
                {
                    id: 2,
                    titulo: '200 gramas',
                    valor: 7,
                    ativo: false,
                }

            ]

        },
        {
            titulo: 'Extras',
            min: 0,
            max: 2,
            obrigatorio: false,
            escolhaUnica: false,
            opcoes: [
                {
                    id: 1,
                    titulo: 'Ovo frito',
                    valor: 1.50,
                    ativo: false,
                },
                {
                    id: 2,
                    titulo: 'Queijo',
                    valor: 2,
                    ativo: false,
                }

            ]

        }
    ]}

    let [estado, setEstado] = useState(dados)

    function navigateBack() {
        navigation.goBack()
    }

    adicionar = dados => {
        console.log(dados)
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

                        <Text style={styles.tituloProduto}>Cheeseburger</Text>

                        <Text style={styles.descricaoProduto}>Pão, hambúguer 100g, queijo e maionese da casa</Text>

                    </View>
                </View>

                <SelecaoDetalhesProduto dados={estado} adicionarCarrinho={adicionar}/>
                
            </ScrollView>
        </View>


    )
}

