import React from 'react';
import { StyleSheet, View } from 'react-native';

const Radio_Container = (props) => {
    return (
        <View style={style.radio_container}>
            {props.children}
        </View>
    );
};

const style = StyleSheet.create({
    radio_container: {
		width: '100%',
		padding: 10,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center'
	},
});

export default Radio_Container;