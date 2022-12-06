import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text} from 'react-native';
import 'react-native-reanimated';
import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from '../CarouselCardItem';
import data from '../../../data';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import {Main_Container, Container, Content, Header, Button_Container} from '../Containers/Index_Container';

import {Button_Back, Header_Title, Button_Solid, Square_Size, Color_Boll} from '../Components/Index_Components';

const View_Product = ({ navigation, route }) => {
    const [product] = useState(route.params.product);
    const [carProductNumber, setCarProductNumber] = [route.params.carProductNumber, route.params.setCarProductNumber];
    const [carProductList, setCarProductList] = [route.params.carProductList, route.params.setCarProductList];
    const [isLoading, setIsLoading] = useState(false);
    const isCarousel = React.useRef(null);
    const [index, setIndex] = React.useState(0);
    const [selectedColor, setSelectedColor] = useState();
    const [selectedSize, setSelectedSize] = useState();

    /**
     * Método para adicionar um produto ao carrinho
     */
    const add_product = () => {
        setCarProductNumber(carProductNumber+1);
        
        carProductList.push(product)
        
        navigation.navigate('Home', {}); 
    };

    /**
     * Método para comprar o produto
     */
    const buy_product = () => {
        setCarProductNumber(carProductNumber+1);
        product.size = selectedSize;
        product.color = selectedColor;
        carProductList.push(product)
        
        navigation.navigate('View_Carrinho', {
            carProductNumber: carProductNumber, setCarProductNumber: setCarProductNumber,
            carProductList: carProductList, setCarProductList: setCarProductList,}); 
    }

    useEffect(() => {
        navigation.setOptions({
            carProductNumber: carProductNumber, setCarProductNumber: setCarProductNumber,
            carProductList: carProductList, setCarProductList: setCarProductList,
        })
    }, [navigation, carProductNumber, setCarProductNumber, carProductList, setCarProductList]);

   
    return (
        <Main_Container isLoading={isLoading} setIsLoading={setIsLoading}>
            <Container alignItems="center" justifyContent="flex-start" flexDirection={'column'}>
                <Header justifyContent="space-evenly">
                    <Button_Back onPress={() => navigation.navigate('Home', {})} />
                    <Header_Title text={''} />
                </Header>
                <Content>
                    <View style={style.image_slider}>
                        <Carousel
                            layout="tinder"
                            layoutCardOffset={1}
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
                    <View style={style.product_content}>
                        <Text style={style.product_name}>{product.name}</Text>
                        <Text style={style.product_price}>R$ {product.value}</Text>
                        <Text style={style.product_parcel}>Em até 4x de {product.value/4} sem juros</Text>
                        <View style={style.product_stars}>
                            <Stars
                                default={5}
                                count={5}
                                half={false}
                                starSize={50}
                                fullStar={<Icon name={'star'} size={25} style={[style.myStarStyle]}/>}
                                emptyStar={<Icon name={'star-outline'} size={25} style={[style.myStarStyle, style.myEmptyStarStyle]}/>}
                                halfStar={<Icon name={'star-half'} size={25} style={[style.myStarStyle]}/>}
                            />
                        </View>
                        <Text style={style.product_colors_title}>Escolha sua cor</Text>
                        <View style={style.product_colors_container}>
                            <Color_Boll color='azul' selectedColor={selectedColor} setSelectedColor={setSelectedColor}></Color_Boll>
                            <Color_Boll color='vermelho' selectedColor={selectedColor} setSelectedColor={setSelectedColor}></Color_Boll>
                            <Color_Boll color='preto' selectedColor={selectedColor} setSelectedColor={setSelectedColor}></Color_Boll>
                        </View>
                        <Text style={style.product_colors_title}>Escolha o tamanho</Text>
                        <View style={style.product_colors_container}>
                            <Square_Size size="39" selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
                            <Square_Size size="40" selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
                            <Square_Size size="41" selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
                        </View>
                        <Button_Container width={'100%'}>
                            <Button_Solid text={'COMPRAR'} backgroundColor={'#0067FF'}
                            onPress={() => { () => {buy_product() }}} />
                            <Button_Solid text={'Adicionar ao carrinho'} textColor={'#0067FF'} backgroundColor={'#ffffff'} borderColor={'#0067FF'}
                            onPress={() => { add_product()}} />
                        </Button_Container>
                        <Text style={style.detalhes_title}>Detalhes</Text>
                        <Text style={style.detalhes_text}>{product.descrition}</Text>
                    </View>
                </Content>
            </Container>
        </Main_Container>
    );
}

const style = StyleSheet.create({
    image_slider: {
        width: '100%',
        display: 'flex',
    },
    product_content: {
        display: 'flex',
        width: '100%',
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