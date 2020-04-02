import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'

import styles from './styles'

export default function Produto(){

    const navigation = useNavigation()
    const route = useRoute()

    const dadosProduto = route.params.produto

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

            
        </View>

        // <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        //     <Text style={{fontSize: 30}}>{dadosProduto.titulo}</Text>
        // </View>
    )
}