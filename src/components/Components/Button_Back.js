import React from 'react';
import { TouchableOpacity } from 'react-native';

import Arrow_back from '../../img/arrow_back.svg';

const Button_Back = (props) => {

    /**
     * Método para verificar se a propriedade é válida
     * @param {Object} prop 
     * @returns 
     */
    const is_valid = (prop) => {
        return !(prop === undefined);
    }

    return (
        <TouchableOpacity 
            onPress={() => props.onPress()}>
            <Arrow_back 
            width={is_valid(props.width) ? props.width : 30}
            height={is_valid(props.height) ? props.height : 30} 
            fill={is_valid(props.fill) ? props.fill : '#0066ff'} />
        </TouchableOpacity>
    );
};

export default Button_Back;