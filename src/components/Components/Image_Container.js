import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const Image_Container = (props) => {
    return (
        <View style={style.image_container}>
            <Image style={style.image_content} source={props.imageSource} />
        </View>
    );
};

const style = StyleSheet.create({
    image_container: {
        backgroundColor: '#acacac',
        width: 120,
        height: 120,
        borderRadius: 100,
        borderColor: '#fff',
        borderWidth: 5,
        overflow: 'hidden'
    },
    image_content : {
        width: 110,
        height: 110,
    },
});

export default Image_Container;