import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Icon_payment_house from '../../img/icon_payment_house.svg';

const Payment_Delivery_Data = () => {

    return (
        <View style={style.container}>
            <View style={style.container_header}>
                <Icon_payment_house width={20} height={20} />
                <Text style={style.container_header_title}>Endereço de entrega</Text>
            </View>
            <View style={style.container_info}>
                <Text style={style.container_info_text}>nº180 - Apto 790 - Cassino</Text>
                <Text style={style.container_info_text}>Rio Grande - RS</Text>
                <Text style={style.container_info_text}>CEP: 95780-000</Text>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        backgroundColor: '#F8F8F8',
        marginVertical: 20,
    },
    container_header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        backgroundColor: '#E7E7E7',
        padding: 15,
    },
    container_header_title: {
        fontSize: 16,
        fontWeight: '700',
        color: '#333333',
        lineHeight: 20,
        marginStart: 20,
    },
    container_info: {
        display: 'flex',
        flexDirection: 'column',
        color: '#9095A6',
        paddingHorizontal: 15
    },
    container_info_text: {
        fontSize: 12, 
        lineHeight: 19,
        fontWeight: '500',
        color: '#9095A6',
        marginVertical: 5,
    }
})

export default Payment_Delivery_Data;