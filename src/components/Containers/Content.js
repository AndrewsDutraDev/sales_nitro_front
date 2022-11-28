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
        width: '80%',
        display: 'flex',
    }
})


export default Content;