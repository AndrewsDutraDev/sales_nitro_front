import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Label_Field = (props) => {

    /**
     * Método para verificar se a propriedade é válida
     * @param {Object} prop 
     * @returns 
     */
    const is_valid = (prop) => {
        return !(prop === undefined);
    }
    
    return (
        <Text style={[style.label_field, {color: is_valid(props.textColor) ? props.textColor : '#fff'}]}>
            {props.text}
        </Text>
    );
};

const style = StyleSheet.create({
    label_field: {
		width: '100%',
        fontSize: 12,
		letterSpacing: 1,
	},
});

export default Label_Field;