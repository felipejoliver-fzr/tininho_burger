import { StyleSheet, Dimensions } from 'react-native'
import Constants from 'expo-constants'

const { width } = Dimensions.get('screen');

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    containerScroll: {
        width: width
        //paddingHorizontal: 10,
    },
    headerContainer: {
        paddingHorizontal: 10,
        
    },
    header: {
        flexDirection: 'row',
        paddingTop: Constants.statusBarHeight,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    arrowLeft: {
        flex:1
    },
    titleHeader: {
        flex: 3,
        fontSize: 25
    },
    containerLista: {
        paddingHorizontal: 15,
        marginTop: 10
        
    },
    imageProduto: { 
        
        width: width -30,
        height: width * 3 / 5,
        //resizeMode: 'contain',
        
    },
    containerDescricaoProduto: {
        paddingTop: 10
    },
    tituloProduto: {
        fontSize: 25,
        fontWeight: '300'
    },  
    descricaoProduto: {
        fontSize: 18,
        fontWeight: '100',
    },
    tarjaIngredientes: {
        marginTop: 10,
        height: 50,
        backgroundColor: '#f0f1f3',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    descricaoTarja: {
        
    },
    sinalizadorObrigatorio: {
        backgroundColor: '#2B343D',
        width: 110,
        height: 20,
        padding: 1,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tituloTarja: {
        fontSize: 20,
        fontWeight: '400'
       
    },
    quantidadeIngredienteObrigatorios: {
        fontSize: 15,
        fontWeight: '300',
    },
    quantidadeIngredientes: {
        fontWeight: '500',
        
    },
    textSinalizadorObrigatorio: {
        fontWeight: 'bold',
        color: '#ffffff'
    }

})