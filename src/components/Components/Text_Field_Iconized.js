import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const Text_Field_Iconized = (props) => {

    /**
     * Método para verificar se a propriedade é válida
     * @param {Object} prop 
     * @returns 
     */
    const is_valid = (prop) => {
        return !(prop === undefined);
    }

    return (
        <View style={style.field}>
            <TextInput style={[style.input_text, {width: is_valid(props.width) ? props.width : '100%'}]} 
            placeholder={is_valid(props.placeholder) ? props.placeholder : ''}
            autoCapitalize = {is_valid(props.autoCapitalize) ? props.autoCapitalize :'none'}
            onChangeText={(cupom) => props.onChangeText(cupom)}
            keyboardType={is_valid(props.keyboardType) ? props.keyboardType : 'default'}
            value={props.value}
            password={is_valid(props.password)}
            secureTextEntry={is_valid(props.secureTextEntry) ? props.secureTextEntry : false}
            />
            <TouchableOpacity style={style.icon_container} 
            onPress={() => props.onPress()}>
                <FontAwesomeIcon icon={props.icon} size={20} style={style.icon} />
            </TouchableOpacity>
        </View>
    );
};

const style = StyleSheet.create({
    field: {
		flexDirection: 'row',
		alignItems: 'center',
		position: 'relative'
	},
    input_text: {
        minWidth: 100,
        marginVertical: 10,
		backgroundColor: '#fff',
		padding: 15,
		paddingEnd: 50,
		borderRadius: 4,
		borderWidth: 1,
		borderColor: '#D8D8D8',
		color: '#757575',
	},
    icon_container: {
		display: 'flex',
		height: '100%',
		width: 50,
		right: 0,
		position: 'absolute',
		alignItems: 'center',
		justifyContent: 'center'
	},
	icon: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
})
export default Text_Field_Iconized;