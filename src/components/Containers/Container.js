import React from 'react';
import { View, Dimensions } from 'react-native';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const Container = (props) => {
    const is_valid = (prop) => {
        return !(prop === undefined);
    }

    return (
        <View style={{
            height: HEIGHT,
            width: WIDTH,
            display: 'flex',
            ustifyContent: is_valid(props.justifyContent) ? props.justifyContent : 'center',
            alignItems: is_valid(props.alignItems) ? props.alignItems : 'center',
            flexDirection: is_valid(props.flexDirection) ? props.flexDirection : 'row',

        }}>
            {props.children}
        </View>
    );
};

export default Container;