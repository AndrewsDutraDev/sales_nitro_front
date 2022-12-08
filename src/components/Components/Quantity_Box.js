import React from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity} from 'react-native';

import Icon_add_button from '../../img/icon_add_button.svg';
import Icon_subtract_button from '../../img/icon_subtract_button.svg';

const Quantity_Box = (props) => {

    const [quantidade, setQuantidade] = [props.quantidade, props.setQuantidade];

    /**
     * Método para incrementar o valor da quantidade
     */
    const add_quantidade = () => {
        if(quantidade < 100) {
            setQuantidade(quantidade+1);
        }
    }

    /**
     * Método para decrementar o valor da quantidade
     */
    const subtract_quantidade = () => {
        if(quantidade > 0) {
            setQuantidade(quantidade-1);
        }
    }

    return (
        <View style={style.quantity_box}>
            <TouchableOpacity
                onPress={() => subtract_quantidade()}
                style={style.icon_left}>
                <Icon_subtract_button width={35} height={35} />
            </TouchableOpacity>
            <TextInput style={style.input_text_center}
            editable={false}
            placeholder={quantidade.toString()}
            />
            <TouchableOpacity
                onPress={() => add_quantidade()}
            style={style.icon_right}>
                <Icon_add_button width={35} height={35} />
            </TouchableOpacity>
        </View>
    );
}


const style = StyleSheet.create({
    quantity_box: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
		alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    input_text_center: {
		width: '100%',
		backgroundColor: '#fff',
        paddingVertical: 15,
		marginVertical: 5,
		borderRadius: 4,
		borderWidth: 1,
		borderColor: '#D8D8D8',
		color: '#757575',
        textAlign: 'center',
	},
    icon_right: {
        marginStart: -50,
    },
    icon_left:{
        display: 'flex',
        marginEnd: -50,
        zIndex: 1
    }
});

export default Quantity_Box;