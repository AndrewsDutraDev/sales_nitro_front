import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text} from 'react-native';

import {Main_Container, Container, Content, Header, Modal_Bottom, Button_Container} from '../Containers/Index_Container';

import {Button_Back, Header_Title, Text_Field, Button_Solid, Divisor, Details_Line, Link_Button, Product_Car} from '../Components/Index_Components';

import Icon_car from '../../img/icon_car_blue.svg';

const View_Carrinho = ({ navigation, route }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [cep, setCep] = useState('');
    const [cupom, setCupom] = useState(0);
    const [cupomDiscount, setCupomDiscount] = useState(0);
    const [total, setTotal] = useState(0.0);
    const [frete, setFrete] = useState(0.0);
    const [productList, setProductList] = useState([]);
    const [modalFreteVisible, setModalFreteVisible] = useState(false);
    const [carProductList, setCarProductList] = [route.params.carProductList, route.params.setCarProductList];

    /**
     * Retorna se o cep é válido
     * @returns {Boolean}
     */
    const cep_is_valid = () => {
        return cep != "";
    }

     /**
     * Retorna se o cupom é valido
     * @param {String} cupom
     * @returns { Boolean }
     */
    const cupom_is_valid = (cupom) => {
        return cupom.toUpperCase() === 'CUPOM';
    }

    /**
     * Valida o cupom
     * @param {String} cupom 
     */
    const validate_cupom = (cupom) => {
        cupom_is_valid(cupom) ? setCupomDiscount(-10) : setCupomDiscount(0);

        setTotal(total)
    }

    /**
     * Altera a lista de produtos
     */
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

    /**
     * Aplica o cupom atual
     * @param {String} cupom 
     */
    const apply_cupom = (cupom) => {
        setCupom(cupom);

        if(cupom === "") {
            setCupomDiscount(0);   
        }
    };

    /**
     * Exibe o total do carrinho
     */
    const display_total = () => {
        let total = 0;
        carProductList.length > 0 ? carProductList.map(product => {
            total = total + product.value;
        })
        : total = 0;

        setTotal(total)
    }

    /**
     * Exibe os blocos dos produtos da lista de produtos do carrinho
     * @returns 
     */
    const car_product_container_list = () => {
        return (
            productList.length > 0 ? productList.map(product => (
                <Product_Car key={product.name} name={product.name} color={product.color} size={product.size} quantity={product.quantity} total={product.total} />
            )): (
                <Text style={style.no_products}> Seu carrinho está vazio! :(</Text>
            )
        );
    };

    /**
     * Exibe o valor de cada item da lista de produtos do carrinho
     * @returns 
     */
    const car_product_list = () => {
        return (
            productList.length > 0 ? productList.map(product => (
                <Details_Line key={product.name} text={'Subtotal(1 item)'} textBold={product.total.toFixed(2)} />
            )) : (
                <Details_Line key={'0'} text={'Nenhum Produto adicionado!'} />
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

    return (
        <Main_Container isLoading={isLoading} setIsLoading={setIsLoading}>
            <Container alignItems="center" justifyContent="flex-start" flexDirection={'column'}>
                <Header justifyContent="space-evenly">
                    <Button_Back onPress={() => navigation.navigate('Home', {})} />
                    <Header_Title text="Seu Carrinho" icon={Icon_car} />
                </Header>
                <Content>
                    { car_product_container_list() }
                    <Text style={style.text_cupom}>Adicione um cupom</Text>
                    <View style={style.cupom_container}>
                        <Text_Field width={'70%'} placeholder='Ex. NATAL50' autoCapitalize = {"characters"} 
                        onChangeText={(cupom) => apply_cupom(cupom)} />
                        <Button_Solid width={'20%'} text={'Aplicar'} backgroundColor={'#0067FF'}
                        onPress={() => { () => validate_cupom(cupom) }} />
                    </View>
                    <Link_Button text={'Simule o frete e prazo de entrega'} onPress={() => {setModalFreteVisible(true)}} />
                    <View style={style.details_container}>
                        { car_product_list() }
                        <Divisor />
                        <Details_Line text={'Cupom de desconto'} textBold={cupomDiscount.toFixed(2)} />
                        <Divisor />
                        <Details_Line text={'Frete'} textBold={frete.toFixed(2)} />
                        <Divisor />
                        <Details_Line text={'Total'} textBold={(total+frete+cupomDiscount).toFixed(2)} />
                    </View>
                    <Button_Container width={'100%'}>
                        <Button_Solid text={'Finalizar pedido'} backgroundColor={'#0067FF'}
                        onPress={() => {alert('Pagamento!'); }} />
                        <Button_Solid text={'Escolher mais produtos'} textColor={'#0067FF'} backgroundColor={'#ffffff'} borderColor={'#0067FF'}
                        onPress={() => { navigation.navigate('Home', {});}} />
                    </Button_Container>
                </Content>
            </Container>
            <Modal_Bottom title={'Prazo de entrega'} isVisible={modalFreteVisible} setIsVisible={setModalFreteVisible}
            justifyContent={'flex-end'}>
                <Text_Field placeholder={'Insira seu CEP'} autoCapitalize = {"characters"} keyboardType={'numeric'} onChangeText={(cep) => {setCep(cep);}} value = {cep} />
                <Button_Solid text={'Consultar prazo e valores'} backgroundColor={'#0067FF'}
                onPress={() => { cep_is_valid() ? (setFrete(19.90), setModalFreteVisible(!modalFreteVisible)): setFrete(0) }} />
            </Modal_Bottom>
        </Main_Container> );
}

const style = StyleSheet.create({
    text_cupom: {
        width: '100%',
        color: '#333333',
        fontSize: 14,
        fontWeight: '600',
    },
    cupom_container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    details_container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    no_products: {
        fontSize: 24,
        fontWeight: '500',
        marginVertical: 40,
    },
});

export default View_Carrinho;