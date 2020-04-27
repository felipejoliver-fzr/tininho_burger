const INITIAL_STATE = {
    dadosPerfil: {
        logado: false
    }
}

export default function login(state = INITIAL_STATE, action){
    
    switch(action.type){
        case('ADICIONAR_DADOS_USUARIO'):
            
            state.dadosPerfil = {
                    logado: true,
                    nome: action.dadosUsuario.nome,
                    email: action.dadosUsuario.email,
                    celular: action.dadosUsuario.celular,
                    token: action.dadosUsuario.token
            }
            
            return { ...state, dadosPerfil: state.dadosPerfil}
    }
    
    return state
}