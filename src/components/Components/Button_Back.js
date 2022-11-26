import React from 'react';
import { StyleSheet, TouchableOpacity, StatusBar } from 'react-native';

import Arrow_back from '../../img/arrow_back.svg';

const Button_Back = (props) => {

    const is_valid = (prop) => {
        return !(prop === undefined);
    }

    return (
        <TouchableOpacity 
            onPress={() => props.onPress()}>
            <Arrow_back 
            width={is_valid(props.width) ? props.width : 35}
            height={is_valid(props.height) ? props.height : 35} 
            fill={is_valid(props.fill) ? props.fill : '#0066ff'} />
        </TouchableOpacity>
    );
};

const style = StyleSheet.create({
    main_view: {
        width: '100%',
		height: '100%',
		marginTop: StatusBar.currentHeight,
		flex: 1,
    },
});

export default Button_Back;