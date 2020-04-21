const INITIAL_STATE = {
    dadosCarrinho: []
}

export default function carrinhoCompra(state = INITIAL_STATE, action){
    
    switch(action.type){
        case('ADICIONAR_PRODUTO_CARRINHO'):
            
            state.dadosCarrinho.push(action.dadosProduto)
            return { ...state, dadosCarrinho: state.dadosCarrinho}
    }
    
    return state
}