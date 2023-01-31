import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import Icon_payment_type from '../../img/icon_payment_type.svg';
import { RadioButton } from 'react-native-paper';

const Payment_Delivery_Type = () => {
    const [deliveryType, setDeliveryType] = useState('Normal');
    const [deliveryData, setDeliveryData] = useState('22 de fevereiro');

    
    return (
        <View style={style.container}>
            <View style={style.container_header}>
                <Icon_payment_type width={20} height={20} />
                <Text style={style.container_header_title}>Tipo de entrega</Text>
            </View>
            <View style={style.container_info}>
                <RadioButton value="Normal" color='#0066FF' uncheckedColor='#0066FF'
                        status={ deliveryType === 'Normal' ? 'checked' : 'unchecked' }
                        onPress={() => setDeliveryType('Normal')}
                    />
                <Text style={style.label_input}>Normal</Text>
            </View>
            <Text style={style.container_info_data}>Receba em {deliveryData}</Text>

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
        flexDirection: 'row',
        alignItems: 'center',
        color: '#9095A6',
        paddingHorizontal: 15
    },
    container_info_text: {
        fontSize: 12, 
        lineHeight: 19,
        fontWeight: '500',
        color: '#9095A6',
        marginVertical: 5,
    },
    container_info_data: {
        fontSize: 12, 
        lineHeight: 19,
        fontWeight: '500',
        color: '#9095A6',
        marginVertical: 5,
        marginHorizontal: 20,
    },
    label_input: {
		fontSize: 12,
		color: '#333333',
		letterSpacing: 1,
		lineHeight: 16,
		paddingBottom: 5,
        marginHorizontal: 10,
	},
})

export default Payment_Delivery_Type;