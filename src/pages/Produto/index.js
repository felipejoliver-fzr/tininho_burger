import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'

import styles from './styles'

import lancheImg from '../../assets/imgs-em-alta/burger.jpg'
import { ScrollView } from 'react-native-gesture-handler'

export default function Produto() {

    const navigation = useNavigation()
    const route = useRoute()

    const dadosProduto = route.params.produto

    let quantidadeIngredienteSelecionado = 0
    let quantidadeIngredienteMaximo = 0

    function navigateBack() {
        navigation.goBack()
    }

    return (

        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}
                style={styles.containerScroll}>

                <View style={styles.headerContainer}>
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.arrowLeft} onPress={navigateBack}>
                            <Feather name="arrow-left" size={35} color="red" />
                        </TouchableOpacity>

                        <Text style={styles.titleHeader}>DETALHES DO ITEM</Text>

                    </View>
                </View>


                <View style={styles.containerLista}>

                    <Image source={lancheImg} style={styles.imageProduto} />

                    <View style={styles.containerDescricaoProduto}>
                        
                        <Text style={styles.tituloProduto}>{dadosProduto.titulo}</Text>

                        <Text style={styles.descricaoProduto}>{dadosProduto.descricao}</Text>

                    </View>
                </View>

                <View style={styles.tarjaIngredientes}>

                    <View style={styles.descricaoTarja}>
                        <Text style={styles.tituloTarja}>Escolha o hambúguer</Text>
                        <Text style={styles.quantidadeIngredienteObrigatorios}>
                            <Text style={styles.quantidadeIngredientes}>{quantidadeIngredienteSelecionado}</Text>
                            <Text> de </Text>
                            <Text style={styles.quantidadeIngredientes}>{quantidadeIngredienteMaximo}</Text>
                                
                        </Text>
                    </View>

                    <View style={styles.sinalizadorObrigatorio}>
                        <Text style={styles.textSinalizadorObrigatorio}>OBRIGATÓRIO</Text>
                    </View>
                    
                </View>


            </ScrollView>
        </View>


    )
}