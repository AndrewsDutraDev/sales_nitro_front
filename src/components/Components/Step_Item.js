import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';

const Step_Item = (props) => {
    let StepView = props.stepView;
    /**
     * Método para verificar se a propriedade é válida
     * @param {Object} prop 
     * @returns 
     */
     const is_valid = (prop) => {
        return !(prop === undefined);
    }

    return (
        <View style={style.step_item}>
            <Text style={style.step_text}>{props.text}</Text>
            <StepView backgroundColor={props.stepViewBackground} />
        </View>
    )

};

const style = StyleSheet.create({
    step_item: {
        display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
    },
    step_text: {
        fontSize: 12,
		lineHeight: 15,
		fontWeight: '600',
		marginBottom: 5,
		color: '#333333'
    }
})

export default Step_Item;