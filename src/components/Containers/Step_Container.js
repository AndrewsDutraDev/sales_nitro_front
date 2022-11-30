import React from 'react';
import { StyleSheet, View } from 'react-native';

const Button_Step_Container = (props) => {

    /**
     * Método para verificar se a propriedade é válida
     * @param {Object} prop 
     * @returns 
     */
     const is_valid = (prop) => {
        return !(prop === undefined);
    }

    return (
        <View style={[style.button_step_container, {
            flexDirection: is_valid(props.flexDirection) ? props.flexDirection : 'row',
            alignItems: is_valid(props.alignItems) ? props.alignItems : 'center',
            justifyContent: is_valid(props.justifyContent) ? props.justifyContent : 'center',
        }]}>
            {props.children}
        </View>
    );
};

const style = StyleSheet.create({
    button_step_container: {
        marginTop: 50,
		width: '100%',
		display: 'flex',
    }
});

export default Button_Step_Container;