import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Text_Field = (props) => {

    /**
     * Método para verificar se a propriedade é válida
     * @param {Object} prop 
     * @returns 
     */
    const is_valid = (prop) => {
        return !(prop === undefined);
    }

    return (
    <TextInput style={[style.input_text, {width: is_valid(props.width) ? props.width : '100%'}]} 
        placeholder={is_valid(props.placeholder) ? props.placeholder : ''}
        autoCapitalize = {is_valid(props.autoCapitalize) ? props.autoCapitalize :'none'}
        onChangeText={(cupom) => props.onChangeText(cupom)}
        keyboardType={is_valid(props.keyboardType) ? props.keyboardType : 'default'}
        value={props.value}
    />
    );
};

const style = StyleSheet.create({
    input_text: {
        minWidth: 100,
        marginVertical: 10,
		backgroundColor: '#fff',
		padding: 15,
		paddingEnd: 50,
		borderRadius: 4,
		borderWidth: 1,
		borderColor: '#D8D8D8',
		color: '#757575',
	},
})
export default Text_Field;