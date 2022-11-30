import React from 'react';
import {StyleSheet, Text } from 'react-native';

const Page_Title = (props) => {
    return (
        <Text style={style.page_title}>{props.text}</Text>
    )
};

const style = StyleSheet.create({
    page_title: {
        width: '100%',
		textAlign: 'center',
		paddingTop: 30,
		fontWeight: '700',
		letterSpacing: 2,
		fontSize: 18,
		lineHeight: 24,
		color: '#333333'
    }
});

export default Page_Title;