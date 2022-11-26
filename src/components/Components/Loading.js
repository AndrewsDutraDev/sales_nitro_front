import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator } from "react-native";

const Loading = () => {
    return (
        <View style={style.loading}>
            <ActivityIndicator color={"#fff"} size={50} /> 
        </View>
    ); 
};

const style = StyleSheet.create({
    loading: { 
        position: 'absolute', 
        flex: 1, 
        height: '100%', 
        width: '100%', 
        justifyContent: "center", 
        alignItems: "center", 
        zIndex: 999, 
        backgroundColor: '#00000099' 
    },
});

export default Loading;