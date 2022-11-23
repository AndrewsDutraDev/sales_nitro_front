import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View, Image } from 'react-native';

const Product_Car = (props) => {
    
    return (
        <TouchableOpacity style={style.product_car_container}>
            <View style={style.product_car_content}>
                <View style={style.product_car_title}>
                    <View style={style.product_car_color_container}>
                        <View style={style.product_car_color}></View>
                    </View>
                    <View style={style.product_car_image_container}>
                        <Image style={style.product_car_image} source={require('../../img/imagem_teste.jpg')}></Image>
                    </View>
                    <Text style={style.product_car_text}>{props.name}</Text>
                </View>
                <View style={style.product_car_content_container}>
                    <View style={style.product_car_content_left}>
                        <View style={style.product_car_content_line}>
                            <Text style={style.product_car_content_line_text_bold}>Cor:</Text>
                            <Text style={style.product_car_content_line_text}>{props.color}</Text>
                        </View>
                        <View style={style.product_car_content_line}>
                            <Text style={style.product_car_content_line_text_bold}>Tamanho:</Text>
                            <Text style={style.product_car_content_line_text}>{props.size}</Text>
                        </View>
                        <View style={style.product_car_content_line}>
                            <Text style={style.product_car_content_line_text_bold}>Quantidade:</Text>
                            <Text style={style.product_car_content_line_text}>{props.quantity}</Text>
                        </View>
                    </View>
                    <View style={style.product_car_content_right}>
                        <View style={style.product_car_content_column}>
                            <Text style={style.product_car_content_line_text_total}>Total do item</Text>
                            <Text style={style.product_car_content_line_text_value}>R$ {props.total.toFixed(2)}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );

};

const style = StyleSheet.create({
    product_car_container: {
        width: '100%',
        display: 'flex',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },
    product_car_content: {
        width: '80%',
        backgroundColor: '#F8F8F8',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 0.2,
        elevation: 4,
    },
    product_car_title: {
        width: '100%',
        fontSize: 18,
        fontWeight: '700',
        backgroundColor: '#E7E7E7',
        flexDirection: 'row',
        borderTopEndRadius: 5,
        borderTopStartRadius: 5,
    },
    product_car_color_container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10
    },
    product_car_color: {
        width: 20,
        height: 20,
        borderColor: '#fff',
        borderWidth: 3,
        borderRadius: 3,
        backgroundColor: '#0067ff'
    },
    product_car_image_container: {
        width: 40,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 100,
        marginHorizontal: 15,
        marginVertical: 10
    },
    product_car_image: {
        width: 40,
        height: 40,
        borderRadius: 100,
    },
    product_car_text: {
        width: '100%',
        fontSize: 18,
        lineHeight: 32,
        fontWeight: '700',
        color: '#333333',
        textAlignVertical: 'center'
    },
    product_car_content_container: {
        width: '100%',
        height: 100,
        display: 'flex',
        justifyContent: 'center',
        flexDirection:'row',
    },
    product_car_content_left: {
        display: 'flex',
        height: '100%',
        flexDirection:'column',
        justifyContent: 'center',
        width: '50%',
        backgroundColor: '#F8F8F8',
    },
    product_car_content_right: {
        display: 'flex',
        height: '100%',
        justifyContent: 'flex-end',
        flexDirection:'column',
        alignItems: 'flex-end',
        width: '50%',
        backgroundColor: '#F8F8F8',
    },
    product_car_content_line: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 25,
    },
    product_car_content_column: {
        display: 'flex',
        flexDirection: 'column',
        marginHorizontal: 25,
        marginVertical: 20,
    },
    product_car_content_line_text_bold: {
        fontSize: 13,
        fontWeight: '700',
        color: '#000'
    },
    product_car_content_line_text: {
        fontSize: 13,
        marginHorizontal: 5,
        color: '#9095A6',
        textTransform: 'capitalize'
    },
    product_car_content_line_text_total: {
        width: '100%',
        fontSize: 9,
        color: '#0066FF',
    },
    product_car_content_line_text_value: {
        width: '100%',
        fontSize: 18,
        fontWeight: '800',
        color: '#0066FF'
    }
});

export default Product_Car;