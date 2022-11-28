import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Logo = () => {
    return (
        <View style={style.logo}>
            <Text style={[style.logo_text, style.logo_sales]}>SALES</Text>
            <Text style={[style.logo_text, style.logo_nitro]}>NITRO</Text>
        </View>
    );
};

const style = StyleSheet.create({
    logo: {
		width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 60,
	},
    logo_text: {
        textAlign: 'center',
        fontWeight: '900',
		letterSpacing: 2,
		fontSize: 32,
    },
    logo_sales: {
		color: '#fff'
	},
	logo_nitro: {
		color: '#daa520'
	},
})

export default Logo;