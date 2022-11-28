import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Profile_Item = (props) => {
    let Icon_Start = props.iconStart;
    let Icon_End = props.iconEnd;

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
        style={style.profile_item}
        onPress={() => props.onPress()}>
            <View style={style.profile_item_view_icon}>
                {is_valid(Icon_Start) ? <Icon_Start width={props.iconStartWidth} height={props.iconStartHeight} /> : <></>}
            </View>
            <Text style={style.profile_item_text}>{props.text}</Text>
            <View style={style.profile_item_view_icon}>
                {is_valid(Icon_End) ? <Icon_End width={props.iconEndWidth} height={props.iconEndHeight} /> : <></>}
            </View>
        </TouchableOpacity>
    );
};

const style = StyleSheet.create({
    profile_item: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 5,
        paddingHorizontal: 5,
        marginVertical: 15,
    },
    profile_item_view_icon:{
        width: '15%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profile_item_text: {
        width: '70%',
        height: '100%',
        fontSize: 16,
        color: '#000',
        paddingHorizontal: 30,
        textAlign: 'justify',
    },
});

export default Profile_Item;