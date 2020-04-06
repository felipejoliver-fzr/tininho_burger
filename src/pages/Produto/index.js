import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'

import styles from './styles'

import lancheImg from '../../assets/imgs-em-alta/burger.jpg'

export default function Produto(){

    const navigation = useNavigation()
    const route = useRoute()

    const dadosProduto = route.params.produtoß

    function navigateBack(){
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.teste} onPress={navigateBack}>
                    <Feather name="arrow-left" size={35} color="red"/>
                </TouchableOpacity>

                <Text style={styles.titleHeader}>DETALHES DO ITEM</Text>
            </View>

            <View style={styles.containerImgProduto}>
                <Image source={lancheImg} style={styles.imageProduto} />
            </View>

            
        </View>

        // <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        //     <Text style={{fontSize: 30}}>{dadosProduto.titulo}</Text>
        // </View>
    )
}