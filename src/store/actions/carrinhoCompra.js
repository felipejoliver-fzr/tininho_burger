export function adicionarProdutoCarrinho(dadosProduto){
    
    return {
        type: 'ADICIONAR_PRODUTO_CARRINHO',
        dadosProduto
    }
}