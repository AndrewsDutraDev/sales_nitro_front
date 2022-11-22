import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

const Color_Boll = (props) => {
    const [selectedColor, setSelectedColor] = [props.selectedColor, props.setSelectedColor];
    const [color] = [props.color];
    
    const button_handler = () => {
        setSelectedColor(color);
    }

    return (
        <TouchableOpacity onPress={() => button_handler()} 
        style={{ width: 40, height: 40, borderColor: '#3C81F6', borderWidth: selectedColor === color ? 1: 0, borderRadius: 100, shadowColor: '#000', shadowOffset: {width: 5, height: 5}, shadowOpacity: 0.2, elevation: 4, padding: 4, marginHorizontal: 10, backgroundColor: '#fff'}}>
        <View style={{
            width: '100%', 
            height: '100%', 
            borderRadius: 100, 
            backgroundColor: color
        }}></View>
    </TouchableOpacity>
    );

};

const style = StyleSheet.create({
    button_color: {
        width: '100%',
		height: '100%',
		flex: 1,
    },
    center_color: {
        width: '100%', 
        height: '100%', 
        borderRadius: 100, 
        backgroundColor: '#EE4444'
    }
});

export default Color_Boll;