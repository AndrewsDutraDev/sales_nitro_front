import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const List_Item = (props) => {
    const Icon = is_valid(props.icon) ? props.icon : null;

    /**
     * Método para verificar se a propriedade é válida
     * @param {Object} prop 
     * @returns 
     */
    const is_valid = (prop) => {
        return !(prop === undefined);
    }

    return (
        <TouchableOpacity style={style.list_item}>
            {Icon != null ? (<Icon width={20} height={20} />) : (<></>)}
            <Text>{props.text}</Text>
        </TouchableOpacity>
    );
};

const style = StyleSheet.create({
    list_item: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        paddingEnd: 50,
        marginVertical: 15,
    },
    list_item_text: {
        fontSize: 20,
        fontWeight: '500',
        color: '#fff',
        marginStart: 15
    }
})

export default List_Item;