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
            {props.showButtonReturn &&
            <View style={styles.header}>
                
                    <TouchableOpacity style={styles.arrowLeft} onPress={navigateBack}>
                        <Feather name="arrow-left" size={35} color="red" />
                    </TouchableOpacity>
                
                <Text style={[styles.titleHeader, styles.titleHeaderWithArrow]}>{props.titulo}</Text>
            </View>
            }
            {!props.showButtonReturn &&
            <View style={styles.header}>
                
                <Text style={styles.titleHeader}>{props.titulo}</Text>
            </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        
        paddingHorizontal: 10,
        height: Constants.statusBarHeight + 45
    },
    header: {
        flex:1,
        flexDirection: 'row',
        paddingTop: Constants.statusBarHeight,
        justifyContent: 'center',
        alignItems: 'center'
    },
    arrowLeft: {
        flex:1
    },
    titleHeader: {
        
        fontSize: 27,
        fontWeight: '500',
        color: '#47525e'
    },
    titleHeaderWithArrow: {
        flex: 2.5
    }
})