import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    headerContainer: {
        paddingHorizontal: 10,
        height: Constants.statusBarHeight + 45
    },
    header: {
        flexDirection: 'row',
        paddingTop: Constants.statusBarHeight,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleHeader: {
        fontSize: 27,
        fontWeight: '500',
        color: '#47525e'
    },
    containerLista: {
        flex: 1,
        paddingHorizontal: 15,
    },
    rowProdutoCarrinho: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#999'
    },
    imgProduto: {
        borderRadius: 8,
        marginBottom: 10,
        width: 130, 
        height: 80
    },
    detalhesProduto: {
        flex: 1,
        marginLeft: 15
    },
    containerTituloProduto: {
        marginLeft: 10,
        
    },
    tituloProduto: {
        fontSize: 20,
    },
    containerDescricaoIngredientes: {
        flexDirection: 'row',
        
    },
    descricaoIngrediente: {
        fontWeight: '100',
        flex: 1
    },
    labelPreco: {
        alignItems: 'flex-end'
    },
    containerInferior: {
        flex: 1, 
        maxHeight: 60,
        borderTopWidth: 0.5,
        borderTopColor: '#999',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        
    },
    labelSubTotal: {
        fontSize: 20,
    },
    buttonContinuar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        backgroundColor: '#B6382D',
        padding: 10,
        flex: 0.7
    },
    labelButton: {
        color: '#fff',
        fontSize: 17,
        fontWeight: '600',
    }
}) 