import React from 'react'
import {
    View,
    Text,
    Image,
    TouchableWithoutFeedback,
    Keyboard,
    TextInput,
    KeyboardAvoidingView
} from 'react-native'

import styles from './styles'
import logo from '../../assets/imgs-em-alta/logo.png'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { TouchableOpacity } from 'react-native-gesture-handler'


const Login = () => {

    const DismissKeyboard = ({ children }) => (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            {children}
        </TouchableWithoutFeedback>
    );

    return (

        <KeyboardAvoidingView style={{ flex: 1 }}
            behavior={Platform.select({
                ios: 'padding',
                android: null,
            })}>
            <DismissKeyboard>
                <View style={styles.container}>

                    <Image source={logo} style={styles.imgLogo} />

                    <View style={styles.containerDados}>
                        <Text style={[styles.label, styles.titulo]}>Vamos começar!</Text>
                        <Input icon='at'
                            placeholder='E-mail'
                            keyboardType='email-address'
                            style={styles.input}
                            
                        />
                        <Input icon='lock'
                            placeholder='Senha'
                            style={styles.input}
                            secureTextEntry={true}
                        />
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={[styles.label, styles.labelNovoCadastro]}>
                                Novo por aqui? 
                        </Text>
                            <TouchableOpacity>
                                <Text style={[styles.label, styles.labelNovoCadastro, styles.labelCadastre]}>Cadastre-se!</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                    <Button label='Entrar' style={styles.button} />

                </View>
            </DismissKeyboard>
        </KeyboardAvoidingView>


    )
}

export default Login