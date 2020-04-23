import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    imgLogo: {
        width: 250,
        height: 150,
        resizeMode: 'contain'
    },
    containerDados: {
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    input: {
        marginTop: 10,
        backgroundColor: '#FFF',
        
    },
    button: {
        width: '50%',
        marginTop: 10
    },
    label: {
        fontWeight: '500',
        color: '#47525e'
    },
    titulo: {
        fontSize: 27
        
    },
    labelNovoCadastro: {
        marginTop: 10,
        fontSize: 17,
    },
    labelCadastre: {
        marginLeft: 5,
        fontWeight: 'bold'
    }
})