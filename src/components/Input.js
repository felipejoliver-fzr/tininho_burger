import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default props => {
    return (
            <View style={[styles.container, props.style]}>
                
                <Icon name={props.icon} size={20} style={styles.icon} />
                
                <TextInput {...props} style={styles.input}/>
                
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

    }
})