import React from 'react';
import {StyleSheet, View, Dimensions } from 'react-native';

const WIDTH = Dimensions.get('window').width;

const Container = (props) => {

    /**
     * Método para verificar se a propriedade é válida
     * @param {Object} prop 
     * @returns 
     */
    const is_valid = (prop) => {
        return !(prop === undefined);
    }

    return (
        <View style={[style.container, {
            justifyContent: is_valid(props.justifyContent) ? props.justifyContent : 'center',
            alignItems: is_valid(props.alignItems) ? props.alignItems : 'center',
            flexDirection: is_valid(props.flexDirection) ? props.flexDirection : 'row',
        }]}>
            {props.children}
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        height: '100%',
        width: WIDTH,
        display: 'flex',
        paddingBottom: 40,
    }
})

export default Container;