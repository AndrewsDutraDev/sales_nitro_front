import React from 'react';
import { StyleSheet, View } from 'react-native';

const Header = (props) => {
    
    const is_valid = (prop) => {
        return !(prop === undefined);
    }

    return (
        <View style={{
            width: '100%',
            display: 'flex',
            justifyContent: is_valid(props.justifyContent) ? props.justifyContent : 'center',
            alignItems: is_valid(props.alignItems) ? props.alignItems : 'center',
            flexDirection: is_valid(props.flexDirection) ? props.flexDirection : 'row',
            paddingVertical: 40,
            paddingHorizontal: 40,
        }}>
            {props.children}
        </View>
    );
};

export default Header;