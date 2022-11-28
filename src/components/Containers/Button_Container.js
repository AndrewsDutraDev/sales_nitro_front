import React from 'react';
import { View } from 'react-native';

const Button_Container = (props) => {

    /**
     * Método para verificar se a propriedade é válida
     * @param {Object} prop 
     * @returns 
     */
    const is_valid = (prop) => {
        return !(prop === undefined);
    }

    return (
        <View style={{
            display: 'flex',
            width: is_valid(props.width) ? props.width : '100%',
            flexDirection: is_valid(props.flexDirection) ? props.flexDirection : 'column',
            alignItems: is_valid(props.alignItems) ? props.alignItems : 'center',
            justifyContent: is_valid(props.justifyContent) ? props.justifyContent : 'center',
        }}>
            {props.children}
        </View>
    );
};

export default Button_Container;