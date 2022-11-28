import React from 'react';
import { StyleSheet, Modal, View, TouchableOpacity, Dimensions, Text } from 'react-native';
import Icon_Close from '../../img/icon_close.svg';

const Modal_Bottom = (props) => {
    const [isVisible, setIsVisible] = [props.isVisible, props.setIsVisible]

    return (
        <Modal 
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => {
            setIsVisible(!isVisible);
        }}>
            <View style={style.modal}>
                <View style={style.modal_container}>
                    <View style={style.modal_header}>
                        <Text style={style.modal_title}>{props.title}</Text>
                        <TouchableOpacity style={style.modal_close} onPress={() => {setIsVisible(!isVisible); }}>
                            <Icon_Close width={25} height={25} />
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
        justifyContent: 'flex-end'
    },
    modal_container: {
        width: '100%',
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
        fontSize: 24,
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
    },
})

export default Modal_Bottom;