import { StyleSheet, Dimensions } from 'react-native'
import Constants from 'expo-constants'

const { width } = Dimensions.get('screen');

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
        // width: width,
        // flex: 1,
        //backgroundColor: '#fff',
        // flex: 1,
        // width: '100%',
        // maxWidth: Dimensions.get('window').width,
        // height: Dimensions.get('window').height,
        // //paddingHorizontal: 24,
        // paddingTop: Constants.statusBarHeight + 20  
    },

    headerContainer: {
        // shadowColor: '#000',
        // shadowOffset: { width: 1, height: 5 },
        // shadowOpacity:  0.2,
        // shadowRadius: 3,
        // elevation: 5,
        //backgroundColor: '#fff',
        paddingHorizontal: 10,
    },
    header: {
        flexDirection: 'row',
        
        paddingTop: Constants.statusBarHeight,
        justifyContent: 'space-between',
        
        alignItems: 'center'
        
    },

    tituloCategorias: {
        fontSize: 30,
        fontWeight: '600',
        color: '#47525e',
        marginBottom: 15,
        
    },

    containerBuscar: {
        marginTop: 10
    },

    input: {
        height: 40, 
        backgroundColor: '#fff',
        borderColor: 'gray', 
        borderRadius: 8,
        borderWidth: 1
    },

    containerScroll: {
        //backgroundColor: '#444',
        width: width,
        //paddingHorizontal: 24,
        //paddingTop: Constants.statusBarHeight + 20,

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

    containerLista: {
        paddingHorizontal: 15,
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
        //flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#999'
        
    },

    imgProduto: {
        borderRadius: 8,
        marginBottom: 10
    },

    detalhesProduto: {
        flex:1,
        marginLeft: 15,
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