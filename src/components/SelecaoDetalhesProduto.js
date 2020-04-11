import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'

export default props => {

    let [ativo, setAtivo] = useState(false)
    let [ingredientes, setIngredientes] = useState(props.dados.ingredientes)
    let [quantidadeIngredienteSelecionado, setQuantidadeIngredienteSelecionado] = useState(0)
    let [quantidadeProduto, setQuantidadeProduto] = useState(1)
    let [valorTotalProduto, setValorTotalProduto] = useState(props.dados.valorBase)


    function selecionou(indexOpcaoSelecionada, indexIngredienteSelecionado, isActive) {

        let cloneState = ingredientes

        for (let c = 0; c < cloneState[indexIngredienteSelecionado].opcoes.length; c++) {
            if (indexOpcaoSelecionada !== c) {
                cloneState[indexIngredienteSelecionado].opcoes[c].ativo = false;
            } else {
                if (isActive) {
                    cloneState[indexIngredienteSelecionado].opcoes[c].ativo = false;

                } else {
                    cloneState[indexIngredienteSelecionado].opcoes[c].ativo = true;
                }
            }
        }

        setIngredientes(cloneState)
        setAtivo(!ativo)

        if (cloneState[indexIngredienteSelecionado].min == 1) {
            setQuantidadeIngredienteSelecionado(1)
        }

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

    function rowIngrediente(ingre, indexIngrediente) {
        return ingre.map((ingredi, index) => {
            return (
                <TouchableOpacity
                    style={styles.rowAdicional}
                    onPress={() => selecionou(index, indexIngrediente, ingredi.ativo)}
                    key={ingredi.id}>

                    <View style={{ flexDirection: 'column', marginBottom: 10 }}>
                        <Text style={styles.tituloIngrediente}>{ingredi.titulo}</Text>
                        <Text style={styles.valorIngrediente}>+ R$ {ingredi.valor}</Text>
                    </View>

                    <View style={styles.done}>
                        {getSelectButton(ingredi.ativo)}
                    </View>

                </TouchableOpacity>
            )
        })

    }

    function quantidadeProdutoCarrinho(tipo) {
        
        let quantidade = quantidadeProduto;

        switch (tipo) {
            case 'adicionar':
                quantidade = quantidadeProduto + 1
                setQuantidadeProduto(quantidade)
                break
            case 'subtrair':
                if (quantidadeProduto > 1 ) {
                    console.log('caiu aqui')
                    quantidade = quantidadeProduto - 1
                setQuantidadeProduto(quantidade)
                }
                break
        }

        setValorTotalProduto(props.dados.valorBase * quantidade)

    }

    function viewIngrediente() {
        
        return ingredientes.map((ingrediente, index) => {

            return (
                <View key={index}>
                    <View style={styles.tarjaIngredientes}>

                        <View>
                            <Text style={styles.tituloTarja}>{ingrediente.titulo}</Text>
                            <Text style={styles.quantidadeIngredienteObrigatorios}>
                                <Text style={styles.quantidadeIngredientes}>{quantidadeIngredienteSelecionado}</Text>
                                <Text> de </Text>
                                <Text style={styles.quantidadeIngredientes}>{ingrediente.max}</Text>

                            </Text>
                        </View>

                        {ingrediente.obrigatorio &&
                            <View style={styles.sinalizadorObrigatorio}>
                                <Text style={styles.textSinalizadorObrigatorio}>OBRIGATÓRIO</Text>
                            </View>
                        }

                    </View>

                    {rowIngrediente(ingrediente.opcoes, index)}

                </View>

            )
        })
    }
    return (
        <View>
            {viewIngrediente()}

            <View style={styles.containerBotoes}>
                <View style={styles.botaoQuantidade}>
                    <TouchableOpacity onPress={() => quantidadeProdutoCarrinho('subtrair')}>
                        <Feather name="minus" size={17} />
                    </TouchableOpacity>

                    <Text style={styles.quantidadeProdutos}>{quantidadeProduto}</Text>

                    <TouchableOpacity onPress={() => quantidadeProdutoCarrinho('adicionar')}>
                        <Feather name="plus" size={17} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.botaoAdicionarNoCarrinho}
                    onPress={() => props.adicionarCarrinho && props.adicionarCarrinho(ingredientes)}>
                    <Text style={styles.textAdicionarNoCarrinho}>Adicionar</Text>
                    <Text style={styles.textAdicionarNoCarrinho}>{Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(valorTotalProduto)}</Text>
                </TouchableOpacity>

                <View>

                </View>
            </View>

        </View>
    )

}



const styles = StyleSheet.create({
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
    rowAdicional: {
        marginTop: 10,
        height: 50,
        flexDirection: 'row',
        //paddingHorizontal: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 0.3,
        marginRight: 15,
        marginLeft: 15

    },
    tituloIngrediente: {
        fontSize: 20,
        fontWeight: '400'
    },
    valorIngrediente: {
        fontSize: 20,
        fontWeight: '200'
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
    },
    containerBotoes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginTop: 15,
        marginBottom: 15,
    },
    botaoQuantidade: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 0.3,
        borderRadius: 3,
        padding: 10,
        marginRight: '5%',
        flex: 1

    },
    botaoAdicionarNoCarrinho: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 3,
        backgroundColor: '#B6382D',
        padding: 10,
        flex: 2
    },
    textAdicionarNoCarrinho: {
        color: '#fff',
        fontSize: 17,
        fontWeight: '600',

    },
    quantidadeProdutos: {
        fontSize: 17
    }
})