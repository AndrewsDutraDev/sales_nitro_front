import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import {Main_Container, Container, Content, Header, Button_Container,} from '../Containers/Index_Container';
import {Button_Back, Header_Title, Button_Solid, Divisor, Details_Line, } from '../Components/Index_Components';
import Payment_Delivery_Data from "../Components/Payment_Delivery_Data";
import Payment_Delivery_Type from "../Components/Payment_Delivery_Type";
import Payment_Forms from "../Components/Payment_Forms";

const Payment = ({ navigation, route }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [frete, setFrete] = useState(route.params.frete);
    const [total, setTotal] = useState(route.params.total);
    // const [carProductList, setCarProductList] = [route.params.carProductList, route.params.setCarProductList];

    return (
        <Main_Container isLoading={isLoading} setIsLoading={setIsLoading}>
            <Container alignItems="center" justifyContent={'center'} flexDirection={'column'}>
                <Header justifyContent="space-evenly">
                    <Button_Back onPress={() => navigation.navigate('Profile_Store', {})} />
                    <Header_Title text="Finalizar Pedido" />
                </Header>
                <Content width={'80%'}>
                    <Payment_Delivery_Data />
                    <Payment_Delivery_Type />
                    <Payment_Forms />
                    <View style={style.details_container}>
                        <Details_Line text={'Frete'} textBold={frete === 0.0 ? 'Gratis' : frete.toFixed(2)} textBoldColor={ frete === 0.0 ? '#73CE7C' : '#000'} />
                        <Divisor />
                        <Details_Line text={'Total'} textBold={total.toFixed(2)} />
                    </View>
                    <Button_Container width={'100%'}>
                        <Button_Solid text={'Concluir Compra'} backgroundColor={'#0067FF'}
                        onPress={() => {alert('Compra Realizada!'); navigation.navigate('Home', {}); }} />
                        <Button_Solid text={'Ver Itens da Compra'} textColor={'#0067FF'} backgroundColor={'#ffffff'} borderColor={'#0067FF'}
                        onPress={() => { navigation.navigate('View_Carrinho', {});}} />
                    </Button_Container>
                </Content>
            </Container>
        </Main_Container>
    );
};

const style = StyleSheet.create({
    details_container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default Payment;