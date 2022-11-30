import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInputMask } from 'react-native-masked-text'

const Text_Field_Masked = (props) => {

    /**
     * Método para verificar se a propriedade é válida
     * @param {Object} prop 
     * @returns 
     */
    const is_valid = (prop) => {
        return !(prop === undefined);
    }

    return (
    <TextInputMask style={[style.input_text, {width: is_valid(props.width) ? props.width : '100%'}]} 
        placeholder={props.placeholder}
        type={props.type}
        options={props.options}
        value={props.value}
        onChangeText={(text) => props.onChangeText(text)}
    
    // placeholder='Ex. 53 999000000'
        // type={'cel-phone'}
        // options={{
        //     maskType: 'BRL',
        //     withDDD: true,
        //     dddMask: '(99) '
        // }}
        // value={celular}
        // onChangeText={(celular) => setCelular(celular)}
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
export default Text_Field_Masked;