import { StyleSheet, Dimensions } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20  
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headerText: {
        //fontFamily: 'Lato-Regular',
        fontSize: 35,
        fontWeight: '500',
        color: '#47525e'
    },

    containerCategorias: {
        paddingTop: 20
    },

    categorias: {
        flexDirection: 'row',
        paddingTop: 10
    }, 

    imgCategoria: {
        borderRadius: 8,
    },

    btnCategoria: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    tituloListaProdutos: {
        fontSize: 25,
        fontWeight: '600',
        color: '#47525e',
        marginBottom: 20,
        marginTop: 15
    },

    produtosList: {
        paddingTop: 16,
        
    },  

    rowProduto: {
        flexDirection: 'row',
        marginBottom: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#999'
        
    },

    imgProduto: {
        borderRadius: 8,
        marginBottom: 10
    },

    detalhesProduto: {
        marginLeft: 15
        
    },

    tituloProduto: {
        fontSize: 20
    },

    descricaoProduto: {
        fontWeight: '100',
    },

    containerTituloProduto: {
        flexDirection: 'row',
        
    }, 

    avaliacaoProduto: {
        marginLeft: 3,
        fontSize: 17
    }

    
})