import React from 'react'
import { Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'

export default props => {
    return (
        <TouchableOpacity {...props} style={[styles.button, props.style]}>

            <Text style={[styles.labelButton, 
                props.loadingButton ? styles.labelLoagingButton : null]}>{props.label}</Text>
            {
                props.loadingButton &&
                <ActivityIndicator color='#000' style={{marginLeft: 10}} />
            }
            

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
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
    },
    labelLoagingButton: {
        color: '#47525e',
        fontSize: 17,
        fontWeight: '600',
    }
})
