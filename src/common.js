import { Alert, Platform } from 'react-native'

const server = Platform.OS === 'ios'
    ? 'http://192.168.0.2:8888' : 'http://10.0.2.2:8888'

function showError(err) {
    if(err.response && err.response.data){
        Alert.alert('Ops! Ocorreu um Problema!', err.response.data)
    }else {
        Alert.alert('Ops! Ocorreu um Problema!', err.response.data)
    }
    
}

function showSucess(msg) {
    Alert.alert('Sucesso!', msg)
}

export { server, showError, showSucess }