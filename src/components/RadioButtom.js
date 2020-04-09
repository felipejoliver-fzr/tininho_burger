import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'

export default props => {

    let ingredientesAdicionais = [
        {
            id: 1,
            titulo: '100 gramas',
            valor: 12,
            ativo: false,
        },
        {
            id: 2,
            titulo: '200 gramas',
            valor: 15,
            ativo: false,
        }
    ]



    let [ativo, setAtivo] = useState(false)

    let [ingredientes, setIngredientes] = useState(ingredientesAdicionais)

    function selecionou(index) {
        let cloneState = ingredientes
        for (let c = 0; c < ingredientes.length; c++) {

            cloneState[c].ativo = false

        }
        cloneState[index].ativo = true;

        setIngredientes(cloneState)

        console.log(ingredientes)
        //console.log(ingredientes, "Aaaaaaaaaaaaaa")
        setAtivo(!ativo)
    }

    function getSelectButton(ativo) {

        if (ativo) {
            return (
                <View style={styles.doneInterna}></View>
            )
        } else {
            return null
        }
    }

    return ingredientes.map((ingrediente, index) => {

        return (

            <TouchableOpacity
                style={styles.rowAdicional}
                onPress={() => selecionou(index)}
                key={ingrediente.id}>

                <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.tituloIngrediente}>{ingrediente.titulo}</Text>
                    <Text style={styles.valorIngrediente}>+ R$ {ingrediente.valor}</Text>
                </View>

                <View style={styles.done}>
                    {getSelectButton(ingrediente.ativo)}
                </View>

            </TouchableOpacity>

        )
    })

    // return (

    //     <View>
    //         <TouchableOpacity
    //             style={styles.rowAdicional}
    //             onPress={() => selecionou(0)}
    //             key={1}>

    //             <View style={{ flexDirection: 'column' }}>
    //                 <Text style={styles.tituloIngrediente}>Teste</Text>
    //                 <Text style={styles.valorIngrediente}>+ R$ 10</Text>
    //             </View>

    //             <View style={styles.done}>
    //                 {getSelectButton(ingredientes[0].ativo)}
    //             </View>

    //         </TouchableOpacity>

    //         <TouchableOpacity
    //             style={styles.rowAdicional}
    //             onPress={() => selecionou(1)}
    //             key={2}>

    //             <View style={{ flexDirection: 'column' }}>
    //                 <Text style={styles.tituloIngrediente}>Teste</Text>
    //                 <Text style={styles.valorIngrediente}>+ R$ 10</Text>
    //             </View>

    //             <View style={styles.done}>
    //             {getSelectButton(ingredientes[1].ativo)}
    //             </View>

    //         </TouchableOpacity>
    //     </View>

    // )
}



const styles = StyleSheet.create({
    done: {
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
    rowAdicional: {
        marginTop: 10,
        height: 50,
        flexDirection: 'row',
        paddingHorizontal: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    tituloIngrediente: {
        fontSize: 20,
        fontWeight: '400'
    },
    valorIngrediente: {
        fontSize: 20,
        fontWeight: '200'
    },
})