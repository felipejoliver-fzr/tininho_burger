import { Alert, Platform } from 'react-native'

const server = Platform.OS === 'ios'
    ? 'http://192.168.0.5:8888' : 'http://10.0.2.2:8888'

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

function isValidCPF() {
    let number = '123'
    console.log('esta na function cpf')
    var sum;
    var rest;
    sum = 0;
    if (number == "00000000000") return false;

    for (i=1; i<=9; i++) sum = sum + parseInt(number.substring(i-1, i)) * (11 - i);
    rest = (sum * 10) % 11;

    if ((rest == 10) || (rest == 11))  rest = 0;
    if (rest != parseInt(number.substring(9, 10)) ) return false;

    sum = 0;
    for (i = 1; i <= 10; i++) sum = sum + parseInt(number.substring(i-1, i)) * (12 - i);
    rest = (sum * 10) % 11;

    if ((rest == 10) || (rest == 11))  rest = 0;
    if (rest != parseInt(number.substring(10, 11) ) ) return false;
    return true;
}

export { server, showError, showSucess, isValidCPF }