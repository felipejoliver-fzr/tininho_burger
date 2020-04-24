import React, { useEffect, useRef } from 'react'
import { View, TextInput, StyleSheet, Text } from 'react-native'
import { useField } from '@unform/core'
import Icon from 'react-native-vector-icons/FontAwesome'

export default props => {

    const inputRef = useRef(null)
    const { fieldName, registerField, defaultValue = "", error } = useField(props.name)

    useEffect(() => {
        inputRef.current.value = defaultValue
    }, [defaultValue])

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
            clearValue(ref) {
                ref.value = ''
                ref.clear()
            },
            setValue(ref, value) {
                ref.setNativeProps({ text: value })
                inputRef.current.value = value
            },
            getValue(ref) {
                return ref.value
            }
        })
    }, [fieldName, registerField])
    return (
        <View>
            <View style={[styles.container, props.style]}>

                <Icon name={props.icon} size={20} style={styles.icon} />

                <TextInput
                    ref={inputRef}
                    keyboardAppearance='dark'
                    defaultValue={defaultValue}
                    placeholderTextColor='#666360'
                    onChangeText={value => {
                        if (inputRef.current) {
                            inputRef.current.value = value
                        }
                    }}
                    {...props}
                    style={styles.input} />

            </View>
            {error && <Text style={styles.error}>{error}</Text>}
        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        backgroundColor: '#EEE',
        borderColor: '#47525e',
        borderRadius: 3,
        borderWidth: 0.3,
        flexDirection: 'row',
        alignItems: 'center',
        maxWidth: '80%'
    },
    icon: {
        color: '#47525e',
        marginLeft: 20
    },
    input: {
        marginLeft: 20,
        width: '100%',
        color: '#47525e'

    },
    error: {
        color: '#f00'
    }
})