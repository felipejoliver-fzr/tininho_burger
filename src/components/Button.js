import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

export default props => {
    return (
        <TouchableOpacity {...props} style={[styles.buttonContinuar, props.style]}>

            <Text style={styles.labelButton}>{props.label}</Text>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContinuar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        backgroundColor: '#B6382D',
        padding: 10,
    },
    labelButton: {
        color: '#fff',
        fontSize: 17,
        fontWeight: '600',
    }
})
