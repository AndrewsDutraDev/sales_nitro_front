import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';

const Step_Line = (props) => {

    /**
     * Método para verificar se a propriedade é válida
     * @param {Object} prop 
     * @returns 
     */
     const is_valid = (prop) => {
        return !(prop === undefined);
    }
    
    return (
        <View style={[style.step_line, {
            backgroundColor: is_valid(props.backgroundColor) ? props.backgroundColor : '#0066ff'
        }]} />
    )
}

const style = StyleSheet.create({
    step_line: {
        width: 50,
		height: 3,
		marginLeft: -13,
		marginRight: -13,
    }
});

export default Step_Line;