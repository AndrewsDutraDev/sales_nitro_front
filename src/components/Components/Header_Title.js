import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Modal, TextInput, Text, TouchableOpacity, StatusBar, KeyboardAvoidingView, Platform, ScrollView, Dimensions, Button } from 'react-native';

const Header_Title = (props) => {
    let Icon = props.icon;

    return (
        <View style={style.header_title}>
            <Text style={style.header_text}>{props.text}</Text>
            <Icon style={style.header_icon} width={30} height={30} />
        </View>
    );
};

const style = StyleSheet.create({
    header_title: {
        width: '80%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
    header_text: {
        fontSize: 26,
        color: '#0066FF',
        textAlign: 'right',
    },
    header_icon: {
        marginHorizontal: 15,
    }
});


export default Header_Title;