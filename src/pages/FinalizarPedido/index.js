import React, { useState } from 'react'
import { Text, View, TouchableOpacity, Modal, TouchableHighlight, StatusBar } from 'react-native'
import { SimpleLineIcons, Feather, Entypo, AntDesign, FontAwesome } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'

import styles from './styles'

export default function FinalizarPedido() {

    const navigation = useNavigation()
    
    const [formaDePagamento, setFormaDePagamento] = useState({dinheiro: false,  cartao: false})

    function navigateTo(pagina) {
        switch(pagina){
            case 'back':
                navigation.goBack()
                break
            default:
                navigation.navigate(pagina)
        }
        
    }

    function showProdutosCarrinho() {
        return (
            <View>
                <View style={styles.containerRowItemPedido}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.labelDescricaoProduto}>1x Cheeseburger</Text>

                        <View style={styles.containerExtrasSelecionados}>
                            <Entypo name="dot-single" size={20} />
                            <Text style={styles.labelDescricaoProduto}>Queijo (extra)</Text>
                        </View>
                    </View>

                    <Text style={styles.labelDescricaoProduto}>R$ 25,90</Text>
                </View>
                {/* <View style={styles.containerRowItemPedido}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.labelDescricaoProduto}>1x Cheeseburger</Text>

                        <View style={styles.containerExtrasSelecionados}>
                            <Entypo name="dot-single" size={20} />
                            <Text style={styles.labelDescricaoProduto}>Queijo (extra)</Text>
                        </View>
                    </View>

                    <Text style={styles.labelDescricaoProduto}>R$ 21,90</Text>
                </View> */}
                <View style={styles.containerRowItemPedido}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.labelDescricaoProduto}>1x Cheeseburger Bacon</Text>

                        <View style={styles.containerExtrasSelecionados}>
                            <Entypo name="dot-single" size={20} />
                            <Text style={styles.labelDescricaoProduto}>Ovo Frito (extra)</Text>
                        </View>
                    </View>

                    <Text style={styles.labelDescricaoProduto}>R$ 31,40</Text>
                </View>
                
            </View>

        )

    }

    function selecionarFormaPagamento(formaPagamentoSelecionado){
        //1 - cartão, 2 - dinheiro
        switch(formaPagamentoSelecionado){
            case 0:
                setFormaDePagamento({dinheiro: false,  cartao: true})
                break
            case 1:
                setFormaDePagamento({dinheiro: true,  cartao: false})
                break
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

    return (
        <View style={styles.container}>

            <View style={styles.headerContainer}>
                <View style={styles.header}>

                    <TouchableOpacity style={styles.arrowLeft} onPress={() => navigateTo('back')}>
                        <Feather name="arrow-left" size={35} color="red" />
                    </TouchableOpacity>

                    <Text style={styles.titleHeader}>FINALIZAR PEDIDO</Text>
                </View>
            </View>

            <View style={styles.containerConteudo}>

                <View style={styles.containerRow}>
                    <Text style={styles.tituloEntrega}>Entregar em:</Text>
                    <TouchableOpacity 
                    style={styles.rowEndereco} 
                    onPress={() => navigateTo('Endereco')}
                    >
                        <SimpleLineIcons name="home" size={40} color='#434343' />
                        <View style={styles.detalhesEndereco}>
                            <Text style={styles.labelTituloEndereco}>Casa</Text>
                            <Text style={styles.labelEndereco}>Avenida Paulista, 2000</Text>
                        </View>
                        <Feather name="arrow-right" size={35} color="#434343" />
                    </TouchableOpacity>

                    <View style={styles.containerTempoEntrega}>
                        <Text style={styles.labelTituloEndereco}>
                            Entrega estimada em:
                        <Text style={{ fontWeight: 'normal' }}>
                                30 - 40 min
                        </Text>
                        </Text>
                    </View>
                </View>

                <View style={styles.containerRow}>

                    <Text style={styles.labelEndereco}>Resumo do pedido</Text>

                    {showProdutosCarrinho()}

                </View>

                <View style={styles.containerRow}>

                    <View style={styles.descricaoValores}>
                        <Text style={styles.labelSub}>Subtotal:</Text>
                        <Text style={styles.labelSub}>R$ 57,30</Text>
                    </View>

                    <View style={styles.descricaoValores}>
                        <Text style={styles.labelSub}>Taxa de entrega:</Text>
                        <Text style={styles.labelSub}>R$ 10,00</Text>
                    </View>

                    <View style={styles.descricaoValores}>
                        <Text style={styles.labelTotal}>Total:</Text>
                        <Text style={styles.labelTotal}>R$ 67,30</Text>
                    </View>

                </View>

                <View style={styles.containerRow}>

                    <Text style={styles.labelEndereco}>Forma de pagamento</Text>

                    <View style={styles.containerRow}>

                        <TouchableOpacity style={styles.rowEndereco} 
                        onPress={() => selecionarFormaPagamento(0)}>
                            <AntDesign name="creditcard" size={35} color="#434343" />
                            <View style={styles.detalhesEndereco}>
                                <Text style={styles.labelEndereco}>Cartão</Text>
                            </View>
                            <View style={styles.done}>
                                {getSelectButton(formaDePagamento.cartao)}
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.rowEndereco}
                        onPress={() => selecionarFormaPagamento(1)}>
                            <FontAwesome name="money" size={35} color="#434343" />
                            <View style={styles.detalhesEndereco}>
                                <Text style={styles.labelEndereco}>Dinheiro</Text>
                            </View>
                            <View style={styles.done}>
                                {getSelectButton(formaDePagamento.dinheiro)}
                            </View>
                        </TouchableOpacity>

                    </View>

                </View>

                <TouchableOpacity style={styles.buttonContinuar}>

                    <Text style={styles.labelButton}>Fazer pedido</Text>

                </TouchableOpacity>

            </View>

        </View>
    )

}