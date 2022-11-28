import React from 'react';
import { StyleSheet, View } from 'react-native';

const Divisor = () => {

    return (
        <View style={style.details_divisor} />
    );
};

const style = StyleSheet.create({
    details_divisor: {
        width: '100%',
        height: 2,
        backgroundColor: '#000',
        opacity: 0.1,
    },
})

export default Divisor;