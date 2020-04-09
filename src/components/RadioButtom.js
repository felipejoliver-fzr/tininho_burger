import React, { useState } from 'react'
import { View,StyleSheet, TouchableOpacity } from 'react-native'

export default props => {
    
    let [ativo, setAtivo] = useState(props.ativo)

    function selecionou(){
        setAtivo(!ativo)
    }

    function getSelectButton(ativo) {
        
        if (ativo) {
            return (
                <View style={styles.doneInterna}></View>
            )
        } else {
            return null
        }
    }

    return (
        <TouchableOpacity style={styles.done} onPress={() => selecionou()}>
                {getSelectButton(ativo)}
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    done: {
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    doneInterna: {
        height: 15,
        width: 15,
        borderRadius: 10,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center'
    }
})