import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header_Title = (props) => {
    let Icon = props.icon;

    /**
     * Método para verificar se a propriedade é válida
     * @param {Object} prop 
     * @returns 
     */
    const is_valid = (prop) => {
        return !(prop === undefined);
    }

    return (
        <View style={[style.header_title, {
            justifyContent: is_valid(props.justifyContent) ? props.justifyContent : 'flex-end',
        }]}>
            <Text style={[style.header_text, {
                color: is_valid(props.textColor) ? props.textColor : '#0066FF'
            }]}>{props.text}</Text>
            {is_valid(Icon) ? (<Icon style={style.header_icon} width={30} height={30} /> ): <></> }
        </View>
    );
};

const style = StyleSheet.create({
    header_title: {
        width: '80%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
    },
    header_text: {
        fontSize: 20,
        textAlign: 'right',
    },
    header_icon: {
        marginHorizontal: 15,
    }
});


export default Header_Title;