import React, { useState, useRef } from 'react'
import {
    View,
    Text,
    Image,
    TouchableWithoutFeedback,
    Keyboard,
    TextInput,
    KeyboardAvoidingView
} from 'react-native'
import { Form } from '@unform/mobile'
import * as Yup from 'yup'

import styles from './styles'
import logo from '../../assets/imgs-em-alta/logo.png'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Login = () => {

    const [novoCadastro, setNovoCadastro] = useState(false)
    const formRef = useRef(null)

    const habilitarNovoCadastro = () => {
        setNovoCadastro(!novoCadastro)
    }

    const DismissKeyboard = ({ children }) => (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            {children}
        </TouchableWithoutFeedback>
    );

    async function handleSubmit(data, { reset }) {
        try {

            const schema = Yup.object().shape({
                email: Yup.string()
                    .email('Digite um e-mail válido')
                    .required('O e-mail é obrigatório'),
                senha: Yup.string()
                    .required('A senha é obrigatória')
                    
            })

            await schema.validate(data, {
                //para fazer a validação completa mesmo se a primeira validação estiver invalida
                //se tiver true, no primeiro que estiver invalido ele para
                abortEarly: false
            })

            //se o validador estiver ok, irá executar as linhas abaixo

            //limpa os erros
            formRef.current.setErrors({})

            //limpa o form
            //reset()


            
        } catch (err) {
            if(err instanceof Yup.ValidationError) {
                console.log('caiu aqui')
                //se cair aqui dentro, quer dizer que o erro foi de validação
                const errorMessages = {}

                err.inner.forEach(error => {
                    errorMessages[error.path] = error.message
                })
                console.log(errorMessages)
                formRef.current.setErrors(errorMessages)
            }
        }
    }

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

                        <Form ref={formRef} onSubmit={handleSubmit}>
                            <Input icon='at'
                                name='email'
                                placeholder='E-mail'
                                keyboardType='email-address'
                                style={styles.input} />

                            <Input icon='lock'
                                name='senha'
                                placeholder='Senha'
                                style={styles.input}
                                secureTextEntry={true}
                            />
                        </Form>


                        {/* 
                        {novoCadastro &&
                            <Input icon='lock'
                                name='confirmarSenha'
                                placeholder='Confirmar senha'
                                style={styles.input}
                                secureTextEntry={true}
                            />
                        } */}

                    </View>

                    <Button label={!novoCadastro ? 'Entrar' : 'Cadastrar'}
                        style={styles.button}
                        onPress={() => formRef.current.submitForm()}
                    />

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={[styles.label, styles.labelNovoCadastro]}>
                            {!novoCadastro
                                ? 'Novo por aqui?'
                                : ''
                            }
                        </Text>
                        <TouchableOpacity onPress={() => habilitarNovoCadastro()}>
                            {!novoCadastro
                                ? <Text style={[styles.label, styles.labelNovoCadastro, styles.labelCadastre]}>Cadastre-se!</Text>
                                : <Text style={[styles.label, styles.labelNovoCadastro]}>Já possuo conta</Text>
                            }
                        </TouchableOpacity>
                    </View>

                </View>
            </DismissKeyboard>
        </KeyboardAvoidingView>


    )
}

export default Login