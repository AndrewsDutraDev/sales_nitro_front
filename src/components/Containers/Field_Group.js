import React from 'react';
import { StyleSheet, View } from 'react-native';

const Field_Group = (props) => {
    return (
        <View style={style.field_group}>
            {props.children}
        </View>
    );
};

const style = StyleSheet.create({
    field_group: {
		width: '100%',
        marginVertical: 10,
	},
});

export default Field_Group;