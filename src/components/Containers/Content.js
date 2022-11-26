import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


const Content = (props) => {

    const is_valid = (prop) => {
        return !(prop === undefined);
    }

    return (
        <View style={{
            width: '100%',
            display: 'flex',
            justifyContent: is_valid(props.justifyContent) ? props.justifyContent : 'center',
            alignItems: is_valid(props.alignItems) ? props.alignItems : 'center',
            flexDirection: is_valid(props.flexDirection) ? props.flexDirection : 'column',
        }}>
            {props.children}
        </View>
    );
};

export default Content;