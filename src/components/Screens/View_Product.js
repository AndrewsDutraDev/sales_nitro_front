import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, Image, TouchableOpacity, StatusBar, KeyboardAvoidingView, Platform, ScrollView, Dimensions, Button } from 'react-native';
import { ActivityIndicator } from "react-native";
import 'react-native-reanimated';
import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from '../CarouselCardItem';
import data from '../../../data';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon_add_button from '../../img/icon_add_button.svg';
import Icon_subtract_button from '../../img/icon_subtract_button.svg';
import Arrow_back from '../../img/arrow_back.svg';
import Icon_cam from '../../img/icon_cam.svg';
import RNPickerSelect from 'react-native-picker-select';
import api from '../../services/api';
import Color_Boll from '../Color_Boll';
;

const View_Product = ({ navigation, route }) => {
    const [nome, setNome] = useState();
    const [valor, setValor] = useState(0.0);
    const [quantidade, setQuantidade] = useState(0);
    const [descricao, setDescricao] = useState();
    const [categoria, setCategoria] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const width = Dimensions.get('window').width;
    const isCarousel = React.useRef(null);
    const [index, setIndex] = React.useState(0);
    const [selectedColor, setSelectedColor] = useState();
    const [selectedSize, setSelectedSize] = useState();

    return (<View style={style.bg_view}>
        { isLoading ? 
        <View style={{ position: 'absolute', flex: 1, justifyContent: "center", alignItems: "center", zIndex: 999, height: '100%', width: '100%', backgroundColor: '#00000099' }}>
            <ActivityIndicator color={"#fff"} size={50} /> 
        </View> : <></>}
        <KeyboardAvoidingView behavior={ Platform.OS == 'ios' ? 'padding' : 'height' } keyboardVerticalOffset={10}>
            <ScrollView>
                <View style={style.container}>
                    <View style= {style.header}>
                        <View style={style.header_text}>
                            <TouchableOpacity 
                                onPress={() => navigation.navigate('Home', { name: 'Jane' })}>
                                <Arrow_back width={25} height={25} fill={'#0066FF'} />
                            </TouchableOpacity>
                            <Text style={style.header_title}>Adicionar Produto</Text>
                        </View>
                    </View>
                    <View style= {style.content}>
                        <View style={style.image_slider}>
                            <Carousel
                                layout="tinder"
                                layoutCardOffset={9}
                                ref={isCarousel}
                                data={data}
                                renderItem={CarouselCardItem}
                                sliderWidth={SLIDER_WIDTH}
                                itemWidth={ITEM_WIDTH}
                                onSnapToItem={(index) => setIndex(index)}
                                useScrollView={true}
                            />
                            <Pagination
                                dotsLength={data.length}
                                activeDotIndex={index}
                                carouselRef={isCarousel}
                                dotStyle={{
                                    width: 8,
                                    height: 8,
                                    borderRadius: 5,
                                    marginHorizontal: 0,
                                    backgroundColor: '#0066FF'
                                }}
                                inactiveDotOpacity={0.4}
                                inactiveDotScale={0.6}
                                tappableDots={true}
                            />
                        </View>
                    </View>
                    <View style={style.product_content}>
                        <Text style={style.product_name}>{route.params.product.name}</Text>
                        <Text style={style.product_price}>R$ {route.params.product.value}</Text>
                        <Text style={style.product_parcel}>Em até 4x de {route.params.product.value/4} sem juros</Text>
                        <View style={style.product_stars}>
                            <Stars
                                default={4}
                                count={5}
                                half={true}
                                starSize={50}
                                fullStar={<Icon name={'star'} size={25} style={[style.myStarStyle]}/>}
                                emptyStar={<Icon name={'star-outline'} size={25} style={[style.myStarStyle, style.myEmptyStarStyle]}/>}
                                halfStar={<Icon name={'star-half'} size={25} style={[style.myStarStyle]}/>}
                            />
                        </View>
                        <Text style={style.product_colors_title}>Escolha sua cor</Text>
                        <View style={style.product_colors_container}>
                        <TouchableOpacity onPress={() => setSelectedColor('#EE4444')} style={{ width: 40, height: 40, borderColor: '#3C81F6', borderWidth: selectedColor === '#EE4444' ? 1: 0, borderRadius: 100, shadowColor: '#000', shadowOffset: {width: 5, height: 5}, shadowOpacity: 0.2, elevation: 4, padding: 4, marginHorizontal: 10, backgroundColor: '#fff'}}>
                            <View style={{width: '100%', height: '100%', borderRadius: 100, backgroundColor: '#EE4444'}}></View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setSelectedColor('#3C81F6')} style={{ width: 40, height: 40, borderColor: '#3C81F6', borderWidth: selectedColor === '#3C81F6' ? 1: 0, borderRadius: 100, shadowColor: '#000', shadowOffset: {width: 5, height: 5}, shadowOpacity: 0.2, elevation: 4, padding: 4, marginHorizontal: 10, backgroundColor: '#fff'}}>
                            <View style={{width: '100%', height: '100%', borderRadius: 100, backgroundColor: '#3C81F6'}}></View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setSelectedColor('#000000')} style={{ width: 40, height: 40, borderColor: '#3C81F6', borderWidth: selectedColor === '#000000' ? 1: 0, borderRadius: 100, shadowColor: '#000', shadowOffset: {width: 5, height: 5}, shadowOpacity: 0.2, elevation: 4, padding: 4, marginHorizontal: 10, backgroundColor: '#fff'}}>
                            <View style={{width: '100%', height: '100%', borderRadius: 100, backgroundColor: '#000000'}}></View>
                        </TouchableOpacity>
                        </View>
                        <Text style={style.product_colors_title}>Escolha o tamanho</Text>
                        <View style={style.product_colors_container}>
                            <TouchableOpacity onPress={() => setSelectedSize('39')}>
                                <Text style={{backgroundColor: selectedSize === '39' ? '#0066FF' : '#D9D9D9' , width: 40, height: 40, color: '#fff', borderRadius: 5, fontSize: 20, textAlign: 'center', textAlignVertical: 'center', marginHorizontal: 10}}>39</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setSelectedSize('40')}>
                                <Text style={{backgroundColor: selectedSize === '40' ? '#0066FF' : '#D9D9D9' , width: 40, height: 40, color: '#fff', borderRadius: 5, fontSize: 20, textAlign: 'center', textAlignVertical: 'center', marginHorizontal: 10}}>40</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setSelectedSize('42')}>
                                <Text style={{backgroundColor: selectedSize === '42' ? '#0066FF' : '#D9D9D9' , width: 40, height: 40, color: '#fff', borderRadius: 5, fontSize: 20, textAlign: 'center', textAlignVertical: 'center', marginHorizontal: 10}}>42</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={style.btn_comprar}
                        onPress={() => { navigation.navigate('Home', { name: 'Jane' }); alert('Pagamento!'); }}>
                            <Text style={style.text_comprar}>COMPRAR</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.btn_carrinho}
                        onPress={() => { navigation.navigate('Home', { name: 'Jane' }); alert('Produto Adicionado!');}}>
                            <Text style={style.text_carrinho}>Adicionar ao carrinho</Text>
                        </TouchableOpacity>
                        <Text style={style.prazo}>Consultar prazo de entrega</Text>
                        <Text style={style.detalhes_title}>Detalhes</Text>
                        <Text style={style.detalhes_text}>{route.params.product.descrition}</Text>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    </View> );
}

const style = StyleSheet.create({
    bg_view: {
        width: '100%',
		height: '100%',
		marginTop: StatusBar.currentHeight,
		flex: 1,
    },
	container: {
		height: '100%',
		width: Dimensions.get('window').width,
		marginBottom: 40,
	},
    header: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    header_text: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 40,
        paddingHorizontal: 40,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    header_title: {
        display: 'flex',
        width: '100%',
        color: '#000',
        fontSize: 26,
        textAlign: 'center',
    },
    image_slider: {
        display: 'flex',
        width: '100%',
    },
    product_content: {
        display: 'flex',
        width: '100%',
        paddingHorizontal: 50,
    },

    product_name: {
        fontSize: 18,
        color: '#333333',
        fontWeight: '700',
        lineHeight: 23,
    },
    product_price:  {
        color: '#0066FF',
        fontSize: 24,
        letterSpacing: -0.25,
        fontWeight: '700',
        marginTop: 10
    },
    product_parcel: {
        color: '#0066FF',
        fontSize: 12,
        lineHeight: 19,
        letterSpacing: -0.25,
        fontWeight: '500'
    },
    product_stars: {
        width: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        marginVertical: 15,
    },
    myStarStyle: {
        color: 'yellow',
        backgroundColor: 'transparent',
        textShadowColor: 'black',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 2,
      },
      myEmptyStarStyle: {
        color: 'white',
      },
      product_colors_title: {
        color: '#333333',
        fontSize: 16,
        fontWeight: '400',
        marginVertical: 5
      },
      product_colors_container: {
        marginVertical: 5,
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 30
      },
      product_colors_item: {
        width: 40,
        height: 40,
        borderColor: '#fff',
        borderRadius: 100,
        borderWidth: 3,
        backgroundColor: '#EE4444',
        shadowColor: '#000',
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 0.2,
        elevation: 4,
      },
      product_size_item: {
        
      },
      btn_comprar: {
        width: '100%',
        height: 50,
        backgroundColor: '#0067FF',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginVertical: 10,
        marginHorizontal: 10,
      },
      text_comprar: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
      },
      btn_carrinho: {
        width: '100%',
        height: 50,
        borderWidth: 3,
        backgroundColor: '#fff',
        borderColor: '#0067FF',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginVertical: 10,
        marginHorizontal: 10,
      },
      text_carrinho: {
        color: '#0067ff',
        fontSize: 16,
        fontWeight: '700',
      },
      prazo: {
        fontSize: 16,
        fontWeight: '500',
        textDecorationLine: 'underline',
        color: '#000',
        textAlign: 'center',
        marginVertical: 5
      },
      detalhes_title: {
        fontSize: 20,
        fontWeight: '400',
        color: '#333333',
        paddingHorizontal: 20,
        marginTop: 10
      },
      detalhes_text: {
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'justify',
        paddingHorizontal: 20,
        color: '#9095A6',
        marginTop: 5,
        marginBottom: 10
        
      }
});


export default View_Product;