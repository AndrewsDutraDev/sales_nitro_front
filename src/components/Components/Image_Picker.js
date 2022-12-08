import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon_cam from '../../img/icon_cam.svg';

const Image_Picker = (props) => {

    return (
        <View style={style.image_picker}>
            <View style={style.image_container}>
                <Image style={style.image_content} source={require('../../img/imagem_teste.jpg')}></Image>
            </View>
            <TouchableOpacity style={style.icon_cam}
            onPress={() => props.onPress()}>
                <Icon_cam width={50} height={50} />
            </TouchableOpacity>
        </View>
    )
};

const style = StyleSheet.create({
    image_picker: {
        width: '100%',
		paddingHorizontal: 25,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image_container: {
        backgroundColor: '#acacac',
        width: 150,
        height: 150,
        borderColor: '#fff',
        borderWidth: 5,
        overflow: 'hidden'
    },
    image_content : {
        width: 150,
        height: 150,
    },
    icon_cam: {
        width: 150,
        marginTop: -30,
        marginEnd: -30,
        alignItems: 'flex-end'
    },
});

export default Image_Picker;