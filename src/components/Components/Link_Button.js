import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Link_Button = (props) => {

    return (
        <TouchableOpacity        
        onPress={() => {props.onPress()}}>
            <Text style={style.text}>{props.text}</Text>
        </TouchableOpacity>
    );
};

const style = StyleSheet.create({
    text: {
        fontSize: 16,
        fontWeight: '500',
        textDecorationLine: 'underline',
        color: '#000',
        textAlign: 'center',
        marginVertical: 30
      },
})

export default Link_Button;