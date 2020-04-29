import React from 'react'
import { View, Text } from 'react-native'
import Header from '../../../components/Header'
import { useNavigation, useRoute } from '@react-navigation/native'

import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function MeusDados() {

    const navigation = useNavigation()

    function navigateBack() {
        navigation.goBack()
    }


    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                <Header titulo='MEUS DADOS' showButtonReturn={true}/>
                
                <Text style={{ fontSize: 30 }}>Meus Dados</Text>
            </View>

        </View>
    )
}