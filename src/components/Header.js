import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import Constants from 'expo-constants'
import { useNavigation, useRoute } from '@react-navigation/native'

export default props => {

    const navigation = useNavigation()

    function navigateBack() {
        navigation.goBack()
    }

    return (
        <View style={styles.headerContainer}>
            <View style={styles.header}>
                {props.showButtonReturn &&
                    <TouchableOpacity style={styles.arrowLeft} onPress={navigateBack}>
                        <Feather name="arrow-left" size={35} color="red" />
                    </TouchableOpacity>
                }


                <Text style={styles.titleHeader}>{props.titulo}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        paddingHorizontal: 10,
        height: Constants.statusBarHeight + 45
    },
    header: {
        flexDirection: 'row',
        paddingTop: Constants.statusBarHeight,
        justifyContent: 'center',
        alignItems: 'center'
    },
    arrowLeft: {
        flex:1
    },
    titleHeader: {
        flex: 2.5,
        fontSize: 27,
        fontWeight: '500',
        color: '#47525e'
    },
})