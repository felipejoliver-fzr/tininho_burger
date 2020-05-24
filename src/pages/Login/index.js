import React, { useState, useRef } from 'react'
import {
    View,
    Text,
    Image,
    TouchableWithoutFeedback,
    Keyboard,
    TextInput,
    KeyboardAvoidingView,
    AsyncStorage
    
} from 'react-native'
import { Form } from '@unform/mobile'
import * as Yup from 'yup'

import styles from './styles'
import logo from '../../assets/imgs-em-alta/logo.png'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { TouchableOpacity } from 'react-native-gesture-handler'
import api from '../../services/api'
import { server, showError, showSucess } from '../../common'

import * as loginActions from '../../store/actions/login'
import { connect } from 'react-redux'


const Login = ({dadosUsuarioAplicacao, dispatch}) => {

    const [novoCadastro, setNovoCadastro] = useState(false)
    const [loadingButton, setLoadingButton] = useState(false)
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
                nome: novoCadastro 
                ? Yup.string().required('O nome é obrigatório')
                : '',
                email: Yup.string()
                    .email('Digite um e-mail válido')
                    .required('O e-mail é obrigatório'),
                senha: Yup.string()
                    .required('A senha é obrigatória'),
                confirmarSenha: novoCadastro 
                ? Yup.string()
                .required('A confirmação de senha é obrigatória')
                .oneOf([Yup.ref('senha'), null], 'As senhas são diferentes')
                : ''
            })

            await schema.validate(data, {
                //para fazer a validação completa mesmo se a primeira validação estiver invalida
                //se tiver true, no primeiro que estiver invalido ele para
                abortEarly: false
            })

            //se o validador estiver ok, irá executar as linhas abaixo
            //limpa os erros
            formRef.current.setErrors({})
            
            if (novoCadastro) {
                signup(data)
            } else {
                
                signin(data)
            }

            //limpa o form
            //reset()



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

    async function signup(dados) {
        try {

            await api.post(`${server}/signup`, {
                nome: dados.nome,
                email: dados.email,
                senha: dados.senha
            }).then(response => {
                if(response.status === 204){
                    showSucess('Usuário cadastrado!')
                    setNovoCadastro(false)
                }
            })

        } catch (e) {
           showError(e)
        }
    }

    async function signin (dados) {
        try {

            setLoadingButton(true);
            const res = await api.post(`${server}/signin`, {
                email: dados.email,
                senha: dados.senha
            })
            
            AsyncStorage.setItem('userData', JSON.stringify(res.data))
            api.defaults.headers.common['Authorization'] = `bearer ${res.data.token}`

            setLoadingButton(false);
            dispatch(loginActions.login(res.data))

        } catch (e) {
            setLoadingButton(false);
            showError(e)
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
                            {novoCadastro &&
                                <Input icon='user'
                                    name='nome'
                                    placeholder='Digite seu nome'
                                    style={styles.input}
                                />
                            }
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

                            {novoCadastro &&
                                <Input icon='lock'
                                    name='confirmarSenha'
                                    placeholder='Confirmar senha'
                                    style={styles.input}
                                    secureTextEntry={true}
                                />
                            }
                        </Form>

                    </View>

                    <Button label={!novoCadastro ? 'Entrar' : 'Cadastrar'}
                        loadingButton={loadingButton}
                        style={[styles.button, loadingButton ? styles.loadingButtonStyle : null]}
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

export default connect(state => ({dadosUsuarioAplicacao: state.login}))(Login)