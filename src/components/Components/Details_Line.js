import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Details_Line = (props) => {

    /**
     * Método para verificar se a propriedade é válida
     * @param {Object} prop 
     * @returns 
     */
    const is_valid = (prop) => {
        return !(prop === undefined);
    }

    return (
        <View style={style.details_line}>
            <Text style={style.details_text}>{props.text}</Text>
            <Text style={style.details_text_bold}>{is_valid(props.textBold) ? props.textBold : ''}</Text>
        </View>
    );
};

const style = StyleSheet.create({
    details_line: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
	},
	details_text: {
        fontSize: 14,
        fontWeight: '500',
	},
	details_text_bold: {
        fontSize: 14,
        fontWeight: '700',
	},
})

export default Details_Line;