import React from 'react';
import { StyleSheet, View } from 'react-native';

const Header = (props) => {
    
    /**
     * Método para verificar se a propriedade é válida
     * @param {Object} prop 
     * @returns 
     */
    const is_valid = (prop) => {
        return !(prop === undefined);
    }

    return (
        <View style={[style.header, {
            justifyContent: is_valid(props.justifyContent) ? props.justifyContent : 'center',
            alignItems: is_valid(props.alignItems) ? props.alignItems : 'center',
            flexDirection: is_valid(props.flexDirection) ? props.flexDirection : 'row',
            backgroundColor: is_valid(props.backgroundColor) ? props.backgroundColor : '#fff',
        }]}>
            {props.children}
        </View>
    );
};

const style = StyleSheet.create({
    header: {
        width: '100%',
        display: 'flex',
        paddingVertical: 40,
        paddingHorizontal: 40,
    }
})

export default Header;