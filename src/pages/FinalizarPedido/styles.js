import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        
    },
    headerContainer: {
        paddingHorizontal: 10,
        height: Constants.statusBarHeight + 45,
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
        color: '#47525e',
        flex: 3
    },
    containerConteudo: {
        paddingHorizontal: 15
    },
    arrowLeft: {
        flex: 1
    },
    containerRow: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#999',
        marginTop: 10,
    },
    tituloEntrega: {
        fontWeight: '100'
    },
    rowEndereco: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10,
        
    },
    detalhesEndereco: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',
    },
    labelTituloEndereco: {
        fontWeight: '200'
    }, 
    labelEndereco: {
        fontSize: 20,
        color: '#47525e',
        fontWeight: 'normal',
        
    },
    containerTempoEntrega: {
        marginBottom: 10
    },
    containerRowItemPedido: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    labelDescricaoProduto: {
        fontWeight: '100'
    },
    containerExtrasSelecionados: {
        flexDirection: 'row'
    },
    descricaoValores: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: 5,
        
    },
    labelSub: {
        fontSize: 20,
        fontWeight: '100'
    },
    labelTotal: {
        fontSize: 20,
        fontWeight: '300'
    },
    buttonContinuar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        backgroundColor: '#B6382D',
        padding: 10,
        marginTop: 20
    },
    labelButton: {
        color: '#fff',
        fontSize: 17,
        fontWeight: '600',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.5)'
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      done: {
        marginBottom: 10,
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    doneInterna: {
        height: 15,
        width: 15,
        borderRadius: 10,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center'
    },
})
