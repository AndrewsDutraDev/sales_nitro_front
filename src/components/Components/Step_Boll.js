import React from 'react';
import { StyleSheet, View, } from 'react-native';

const Step_Boll = (props) => {

    /**
     * Método para verificar se a propriedade é válida
     * @param {Object} prop 
     * @returns 
     */
     const is_valid = (prop) => {
        return !(prop === undefined);
    }

    return (
        <View style={[style.step_boll, {
            backgroundColor: is_valid(props.backgroundColor) ? props.backgroundColor : '#0066ff'
        }]} />
    )
};

const style = StyleSheet.create({
    step_boll: {
        width: 18,
		height: 18,
		borderRadius: 10,
		zIndex: 10,
    }
})

export default Step_Boll;