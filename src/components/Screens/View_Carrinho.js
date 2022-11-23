import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Modal, TextInput, Text, TouchableOpacity, StatusBar, KeyboardAvoidingView, Platform, ScrollView, Dimensions, Button } from 'react-native';
import { ActivityIndicator } from "react-native";
import 'react-native-reanimated';
import { set } from 'react-native-reanimated';
import Arrow_back from '../../img/arrow_back.svg';
import Icon_Close from '../../img/icon_close.svg';
import Product_Car from '../Components/Product_Car';
import Icon_car from '../../img/icon_car_blue.svg';

const View_Carrinho = ({ navigation, route }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [cep, setCep] = useState('');
    const [cupom, setCupom] = useState(0);
    const [cupomDiscount, setCupomDiscount] = useState(0);
    const [total, setTotal] = useState(0.0);
    const [frete, setFrete] = useState(0.0);
    const [product, setProduct] = useState(
        {name: 'Tênis Ferrari' ,color: 'Azul', size: '43', quantity: 1, total: 799.00});
    const [productList, setProductList] = useState([]);
    const [modalFreteVisible, setModalFreteVisible] = useState(false);
    const [carProductList, setCarProductList] = [route.params.carProductList, route.params.setCarProductList];

    const cep_is_valid = () => {
        return cep != "";
    }

    const cupom_is_valid = (cupom) => {
        return cupom.toUpperCase() === 'CUPOM';
    }

    const validate_cupom = (cupom) => {
        cupom_is_valid(cupom) ? setCupomDiscount(-10) : setCupomDiscount(0);

        setTotal(total)
    }

    const change_product_list = () => {
        let prodList = [];
        carProductList.map(prod => {
            let product = {};

            product.code = prod.codigo,
            product.name = prod.name,
            product.color = prod.color,
            product.size = prod.size,
            product.quantity = 1,
            product.total = prod.value

            prodList.push(product);
        })
        setProductList(prodList)
    };

    const change_cupom = (cupom) => {
        setCupom(cupom);
        if(cupom === "") {
            setCupomDiscount(0);   
        }

        setCupom(cupom);
    };

    const display_total = () => {
        let total = 0;
        carProductList.length > 0 ? carProductList.map(product => {
            total = total + product.value;
        })
        : total = 0;

        setTotal(total)
    }

    const display_subtotal = () => {
        
        return (
            productList.length > 0 ? productList.map(product => (
                <View key={product.name} style={style.details_line}>
                    <Text style={style.details_text}>Subtotal(1 item)</Text>
                    <Text style={style.details_text_bold}>{product.total.toFixed(2)}</Text>
                </View>
            )) : (
                <View style={style.details_line}>
                    <Text style={style.details_text}>Nenhum Produto adicionado!</Text>
                </View>
            )
        );
    }
    useEffect( () => {
        navigation.setOptions({
            carProductList: carProductList, setCarProductList: setCarProductList,
        })
        change_product_list();
        display_total();
    }, [navigation, carProductList, setCarProductList]);

    useEffect( () => {
        
      }, []);

    const display_product_car = () => {
        return (
            productList.length > 0 ? productList.map(product => (
                <Product_Car key={product.name} name={product.name} color={product.color} size={product.size} quantity={product.quantity} total={product.total} />
        )):
                <Text style={style.no_products}> Seu carrinho está vazio! :(</Text>
        )
    }

    return (<View style={style.bg_view}>
        { isLoading ? 
        <View style={{ position: 'absolute', flex: 1, justifyContent: "center", alignItems: "center", zIndex: 999, height: '100%', width: '100%', backgroundColor: '#00000099' }}>
            <ActivityIndicator color={"#fff"} size={50} /> 
        </View> : <></>}
        <KeyboardAvoidingView behavior={ Platform.OS == 'ios' ? 'padding' : 'height' } keyboardVerticalOffset={10}>
            <ScrollView>
                <View style={style.container}>
                    <View style= {style.header}>
                        <View style={style.header_text}>
                            <TouchableOpacity 
                                onPress={() => navigation.navigate('Home', { name: 'Jane' })}>
                                <Arrow_back width={25} height={25} fill={'#0066FF'} />
                            </TouchableOpacity>
                            <Text style={style.header_title}>Seu Carrinho 
                                <Icon_car style={style.header_car_icon} width={25} height={25} fill={'#0066ff'} />
                            </Text>
                        </View>
                    </View>
                    <View style= {style.content}>
                        {display_product_car()}
                        <Text style={style.text_cupom}>Adicione um cupom</Text>
                        <View style={style.cupom_container}>
                            <TextInput style={style.input_text} placeholder='Ex. NATAL50' autoCapitalize = {"characters"}
                                    onChangeText={(cupom) => change_cupom(cupom)}
                                />
                            <TouchableOpacity style={style.cupom_button} onPress={() => validate_cupom(cupom)}>
                                <Text style={style.text_comprar}>Aplicar</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => setModalFreteVisible(true)}>
                            <Text style={style.prazo}>Simule o frete e prazo de entrega</Text>
                        </TouchableOpacity>
                        <View style={style.details_container}>
                            {display_subtotal()}
                            <View style={style.details_divisor}></View>
                            <View style={style.details_line}>
                                <Text style={style.details_text}>Cupom de desconto</Text>
                                <Text style={style.details_text_bold}>{cupomDiscount.toFixed(2)}</Text>
                            </View>
                            <View style={style.details_divisor}></View>
                            <View style={style.details_line}>
                                <Text style={style.details_text}>Frete</Text>
                                <Text style={style.details_text_bold}>{frete.toFixed(2)}</Text>
                            </View>
                            <View style={style.details_divisor}></View>
                            <View style={style.details_line}>
                                <Text style={style.details_text}>Total</Text>
                                <Text style={style.details_text_bold}>{(total+frete+cupomDiscount).toFixed(2)}</Text>
                            </View>
                        </View>
                        <View style={style.buttons_container} >
                            <TouchableOpacity style={style.btn_comprar}
                                onPress={() => { alert('Pagamento!'); }}>
                                <Text style={style.text_comprar}>Finalizar pedido</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.btn_carrinho}
                                onPress={() => { navigation.navigate('Home', {});}}>
                            <Text style={style.text_carrinho}>Escolher mais produtos</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <Modal 
                    animationType="slide"
                    transparent={true}
                    visible={modalFreteVisible}
                    onRequestClose={() => {
                        setModalFreteVisible(!modalFreteVisible);
                    }}>
                    <View style={style.modal}>
                        <View style={style.modal_container}>
                            <View style={style.modal_header}>
                                <Text style={style.modal_title}>Prazo de entrega:</Text>
                                <TouchableOpacity style={style.modal_close} onPress={() => {setModalFreteVisible(!modalFreteVisible);  cep_is_valid() ? setFrete(19.90): setFrete(0)}}>
                                    <Icon_Close width={25} height={25} />
                                </TouchableOpacity>
                            </View>
                            <View style={style.modal_content}>
                                <TextInput style={style.textinput_cep} placeholder='Insira seu CEP' autoCapitalize = {"characters"}
                                    onChangeText={(cep) => {setCep(cep);}} value = {cep}
                                />
                                <TouchableOpacity style={style.btn_comprar}
                                onPress={() => { cep_is_valid() ? (setFrete(19.90), setModalFreteVisible(!modalFreteVisible)): setFrete(0) }}>
                                    <Text style={style.text_comprar}>Consultar prazo e valores</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </ScrollView>
        </KeyboardAvoidingView>
    </View> );
}

const style = StyleSheet.create({
    bg_view: {
        width: '100%',
		height: '100%',
		marginTop: StatusBar.currentHeight,
		flex: 1,
    },
	container: {
		height: '100%',
		width: Dimensions.get('window').width,
		marginBottom: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
	},
    header: {
        width: '90%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    header_text: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 40,
        paddingHorizontal: 40,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    header_title: {
        display: 'flex',
        width: '100%',
        color: '#0066FF',
        alignItems: 'flex-end',
        justifyContent: 'center',
        fontSize: 26,
        textAlign: 'right',
    },
    content: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text_cupom: {
        width: '80%',
        color: '#333333',
        fontSize: 14,
        fontWeight: '600',
    },
    cupom_container: {
        display: 'flex',
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-between'
    },
    input_text: {
        width: '70%',
        minWidth: 100,
        marginVertical: 10,
		backgroundColor: '#fff',
		padding: 15,
		paddingEnd: 50,
		marginVertical: 5,
		borderRadius: 4,
		borderWidth: 1,
		borderColor: '#D8D8D8',
		color: '#757575',
	},
    cupom_button: {
        height: 55,
        padding: 10,
        backgroundColor: '#0067FF',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginVertical: 10,
        marginHorizontal: 10,
    },
    prazo: {
        fontSize: 16,
        fontWeight: '500',
        textDecorationLine: 'underline',
        color: '#000',
        textAlign: 'center',
        marginVertical: 30
      },
      details_container: {
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      },
      details_line: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
      },
      details_text: {
        fontSize: 14,
        fontWeight: '500',
      },
      details_text_bold: {
        fontSize: 14,
        fontWeight: '700',
      },
      details_divisor: {
        width: '100%',
        height: 2,
        backgroundColor: '#000',
        opacity: 0.1,
      },
      buttons_container: {
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
      },
      btn_comprar: {
        width: '100%',
        height: 55,
        backgroundColor: '#0067FF',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginVertical: 10,
        marginHorizontal: 10,
      },
      text_comprar: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
      },
      btn_carrinho: {
        width: '100%',
        height: 55,
        borderWidth: 3,
        backgroundColor: '#fff',
        borderColor: '#0067FF',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginVertical: 10,
        marginHorizontal: 10,
      },
      text_carrinho: {
        color: '#0067ff',
        fontSize: 16,
        fontWeight: '700',
      },
      no_products: {
        fontSize: 24,
        fontWeight: '500',
        marginVertical: 10,
      },
      modal: {
        height: '100%',
		width: Dimensions.get('window').width,
        backgroundColor: '#00000080',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    modal_container: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    modal_header: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    modal_title: {
        fontSize: 16,
        fontWeight: '400',
        color: '#333333',
    },
    modal_close: {
        width: 40,
        height: 40,
        borderRadius: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal_content: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textinput_cep: {
        width: '100%',
        minWidth: 100,
        marginVertical: 10,
		backgroundColor: '#fff',
		padding: 15,
		paddingEnd: 50,
		marginVertical: 5,
		borderRadius: 4,
		borderWidth: 1,
		borderColor: '#D8D8D8',
		color: '#757575',
    },
});


export default View_Carrinho;