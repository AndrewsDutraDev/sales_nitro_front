import React from 'react';
import {StyleSheet, View } from 'react-native';

const Content = (props) => {

    /**
     * Método para verificar se a propriedade é válida
     * @param {Object} prop 
     * @returns 
     */
    const is_valid = (prop) => {
        return !(prop === undefined);
    }

    return (
        <View style={[style.content, {
            width: is_valid(props.width) ? props.width : '80%',
            justifyContent: is_valid(props.justifyContent) ? props.justifyContent : 'center',
            alignItems: is_valid(props.alignItems) ? props.alignItems : 'center',
            flexDirection: is_valid(props.flexDirection) ? props.flexDirection : 'column',
        }]}>
            {props.children}
        </View>
    );
};

const style = StyleSheet.create({
    content: {
        display: 'flex',
    }
})


export default Content;