import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button_Round = (props) => {
    const [Icon] = [props.icon];

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
                display: is_valid(props.display) ? props.display : 'flex',
                alignItems: is_valid(props.alignItems) ? props.alignItems : 'center',
                justifyContent: is_valid(props.justifyContent) ? props.justifyContent : 'center',
                borderColor: is_valid(props.borderColor) ? props.borderColor : props.backgroundColor,
		        borderRadius: is_valid(props.borderRadius) ? props.borderRadius: 50,
                transform: is_valid(props.transform) ? props.transform : [],
            }]}
        onPress={() => {props.onPress()}}>
            {is_valid(props.text) ? (
                <Text style={{
                    color: is_valid(props.textColor) ? props.textColor : '#fff',
                    fontSize: 16,
                    fontWeight: '700',
                }}>{props.text}</Text>
            ) : is_valid(props.icon) ? (
            <Icon width={25} height={25}  />
            ) : (
            <></>
            )}
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

export default Button_Round;