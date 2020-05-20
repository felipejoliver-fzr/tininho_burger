import React, { useState, useRef } from 'react'
import { View, Text, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard } from 'react-native'
import Header from '../../../components/Header'
import { useNavigation, useRoute } from '@react-navigation/native'
import Button from '../../../components/Button'
import { Form } from '@unform/mobile'
import * as Yup from 'yup'
import { connect } from 'react-redux'
import Input from '../../../components/Input'

import { isValidCpf, showSucess } from '../../../common'

import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'

const MeusDados = ({ dadosUsuario }) => {

    const formRef = useRef(null)

    const DismissKeyboard = ({ children }) => (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            {children}
        </TouchableWithoutFeedback>
    );

    async function handleSubmit(data, { reset }) {
        try {
            console.log(isValidCpf("12321"))
            const schema = Yup.object().shape({
                nome: Yup.string().required('O nome é obrigatório'),

                email: Yup.string()
                    .email('Digite um e-mail válido')
                    .required('O e-mail é obrigatório'),
                
                // senha: Yup.string()
                //     .required('A senha é obrigatória'),
                // confirmarSenha: Yup.string()
                //     .required('A confirmação de senha é obrigatória')
                //     .oneOf([Yup.ref('senha'), null], 'As senhas são diferentes')

            })

            await schema.validate(data, {
                //para fazer a validação completa mesmo se a primeira validação estiver invalida
                //se tiver true, no primeiro que estiver invalido ele para
                abortEarly: false
            })

            //se o validador estiver ok, irá executar as linhas abaixo
            //limpa os erros
            formRef.current.setErrors({})

            
            //console.log(data, 'form')


        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                //se cair aqui dentro, quer dizer que o erro foi de validação
                const errorMessages = {}

                err.inner.forEach(error => {
                    errorMessages[error.path] = error.message
                })

                formRef.current.setErrors(errorMessages)
            }
        }
    }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.select({
                ios: 'padding',
                android: null,
            })}>
            <DismissKeyboard>
                <View style={styles.container}>
                    <Header titulo='MEUS DADOS' showButtonReturn={true} />

                    <View style={styles.containerForm}>
                        <Form ref={formRef} onSubmit={handleSubmit} >

                            <Input icon='user'
                                name='nome'
                                placeholder='Digite seu nome'
                                style={styles.input}
                                fontSize={20}
                                iconSize={30}
                                defaultValue={dadosUsuario.dadosPerfil.nome}
                            />
                            <Input icon='at'
                                name='email'
                                keyboardType='email-address'
                                style={styles.input}
                                fontSize={20}
                                iconSize={30}
                                defaultValue={dadosUsuario.dadosPerfil.email}
                            />

                            <Input icon='phone'
                                name='celular'
                                placeholder='Digite seu celular'
                                style={styles.input}
                                fontSize={20}
                                iconSize={30}
                                maskType='cel-phone'
                                defaultValue={dadosUsuario.dadosPerfil.celular}
                            />

                            <Input icon='chevron-right'
                                name='cpf'
                                placeholder='Digite seu CPF (opcional)'
                                style={styles.input}
                                fontSize={20}
                                iconSize={30}
                                maskType='cpf'
                                defaultValue={dadosUsuario.dadosPerfil.cpf}
                            />

                            <Input icon='lock'
                                name='senha'
                                placeholder='Nova senha'
                                style={styles.input}
                                secureTextEntry={true}
                                fontSize={20}
                                iconSize={30}
                            />

                            <Input icon='lock'
                                name='confirmarSenha'
                                placeholder='Confirmar nova senha'
                                style={styles.input}
                                secureTextEntry={true}
                                fontSize={20}
                                iconSize={30}
                            />



                        </Form>


                        <Button label='Salvar meus dados'
                            style={styles.button}
                            onPress={() => formRef.current.submitForm()}
                        />
                    </View>

                </View>

            </DismissKeyboard>
        </KeyboardAvoidingView>
    )
}

export default connect(state => ({ dadosUsuario: state.login }))(MeusDados)