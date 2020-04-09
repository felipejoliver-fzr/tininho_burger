import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './styles'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button'

import lancheImg from '../../assets/imgs-em-alta/burger.png'
import { ScrollView } from 'react-native-gesture-handler'

import RadioButtom from '../../components/RadioButtom'

export default function Produto() {

    let ingredientesAdicionais = [
        {
            id: 1,
            titulo: '100 gramas',
            valor: 12,
            ativo: false,
        },
        {
            id: 2,
            titulo: '200 gramas',
            valor: 15,
            ativo: false,
        }
    ]

    let [state, setState] = useState(ingredientesAdicionais)

    const navigation = useNavigation()
    const route = useRoute()

    let quantidadeIngredienteSelecionado = 0
    let quantidadeIngredienteMaximo = 0

    

    function selecionaItem(index) {
        ingredientesAdicionais[index - 1].ativo = !ingredientesAdicionais[index - 1].ativo
        console.log(state[0].ativo)
    }

    function showIngredientesAdicionais() {
        return state.map((ingrediente, index) => {
            return (

                <TouchableOpacity
                    style={styles.rowAdicional}
                    onPress={() => selecionaItem(ingrediente.id)}
                    key={index}>

                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.tituloIngrediente}>{ingrediente.titulo}</Text>
                        <Text style={styles.valorIngrediente}>+ R$ {ingrediente.valor}</Text>
                    </View>


                        <RadioButtom ativo={ingrediente.ativo} />
                    
                    

                </TouchableOpacity>

            )
        })
    }

    function seleciona(){
        console.log('oi')
    }

    

    function navigateBack() {
        navigation.goBack()
    }

    var radio_props = [
        { label: 'param1', value: 0 },
    ];



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

                        <Text style={styles.tituloProduto}>CHeeseburger</Text>

                        <Text style={styles.descricaoProduto}>Pão, hambúguer 100g, queijo e maionese da casa</Text>

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

                {showIngredientesAdicionais()}

                
            </ScrollView>
        </View>


    )
}

