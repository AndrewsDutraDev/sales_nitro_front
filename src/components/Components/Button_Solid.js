import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button_Solid = (props) => {

     /**
     * Método para verificar se a propriedade é válida
     * @param {Object} prop 
     * @returns 
     */
    const is_valid = (prop) => {
        return !(prop === undefined);
    }

    return (
        <TouchableOpacity style={
            [style.button, {
                width: is_valid(props.width) ? props.width : '100%',
                height: is_valid(props.height) ? props.height : 55,
                backgroundColor: is_valid(props.backgroundColor) ? props.backgroundColor : '#0067FF',
                borderColor: is_valid(props.borderColor) ? props.borderColor : props.backgroundColor,
            }]}
        onPress={() => {props.onPress()}}>
            <Text style={{
                color: is_valid(props.textColor) ? props.textColor : '#fff',
                fontSize: 16,
                fontWeight: '700',
            }}>{props.text}</Text>
        </TouchableOpacity>
    );

};

const style = StyleSheet.create({
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginVertical: 10,
        borderWidth: 3,
    },
    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
    },
});

export default Button_Solid;