import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        justifyContent: 'center'
    },
    nomePerfil: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 45,
        color: '#47525e'
    },
    containerPerfil: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerMenu: {
        justifyContent: "space-around",
        padding: 8
    },
    containerFoto: {
        width: 150,
        height: 150,
        borderWidth: 5,
        borderRadius: 400 / 2,
        borderColor: '#47525e',
        resizeMode: 'contain'
    },
    square: {
        alignSelf: "center",
        backgroundColor: "white",
        borderRadius: 4,
        height: 70,
        shadowColor: "black",
        width: '85%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerConteudoMenu: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    tituloMenu: {
        paddingLeft: 8,
        fontSize: 22,
        color: '#47525e'
    },
    rowAdicional: {
        marginTop: 10,
        height: 50,
        flexDirection: 'row',
        borderBottomWidth: 0.3,
        marginRight: 15,
        marginLeft: 15
    },
    icon: {
        marginRight: 5
    },
    titulo: {
        fontSize: 20,
        fontWeight: '400'
    },
    subTitulo: {
        fontSize: 15,
        fontWeight: '200'
    },
})