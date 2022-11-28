import React from 'react';
import { StyleSheet, Modal, View, TouchableOpacity, Dimensions, Text } from 'react-native';
import Icon_Close from '../../img/icon_close.svg';

const Modal_Center = (props) => {
    const [isVisible, setIsVisible] = [props.isVisible, props.setIsVisible];

    /**
     * Método para verificar se a propriedade é válida
     * @param {Object} prop 
     * @returns 
     */
    const is_valid = (prop) => {
        return !(prop === undefined);
    }

    return (
        <Modal 
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => {
            setIsVisible(!isVisible);
        }}>
            <View style={[style.modal, {
                justifyContent: is_valid(props.justifyContent) ? props.justifyContent : 'center'
            }]}>
                <View style={[style.modal_container, {
                    width: is_valid(props.width) ? props.width : '100%',
                }]}>
                    <View style={style.modal_header}>
                        <Text style={[style.modal_title, {
                            fontSize: is_valid(props.fontSize) ? props.fontSize : 24,
                        }]}>{props.title}</Text>
                        <TouchableOpacity style={style.modal_close} onPress={() => {setIsVisible(!isVisible); }}>
                            <Icon_Close width={is_valid(props.closeWidth) ? props.closeWidth : 25} height={is_valid(props.closeHeight) ? props.closeHeight : 25} />
                        </TouchableOpacity>
                    </View>
                    <View style={style.modal_content}>
                        {props.children}
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const style = StyleSheet.create({
    modal: {
        height: '100%',
		width: Dimensions.get('window').width,
        backgroundColor: '#00000080',
        display: 'flex',
        alignItems: 'center',
    },
    modal_container: {
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    modal_header: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    modal_title: {
        fontWeight: '400',
        color: '#333333',
    },
    modal_close: {
        width: 40,
        height: 40,
        borderRadius: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal_content: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15
    },
})

export default Modal_Center;